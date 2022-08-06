import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './search.css';

const ProfileCard = () => {
  return (
    <section className='profile-card'>   
        <div className='float-container'>
            <img className="profile-pic" src={require('./profile-img.png')}></img>
            <div>
                <p className='profile-name'>최세은</p>
                <p className='profile-job'>웹 백엔드</p>
            </div>
        </div>

        <div className='profile-content'>
          <div className='profile-intro'><p>“spring framework 및 django를 공부하고 있습니다”</p></div>
          
          <div className='profile-spec'>
            <p style={{display:'inline'}}>학력 |</p> 
            <p style={{display:'inline'}}>서강대학교 컴퓨터공학과</p>
            <br></br>
            <p style={{display:'inline'}}>나이 |</p>
            <p style={{display:'inline'}}>24살 (1999년생)</p>
          </div>

          <div className='profile-skills'>
            <p>Programming Languages</p>
            <p >Python, C, java, ...</p>
          </div>
        </div>
    </section>
  );
};

export default React.memo(ProfileCard);