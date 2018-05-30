import React from 'react';
import ChartTitle from './ChartTitle.js';
import TimerButton from './Timerbuttons.js';

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
	  	secondElapsed: (this.state.secondsElapsed = 0)
	});
	}

	render(){
		return (
			<div className="col-xs-3 col-sm-3 timerChart">
				<ChartTitle chartTitleClass="chart-title" chartTitle={'Timer'}/>
				<p className="timerClock">{this.getHours()}{this.getMinutes()}:{this.getSeconds()}</p>
				<TimerButton buttonClass="start-timer" event={this.handleStartClick} title={'Start'}/>
				<TimerButton buttonClass="stop-timer" event={this.handleStopClick} title={'Stop'}/>
				<TimerButton buttonClass="reset-timer" event={this.handleResetClick} title={'Reset'}/>
			</div>
		);
	}
};


export default Timer;

	