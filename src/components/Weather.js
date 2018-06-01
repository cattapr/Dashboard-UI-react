import React from 'react';
import ChartTitle from './ChartTitle.js';

class Weather extends React.Component {
    state = {
        latestWeatherCity: [],
        latestWeather: [],
        latestWeatherDescription: [],
        latestWeatherTemp: [],
        latestWeatherIcon: [],
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather = () => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?units=metric&id=2673722&APPID=00b34700d68c834e8dd5cc72cc067405')
        .then(response => response.json())
        .then((data) => {
                let latestWeather = [];
                latestWeather.push(data.list[0].dt_txt);
                latestWeather.push(data.list[1].dt_txt);
                latestWeather.push(data.list[2].dt_txt);

                let latestWeatherTemp = [];
                latestWeatherTemp.push(data.list[0].main.temp);
                latestWeatherTemp.push(data.list[1].main.temp);
                latestWeatherTemp.push(data.list[2].main.temp);

                let latestWeatherDescription = [];
                latestWeatherDescription.push(data.list[0].weather[0].description);
                latestWeatherDescription.push(data.list[1].weather[0].description);
                latestWeatherDescription.push(data.list[2].weather[0].description);

                let latestWeatherIcon = [];
                latestWeatherIcon.push(data.list[0].weather[0].icon);
                latestWeatherIcon.push(data.list[1].weather[0].icon);
                latestWeatherIcon.push(data.list[2].weather[0].icon);

            this.setState({ latesWeatherCity: data.city.name, latestWeather: latestWeather, 
                latestWeatherTemp: latestWeatherTemp, latestWeatherDescription: latestWeatherDescription,
                latestWeatherIcon: latestWeatherIcon });
        })

        .catch(error => {
            console.log(error);
        })
    }

  
    render() {
        return (
                <div className="row weatherChart">
                    <div className="col-xs-4 col-sm-offset-1 col-sm-3 weatherInfoChart">
                        <p className="weatherDate">{this.state.latestWeather[0]}</p>
                        <p className="temp">{this.state.latestWeatherTemp[0]} °C</p>
                        <p>{this.state.latestWeatherDescription[0]}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIcon[0]}.png`} />       
                    </div>
                    <div className="col-xs-4 col-sm-3 col-sm-offset-1 weatherInfoChart">
                        <p className="weatherDate">{this.state.latestWeather[1]}</p>
                        <p className="temp">{this.state.latestWeatherTemp[1]} °C</p>
                        <p>{this.state.latestWeatherDescription[1]}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIcon[1]}.png`} />       
                    </div>
                    <div className="col-xs-4 col-sm-offset-1 col-sm-3 weatherInfoChart">
                         <p className="weatherDate">{this.state.latestWeather[2]}</p>
                        <p className="temp">{this.state.latestWeatherTemp[2]} °C</p>
                        <p>{this.state.latestWeatherDescription[2]}</p>
                        <img src={`https://openweathermap.org/img/w/${this.state.latestWeatherIcon[2]}.png`} />       
                    </div>
                </div>
        )
    }
}

export default Weather;