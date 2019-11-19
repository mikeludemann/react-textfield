import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Textfield from './components/textfield';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render(){
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="content">
					<Textfield 
						headline="Name"
						handleSubmit={this.handleSubmit}
					></Textfield>
				</section>
				<footer className="App-footer">
					(c) Copyright - Mike Ludemann
				</footer>
			</div>
		);
	}
}

export default App;
