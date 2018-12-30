import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/myButton";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountStop: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountStop) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Get the discout before the date expires</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio blanditiis consectetur eligendi recusandae id dolore.
              </p>
              <MyButton
                text="Book discount"
                bck="#ffa800"
                color="#fff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
