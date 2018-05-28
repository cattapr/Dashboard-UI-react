import React from 'react';

class Timer extends React.Component {
    
    state = {
    	secondsElapsed: 0
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

	render(){
		return (<div>
		<h1>{this.getMinutes()}:{this.getSeconds()}</h1>
			<button type="button" onClick = {this.handleStartClick}>Start</button>
			<button type="button" onClick = {this.handleStopClick}>Stop</button>
			<button type="button" onClick = {this.handleResetClick}>Reset</button>
		</div>);
	}
};


export default Timer;

	