import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="bck_black">
      <Fade delay={500}>
        <div className="font_righteous">Macbook Pro &reg;</div>
        <div className="footer_copyright">Apple &copy;{year}</div>
      </Fade>
    </footer>
  );
};

export default Footer;
