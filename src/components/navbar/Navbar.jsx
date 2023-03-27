import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const currentUser = {
    id: 1,
    username: "hho ow",
    isSeller: true,
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        {/* <Link to="/"> */}
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        {/* </Link> */}
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a seller</span>}
          {!currentUser ? (
            <button>Join</button>
          ) : (
            <div className="user" onClick={() => setOpen((prev) => !prev)}>
              <img src="/assets/imgs/11.jpeg" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <>
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <span>Gigs</span>
                        <span>Add new Gig</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      {active && (
        <>
          <div className="menu">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
}
