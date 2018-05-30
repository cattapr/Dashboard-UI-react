import React from 'react';
import ChartTitle from './ChartTitle.js';

class Timer extends React.Component {
    
    state = {
    	secondsElapsed: 0
    }

    getHours = () => {
    	return Math.floor(this.state.secondsElapsed / 3600);
    }

	getMinutes = () => {
		return Math.floor(this.state.secondsElapsed / 60);
	}

	getSeconds = () => {
		return ('0' + this.state.secondsElapsed % 60).slice(-2);
	}

	handleStartClick = () => {
		this.incrementer = setInterval(() => {
			this.setState({
				secondsElapsed: (this.state.secondsElapsed + 1)
			})
		}, 1000);
	}

	handleStopClick = () => {
		clearInterval(this.incrementer);
	}

	handleResetClick = () => {
	  return this.setState({
	  	secondElapsed: (this.state.secondsElapsed = '00')
	});
	}

	render(){
		return (
			<div className="col-xs-3 col-sm-3 timerChart">
				<ChartTitle/>
				<p className="timerClock">{this.getHours()}{this.getMinutes()}:{this.getSeconds()}</p>
				<button type="button" onClick = {this.handleStartClick}>Start</button>
				<button type="button" onClick = {this.handleStopClick}>Stop</button>
				<button type="button" onClick = {this.handleResetClick}>Reset</button>
			</div>
		);
	}
};


export default Timer;

	