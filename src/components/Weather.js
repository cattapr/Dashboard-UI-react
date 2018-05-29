import React from 'react';

class Weather extends React.Component {
    state = {
        latestWeatherCity: [],
        latestWeatherTemp: [],
        latestWeatherDescription: [],
        latestWeatherIcon: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2673722&APPID=32f9c59ac069b4b06223120ca2052ef5')
        .then(response => response.json())
        .then((data) => {
            this.setState({ latestWeatherCity: data.city.name })
            this.setState({ latestWeatherTemp: data.list[0].main.temp})
            this.setState({ latestWeatherDescription: data.list[0].weather[0].description})
            this.setState({ latestWeatherIcon: data.list[0].weather[0].icon})     
        })
        .catch(error => {
            console.log(error);
        })
    }

  
    render() {
        console.log(this.state.latestWeatherCity)
        console.log(this.state.latestWeatherTemp)
        console.log(this.state.latestWeatherIcon)
        
        return (
            <div className="weatherInfo">
                <p>{this.state.latestWeatherCity}</p>
                <p>{this.state.latestWeatherTemp} °C</p>
                <p>{this.state.latestWeatherDescription}</p>
                <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIcon}.png`} />       
            </div>
        )
    }
}

export default Weather;