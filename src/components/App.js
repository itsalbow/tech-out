import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './Navbar';
import styles from '../styles.css';

export default class App extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
	  			<Navbar />
				{this.props.children}
			</div>
		);
	}
}
