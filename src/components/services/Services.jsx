import React, { useState, useEffect } from "react";
import "./services.scss";
import { data } from "../../data";
import SingleService from "../singleService/SingleService";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronRLeftIcon from "@material-ui/icons/ChevronLeft";

function Services() {
  const [services, setServices] = useState(data.services);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = services.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, services]);

  useEffect(() => {
    let slide = setTimeout(() => {
      setIndex(index + 1);
    }, 8000);

    return () => {
      clearTimeout(slide);
    };
  });
  return (
    <div className="services" id="services">
      <h2>Services</h2>
      <div className="wrapper">
        {services.map((service, currentIndex) => (
          <SingleService
            key={currentIndex}
            index={index}
            services={services}
            currentIndex={currentIndex}
            service={service}
          />
        ))}
      </div>

      <ChevronRLeftIcon
        className="left next-prev"
        onClick={() => setIndex(index - 1)}
      />
      <ChevronRightIcon
        className="right next-prev"
        onClick={() => setIndex(index + 1)}
      />
    </div>
  );
}

export default Services;
