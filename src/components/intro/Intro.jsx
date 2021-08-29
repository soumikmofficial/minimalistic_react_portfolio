import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {
  const styleRef = useRef();

  useEffect(() => {
    init(styleRef.current, {
      showCursor: true,
      strings: ["Designer & Developer", "Nomad"],
      typeSpeed: 130,
      backSpeed: 80,
      backDelay: 1800,
      startDelay: 800,
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/avatar3.svg" width="100px" />
        </div>
      </div>
      <div className="right">
        <div className="container">
          <h3>Hello, I'm</h3>
          <h1>Someone Keuakta</h1>
          <h2>
            <span ref={styleRef}></span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;
