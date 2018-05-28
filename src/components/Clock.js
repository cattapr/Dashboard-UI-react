import React from 'react';

class Clock extends React.Component {
    state = {
        date: new Date()
      }
    
      componentDidMount() {
        setInterval(
          () => this.update(),
          1000
        );
      }
    
      update = () => {
        this.setState({
          date: new Date()
        });
      }

    render() {
        return (
            <h1> { this.state.date.toLocaleTimeString() }</h1>
        )
    }
}

export default Clock;
