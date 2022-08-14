import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";

import ProfileCard from './ProfileCard';
import AdCard from './AdCard';
const SearchResultPage = () => {
  return (
    <>

        <div className='search-div'>
            <Form className="main-search-bar">
            <Form.Control
              type="search"
              placeholder="원하는 프로필을 찾아보세요"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'#D9D9D9', border:'none'}}><FontAwesomeIcon icon={faMagnifyingGlass} size='xl' style={{padding: '5px', margin: '5px', color:'white'}}/></Button>
            </Form>
        </div>

        <div className='recommend-bar'>
            <div className='recommend-who'>
                <span id='user-name'>아영</span>
                <span style={{color:'#707070'}}>님께 추천드려요</span>
            </div>
            
            <Button className='recommend-chip' variant='secondary'>#node js</Button>
            <Button className='recommend-chip' variant='secondary'>#javascript</Button>
            <Button className='recommend-chip' variant='secondary'>#python</Button>
        </div>


        <section className='flex-box-r search-result-card'>
            <img className = 'search-result-img' src={require('../../static/profile-img.png')}></img>
            
            <div className='flex-box-c search-result-detail'>
                <div className='search-result-user'>도영</div>
                <div>
                  <span className='search-result-position'>Frontend</span>
                  <span className='search-result-job'>@ job</span>
                </div>              
                <div className='search-result-school'>school</div>
            </div>
            <div className='search-result-introduction-box'>
              <p>
                axios get intro
              </p>
            </div>
            
            <button className='search-result-button'>
                IDOL 등록
            </button>
        </section>


    </>
  );
};

export default React.memo(SearchResultPage);