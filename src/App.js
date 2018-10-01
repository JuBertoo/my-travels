import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Travels from "./Travels";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
          destination="Bali"
          country="Indonesie"
          distance="10 284 kilomètres"
          photo="https://www.bali.com/media/image/663/best-resorts-bali.jpg"
        />
        <Travel
           destination="Bilbao"
           country="Espagne"
           distance="494,80 kilomètres"
           photo="https://c1.staticflickr.com/4/3374/3432848128_9a8ce4ca3c_b.jpg"
        />
        <Travels />
      </div>
    );
  }
}

export default App;
