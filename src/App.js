import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "22d3dbd80cad3fcad177e535fb28d20b";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };
  handelSubmit = async (e) => {
    e.preventDefault();

    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;

    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    console.log(api);
    const data = await api.json();
    console.log(city, country);
    console.log(data);
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form handelSubmit={this.handelSubmit} />
        <Weather
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
