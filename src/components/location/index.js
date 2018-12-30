import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11985.535938948486!2d19.8179664!3d41.3222629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6af1559b2db09943!2sMolla+Store!5e0!3m2!1sen!2s!4v1546175128525"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
