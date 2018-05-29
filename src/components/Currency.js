import React from 'react';

class Currency extends React.Component {
    state = {
        date: '',
        rates: {
            EUR: '',
            SEK: ''
        }
    }

    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=7f628aef40d7561fd2819bfe382c812b')
        .then(response => response.json())
        .then((data) => {
            this.setState({ date: data.date, rates: { SEK: data.rates.SEK, EUR: data.rates.EUR } })
        })
        .catch(error => {
            console.log(error);
        })
    }

    calculateCurrency = () => {
        let sum = this.state.rates.EUR / this.state.rates.SEK;
        return sum.toFixed(2);
    }

    render(){

        return (
            <div>
                <p>Updated: {this.state.date}</p>
    			<p>{this.state.rates.EUR} € = {this.state.rates.SEK} SEK</p>
                <p>1 SEK = { this.calculateCurrency() } euro</p>
                <button onClick={this.fetchCurrency}>Get todays rate</button>
             </div>
        );
    }
}

export default Currency;