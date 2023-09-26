import { Component } from 'react'
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			monsters:[
			{
				name: "Ashok",
				id:1,
			},
			{
				name: "Ramesh",
				id:2,
			},
			{
				name: "Pakiya",
				id:3,
			},
			{
				name: "Charan",
				id:4,
			}
		]
		}
	}
	render(){
		return (
			<div className="App">
				{
					this.state.monsters.map((monster)=> {
					return <div key={monster.id}><h1>{monster.name}</h1></div>
				})
				}
			</div>
		);
	}
}
export default App;
