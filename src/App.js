import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "11604a873e4f1ceacfc9863da32929b9";

class App extends React.Component {
  params = new URLSearchParams(window.location.search);
  state = {
    cityInput: this.params.get('city') || undefined,
    countryInput: this.params.get('country') || undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e && e.preventDefault();
    const city = this.state.cityInput;
    const country = this.state.countryInput;
    let api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
    if (window.location.href.indexOf('https:') == 0) {
      api_url = api_url.replace('http:', 'https:');
    }
    const api_call = await fetch(api_url);
    const data = await api_call.json();
    if (city && country) {
      if (data && data.main) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "City not found."
        });
      }
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }
  cityChanged = e => this.setState({cityInput: e.target.value});
  countryChanged = e => this.setState({countryInput: e.target.value});
  componentDidMount() {
    if (this.state.cityInput && this.state.countryInput) {
      this.getWeather();
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form 
                    city={this.state.cityInput} 
                    country={this.state.countryInput} 
                    getWeather={this.getWeather}
                    cityChanged={this.cityChanged}
                    countryChanged={this.countryChanged} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;