import React from 'react';
import Timer from './Timer.js';
import Postit from './Todo.js';
import Weather from './Weather.js';
import Currency from './Currency.js';

class Main extends React.Component {
	render(){
	   return (
    	<div className="container">
	    	<div className="row">
		    	<div className="col-xs-12 WeatherBox">
				     <Weather/>
				 </div>
			 </div>

			 <div className="row">
		    	<div className="col-xs-12 col-sm-4 TimerBox">
			      <Timer/>
	       	 	</div>

			 <div className="col-xs-12 col-sm-8 NewNoteBox">
				<Postit/>
			 </div>

			 </div>

			<div className="row">
				<div className="col-xs-12 col-sm-12 CurrencyBox">
			     	<Currency/>
			     </div>
			</div>
	 
        </div>
   	  )
	}	
}
 

export default Main;