import React, { Component } from 'react';

const NoteInput = (props) => {
    return (
    	<div className="postAnote">
	        <form id = {props.formID}>
	            <textarea id={props.NoteInputID} placeholder={props.placeHolder}>
	            </textarea>
	            <button id={props.buttonID} onClick={props.event}>Post it</button>
	        </form>
        </div>
        )
}

export default NoteInput;