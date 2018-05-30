import React, { Component } from 'react';

const TimerButton = (props) => {
    return (
    	<div className="timer-buttons">
			<button className={props.buttonClass} onClick={props.event}>{props.title}</button>
	    </div>
        )
}

export default TimerButton;