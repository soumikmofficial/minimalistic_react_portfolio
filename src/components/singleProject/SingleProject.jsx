import "./singleProject.scss";

import React from "react";

function SingleProject({ name, url, category, image }) {
  return (
    <div className="singleProject">
      <a href={url}>
        <img src={image} alt="" />
        <h3>{name}</h3>
      </a>
    </div>
  );
}

export default SingleProject;
