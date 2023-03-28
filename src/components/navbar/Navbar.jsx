import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

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
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </div>
        </Link>
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
                        <Link className="link" to="/mygigs">
                          Gigs
                        </Link>
                        <Link className="link" to="/add">
                          Add new Gig
                        </Link>
                      </>
                    )}
                    <Link className="link" to="orders">
                      Orders
                    </Link>
                    <Link className="link" to="messages">
                      Messages
                    </Link>
                    <Link className="link">Logout</Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
      {(active || pathname !== "/") && (
        <>
          <div className="menu">
            <Link className="link">Test</Link>
            <Link className="link">Test2</Link>

            <Link className="link">Test</Link>
            <Link className="link">Test2</Link>

            <Link className="link">Test</Link>
            <Link className="link">Test2</Link>

            <Link className="link">Test</Link>
            <Link className="link">Test2</Link>
          </div>
        </>
      )}
    </div>
  );
}
