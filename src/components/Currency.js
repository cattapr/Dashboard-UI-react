import React from 'react';
import ChartTitle from './ChartTitle.js';

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
        console.log('hej');
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
            <div className="col-xs-6 col-sm-3 currencyChart">
                <ChartTitle chartTitleClass="chart-title" chartTitle={'Currency'}/>
                <p>Updated: {this.state.date}</p>
    			<p>{this.state.rates.EUR} € = {this.state.rates.SEK} SEK</p>
                <p>1 SEK = { this.calculateCurrency() } euro</p>
                <button onClick={this.fetchCurrency}>Get todays rate</button>
             </div>
        );
    }
}

export default Currency;