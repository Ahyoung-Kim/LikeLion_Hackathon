import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";
import './navigationbar.css';
import { useLocation, useNavigate } from 'react-router-dom';


const NavigationBar = () => {
  const location = useLocation().pathname

  const navigate = useNavigate();
  const goProfile = () => {
    navigate('/profile')
  }
  const goMain = () => {
    navigate('/mainpage')
  }

  if(location === '/' || location === '/login'){
    return (
      <></>
    )
  }

  return (
    <>
      <Navbar className='navbar' styledbg="light" expand="lg">
      <Container fluid>
        <div className='nav-logo' onClick={goMain}>
          <span className="maintitle" href="#">뎁스</span>
          <span className="subtitle" href="#">devStory</span>
        </div>
  

        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100spanx' }}
          navbarScroll
        >
          
          <Form  style={{marginLeft:'80px'}}className="d-flex">
          <Form.Control 
            type="search"
            placeholder="Search"
            className="nav-searchbar me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">
            <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'/>
          </Button>
          </Form>
        
    
        </Nav>
          
        <span class="nav-icon material-symbols-outlined">
        notifications
        </span>
        <span class="nav-icon material-symbols-outlined">
        home
        </span>
        <span class="nav-icon material-symbols-outlined">
        settings
        </span>

        <img className="profile-pic" 
        style={{width:'26px', marginLeft:'24px'}}
        src={require('./search/profile-img.png')}
        onClick={goProfile} />

      </Container>
    </Navbar>
    </>
  );

};

export default React.memo(NavigationBar);