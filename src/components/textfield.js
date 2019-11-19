import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textfield extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		console.log('Change content: ' + this.state.value);
	}

	render(){
		let name = this.props.headline.toLowerCase();
		return(
			<form onSubmit={() => this.props.handleSubmit}>
				<label>
					<div>{this.props.headline}</div>
					<input type="text" value={this.state.value} name={name} onChange={this.handleChange} />
				</label>
				<div>
					<input type="submit" value="Submit" />
				</div>
			</form>
		);
	}
}

export default Textfield;

Textfield.propTypes = {
	headline: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired
}
