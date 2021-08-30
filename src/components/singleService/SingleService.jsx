import React, { useState, useEffect } from "react";
import "./singleService.scss";

function SingleService({ services, currentIndex, index, service }) {
  const { name, id, details } = service;

  let position = "next";

  if (currentIndex === index) {
    position = "active";
  }
  if (
    currentIndex === index - 1 ||
    (index === 0 && currentIndex === services.length - 1)
  ) {
    position = "prev";
  }

  return (
    <div className={`singleService ${position}`}>
      <div className="header">
        <h3>{name}</h3>
      </div>
      <div className="details">
        <ul>
          {details.map((detail) => (
            <li>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleService;
