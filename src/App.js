import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state = {
			name: 'Yashwardhan',
			company: 'AurigaIT'
		}
	}
	render(){
		return (
			<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
				>
				Yashwardhan Gaur - Full Stack Developer
				</a>
				<p>Hi {this.state.name}, I work at {this.state.company}</p>
				<button onClick={() => {
					this.setState({name: 'Akshu'})
				}}>Change Name</button>
			</header>
			</div>
		);
	}
}
export default App;
