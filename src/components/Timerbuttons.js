import React, { Component } from 'react';

const TimerButton = (props) => {
    return (
	    	<div className="col-xs-4 timer-buttons">
				<button className={props.buttonClass} onClick={props.event}>{props.title}</button>
		    </div>
        )
}

export default TimerButton;