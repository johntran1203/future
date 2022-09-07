import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";

export const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  return (
    <nav>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/newFood"> Enter food </Link>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          const {id, url, icon} = socialIcon
          return (
            <li key={id}><a href={url}>{icon}</a></li>
          )
        })}
      </ul>
    </nav>
  );
};
