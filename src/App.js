import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Request from 'superagent';
import _ from 'lodash';

class App extends Component {
    constructor(){
		super();
		this.state ={};
	}
	componentWillMount(){
	    var response = require('./words.json');
		var responseData = response.words;
		var arrayResponse = responseData.filter(function(responseData){
			return responseData.ratio >= 0
		});
		this.setState({
				movies : arrayResponse
			});
		
	}
	componentDidMount(){
		
	}
	updateSearch(){
		var search = this.refs.query.value;
		var response = require('./words.json');
		var responseData = response.words;
		
		var arrayResponse = responseData.filter(function(responseData){
			return responseData.word.indexOf(search) !== -1
		});
		
		this.setState({
				movies : arrayResponse
			});
	}
    render() {
		var movies = _.map(this.state.movies,(movies)=>{
			return <li>{movies.word}</li>
		});
        return (
			<div>
			    <input ref="query" onChange={(e)=>{this.updateSearch();}} type="text"/>
				<ul>{movies}</ul>
			</div>
        );
    }
}

export default App;























