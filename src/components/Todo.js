import React, { Component } from 'react';
import NoteInput from './NoteInput.js';

class Postit extends Component {
    state = {
        postitNote: localStorage.getItem('notes')
      }

    submitNote = () => {
        let note = document.getElementById("NoteInput").value;
        this.setState({ postItNote: note });
        localStorage.setItem('notes', note);
    }

    render(){
        console.log(this.state.notes);
    return ( 
        <div id="postIt" className="col-xs-12 col-sm-5 col-sm-offset-1">
          <NoteInput formID="formNote" className="postItNote" NoteInputID="NoteInput" buttonID="notesSubmit" event={this.submitNote}/>
          <div className ="topBar"><h4>Write a sticky note</h4></div>
              <div className="form">
                <p>{this.state.postitNote}</p>
             </div>
          </div>
        )
    }
}

export default Postit;



    