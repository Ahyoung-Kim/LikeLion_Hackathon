import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './search.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHouse, faBell, faGear} from "@fortawesome/free-solid-svg-icons";

import ProfileCard from './ProfileCard';
import AdCard from './AdCard';
const SearchPage = () => {
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
            <div className='recommend-item'>
                <span className='recommend-what'>#node.js</span>
            </div>
            <div className='recommend-item'>
                <span className='recommend-what'>#python</span>
            </div>
            <div className='recommend-item'>
                <span className='recommend-what'>#공부</span>
            </div>
        </div>


        <section style={{justifyContent:'center'}} className='flex-box-r'>
            <div style={{alignItems:'center', width:'90vw'}}className='flex-box-c'>
                <p className="suggest">
                    이 프로필은 어떠세요?
                </p>
        
                <div style={{display:'flex', justifyContent:'center'}}>
                    <section className='cards-section'>
                        <ProfileCard></ProfileCard>
                        <ProfileCard></ProfileCard>
                        <AdCard></AdCard>
                        <AdCard></AdCard>
                        <AdCard></AdCard>
                    </section>
                </div>
            </div>
        </section>
    </>
  );
};

export default React.memo(SearchPage);