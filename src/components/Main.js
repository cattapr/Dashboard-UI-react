import React from 'react';
import Timer from './Timer.js';
import PostIt from './Todo.js';
import Weather from './Weather.js';
import Currency from './Currency.js';

class Main extends React.Component {
	render(){
	   return (
    	<div className="container">
    	<h1 className="App-title">Dashboard</h1>
    			<Weather/>	
			<div className="row">
				<PostIt/>
				<Timer/>
				<Currency/>
			</div>
        </div>
   	  )
	}	
}
 

export default Main;