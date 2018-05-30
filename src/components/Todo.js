import React from 'react';
import NoteInput from './NoteInput.js';
import ChartTitle from './ChartTitle.js';

class Postit extends React.Component {
    state = {
        postitNote: localStorage.getItem('notes')
      }

    submitNote = () => {
        let note = document.getElementById("NoteInput").value;
        this.setState({ postItNote: note });
        localStorage.setItem('notes', note);
    }

    render(){
    return ( 
        <div id="postIt" className="col-xs-12 col-sm-5 col-sm-offset-1">
          <NoteInput formID="formNote" className="postItNote" NoteInputID="NoteInput" buttonID="notesSubmit" event={this.submitNote}/>
          <div className ="topBar"><ChartTitle chartTitle={'Write a sticky note'}/></div>
              <div className="form">
                <p>{this.state.postitNote}</p>
             </div>
          </div>
        )
    }
}

export default Postit;



    