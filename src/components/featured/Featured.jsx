import React from "react";
import "./Featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect freelance services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobile app"' />
              <button>Search</button>
            </div>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web design</button>
            <button>Wordpress</button>
            <button>Logo design</button>
            <button>Game publishing</button>
            <button>AI services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}
