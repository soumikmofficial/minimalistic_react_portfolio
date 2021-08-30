import "./singleProject.scss";

import React from "react";

function SingleProject({ name, url, category, image }) {
  return (
    <div className="singleProject">
      {/* style={{ backgroundImage: `url(${image})` }} */}
      {/* <a href={url}></a> */}
      <img src={image} alt="" />
      <h3>
        <a href="">{name}</a>
      </h3>
    </div>
  );
}

export default SingleProject;
