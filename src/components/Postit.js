import React from 'react';
import NoteInput from './NoteInput.js';
import PinnedPost from './PinnedPost.js';

class Postit extends React.Component {
    state = {
        postitNote: localStorage.getItem('notes'),
        postPined: <i class="fas fa-thumbtack fa-3x"></i>
      }

    submitNote = () => {
        let note = document.getElementById("NoteInput").value;
        this.setState({ postItNote: note });
        localStorage.setItem('notes', note);
    }

    render(){
    return ( 
        <div id="postitChart" className="col-xs-12 col-sm-5 col-sm-offset-1">
                <NoteInput formID="formNote" className="postItNote" NoteInputID="NoteInput" 
                buttonID="notesSubmit" event={this.submitNote} placeHolder="Write your note here, it will be save on your sticky note" />
          <div className="topBar"><PinnedPost chartTitle={'Write a sticky note'}/></div>
              <div className="form">
                <p className="noteStyle">{this.state.postitNote}</p>
             </div>
          </div>
        )
    }
}

export default Postit;



    