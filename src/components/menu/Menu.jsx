import React from "react";
import "./menu.scss";
import { data } from "../../data";

function Menu({ menuOpen, setMenuOpen }) {
  const items = data.menu;
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
