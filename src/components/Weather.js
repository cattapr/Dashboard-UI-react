import React from 'react';

class Weather extends React.Component {
    state = {
        latestWeather: [],
        latestWeatherThreeOclock: [],
        latestWeatherSixOclock: [],
        latestWeatherCity: [],
        latestWeatherTemp: [],
        latestWeatherDescription: [],
        latestWeatherIcon: [],
        latestWeatherTempThreeOclock: [],
        latestWeatherDescriptionThreeOclock: [],
        latestWeatherIconThreeOclock: [],
        latestWeatherTempSixOclock: [],
        latestWeatherDescriptionSixOclock: [],
        latestWeatherIconSixOclock: [],
        searchTerm: ''
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2673722&APPID=00b34700d68c834e8dd5cc72cc067405')
        .then(response => response.json())
        .then((data) => {
            this.setState({ latestWeather: data.list[0].dt_txt })
            this.setState({ latestWeatherCity: data.city.name })
            this.setState({ latestWeatherTemp: data.list[0].main.temp})
            this.setState({ latestWeatherDescription: data.list[0].weather[0].description})
            this.setState({ latestWeatherIcon: data.list[0].weather[0].icon})  
            this.setState({ latestWeatherThreeOclock: data.list[1].dt_txt })
            this.setState({ latestWeatherTempThreeOclock: data.list[1].main.temp})
            this.setState({ latestWeatherDescriptionThreeOclock: data.list[1].weather[0].description})
            this.setState({ latestWeatherIconThreeOclock: data.list[1].weather[0].icon}) 
            this.setState({ latestWeatherSixOclock: data.list[2].dt_txt })
            this.setState({ latestWeatherTempSixOclock: data.list[2].main.temp})
            this.setState({ latestWeatherDescriptionSixOclock: data.list[2].weather[0].description})
            this.setState({ latestWeatherIconSixOclock: data.list[2].weather[0].icon})     
        })
        .catch(error => {
            console.log(error);
        })
    }

  
    render() {
        return (
                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-sm-offset-1 weatherInfoChart">
                        <p>{this.state.latestWeather}</p>
                        <p>{this.state.latestWeatherTemp} °C</p>
                        <p>{this.state.latestWeatherDescription}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIcon}.png`} />       
                    </div>
                    <div className="col-xs-4 col-sm-3 col-sm-offset-1 weatherInfoChart">
                        <p>{this.state.latestWeatherThreeOclock}</p>
                        <p>{this.state.latestWeatherTempThreeOclock} °C</p>
                        <p>{this.state.latestWeatherDescriptionThreeOclock}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIconThreeOclock}.png`} />       
                    </div>
                    <div className="col-xs-4 col-sm-3 weatherInfoChart">
                         <p>{this.state.latestWeatherSixOclock}</p>
                        <p>{this.state.latestWeatherTempSixOclock} °C</p>
                        <p>{this.state.latestWeatherDescriptionSixOclock}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIconSixOclock}.png`} />       
                    </div>
                </div>
        )
    }
}

export default Weather;