import React, { Component } from "react";
import MyButton from "../utils/myButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [2000, 2500, 2300],
    positions: ["Macbook 4gb", "PRO 16gb", "Macbook 8gb"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt, nihil, hic ullam",
      "porro deserunt modi fuga dolore debitis explicabo voluptate quidem doloribus eos.",
      "corporis eum adipisci dignissimos nulla autem iusto nam facere, quidem culpa doloribus consectetur."
    ],
    linkto: ["http://google.com", "http://facebook.com", "http://youtube.com"],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <div className="pricing_item">
        <Zoom delay={this.state.delay[i]} key={i}>
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_button">
              <MyButton
                text="Book discount"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </Zoom>
      </div>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
