import React, { useState, useEffect } from "react";
import "./portfolio.scss";
import { data } from "../../data";
import SingleProject from "../singleProject/SingleProject";

function Portfolio() {
  const [projects, setProjects] = useState(data.portfolio);
  const [categories, setCategories] = useState([
    "all",
    ...new Set(projects.map((item) => item.category)),
  ]);

  const [selected, setSelected] = useState("all");

  useEffect(() => {
    let newProjects = "";
    if (selected === "all") {
      newProjects = data.portfolio;
    } else {
      newProjects = data.portfolio.filter((item) => item.category === selected);
    }
    setProjects(newProjects);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="header">
        <h2>Portfolio</h2>
      </div>
      <div className="content">
        <div className="categories">
          <ul>
            {categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className={category === selected && "active"}
                  onClick={() => setSelected(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="projects">
          {projects.map((project) => {
            return <SingleProject key={project.id} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
