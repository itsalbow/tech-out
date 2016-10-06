import React,{ Component } from 'react';

// This is a stateful React using es6 classes.
// Just an example though, it isn't using any state.
export default class German extends Component{
	constructor(){
		super();
		this.state = {};
	}
	render(){
		return(
			<h1>Hallo Welt</h1>
		);
	}
}
