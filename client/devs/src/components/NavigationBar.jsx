import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./navigationbar.css";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation().pathname;

  const navigate = useNavigate();
  const goProfile = () => {
    navigate("/profile");
  };
  const goMain = () => {
    navigate("/mainpage");
  };

  if (location === "/" || location === "/login") {
    return <></>;
  }

  return (
    <>

      <section className="navbar">
        <div className="nav-logo" onClick={goMain}>
          <span className="maintitle" href="#">
            뎁스
          </span>
          <span className="subtitle" href="#">
            devStory
          </span>
        </div>
        
        
        <div style={{display:'flex', width:'350px', justifyContent:'space-between'}}>
          <input className='nav-searchbar' type='text' placeholder="Search"></input>
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </Button>
        </div>

        <div className="nav-icons">
          <span class="nav-icon material-symbols-outlined">notifications</span>
          <span class="nav-icon material-symbols-outlined">home</span>
          <span class="nav-icon material-symbols-outlined">settings</span>

          <img
            className="profile-pic"
            src={require("./search/profile-img.png")}
            onClick={goProfile}
          />
        </div>

      </section>
    </>
  );
};

export default React.memo(NavigationBar);
