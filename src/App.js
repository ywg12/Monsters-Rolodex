import { Component } from 'react'
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			monsters: [],
			searchField : ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then((users)=> this.setState(() => {
				return {monsters :users};
			},
			() => {}
			))
	}
	render(){
		const filteredMosters = this.state.monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(this.state.searchField);
		})
		
		return (
			<div className="App">
				<input className='search-box' type='search' placeholder='Search Monsters' onChange={(event) => {						
						const searchString = event.target.value.toLocaleLowerCase();
						this.setState(() => {
							return {searchField :searchString}
						});
						
				}}>

				</input>
				{
					filteredMosters.map((monster)=> {
					return <div key={monster.id}><h1>{monster.name}</h1></div>
				})
				}
			</div>
		);
	}
}
export default App;
