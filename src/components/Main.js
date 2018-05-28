import React from 'react';
import Timer from './Timer.js';
import Clock from './Clock.js';


class Main extends React.Component {
	render(){
	   return (
    	<div className="container">
	    	<div className="row">

		    	<div className="col-xs-12 col-sm-4">
			      <Timer/>
	       		</div>

	       		 <div className="col-xs-12 col-sm-4">
			     	<Clock/>
			     </div>

			     <div className="col-xs-12 col-sm-4">
			     <p>Here is Weather</p>
			     </div>

	        </div>
        </div>
   	  )
	}	
}
 

export default Main;