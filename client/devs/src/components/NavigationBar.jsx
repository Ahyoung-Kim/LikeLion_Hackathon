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
import { getCookie } from "../config/cookie";

const NavigationBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if(getCookie('user_id')){
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [getCookie('user_id')])

  const navigate = useNavigate();
  const goProfile = () => {
    // 임시 경로
    navigate("/profile/123");
  };
  const goMain = () => {
    navigate("/main");
  };
  const goLogin = () => {
    navigate('/login');
  }
  const goRegister = () => {
    navigate('/');
  }

  if (location === "/" || location === "/login") {
    return <></>;
  }

  return (
    <>
    <div className="navbar-big">

      <section className="navbar">
        <div className="nav-logo" onClick={goMain}>
          <span className="maintitle" href="#">
            뎁스
          </span>
          <span className="subtitle" href="#">
            devStory
          </span>

          <div style={{display:'flex', width:'350px', justifyContent:'space-between', alignItems: 'center'}}>
            <input className='nav-searchbar' type='text' placeholder="Search"></input>
            {/* <Button variant="outline-success">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </Button> */}
          </div>
        </div>
        
        
        {/* <div style={{display:'flex', width:'350px', justifyContent:'space-between', alignItems: 'center'}}>
          <input className='nav-searchbar' type='text' placeholder="Search"></input>
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </Button>
        </div> */}

        {isLogin ? (
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
        ) : (
          <div className="nav-icons">
            <span onClick={goLogin} className="account-div">로그인</span>
            <span onClick={goRegister} className="account-div">회원가입</span>
          </div>
        )}

      </section>

    </div>
    </>
  );
};

export default React.memo(NavigationBar);
