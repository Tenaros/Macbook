import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

//Components
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Macinfo from "./components/mac_info";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />
        <Element name="Featured">
          <Featured />
        </Element>
        <Element name="info">
          <Macinfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
