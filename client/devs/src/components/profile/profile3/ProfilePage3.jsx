import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './profilepage3.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faClipboardCheck} from "@fortawesome/free-solid-svg-icons";


const ProfilePage3 = () => {
  return (
    <>


        <div style={{display: 'flex', justifyContent: 'center'}}>
        <section className='profile3-content'>
            <div className='skill'>
                <div className='skill-header'>
                    <p className='skill-name'>Programming Languages - Javascript</p>
                    <Button className='skill-edit'>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </Button>
                </div>
                
                <div className='skill-specific'>
                    <FontAwesomeIcon className='check-icon' icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[Javascript] 자바스크립트의 데이터 타입</p>
                </div>
                <div className='skill-specific'>
                    <FontAwesomeIcon className='check-icon' icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[JavaScript] 자바스크립트의 fetch & axios</p>
                </div>
                <div className='skill-specific'>
                    <FontAwesomeIcon className='check-icon' icon={faClipboardCheck} size='xl'></FontAwesomeIcon>
                    <p>[JavaScript] 자바스크립트의 콜백 함수 Callback</p>
                </div>
            </div>
        </section>
        </div>
    </>
  );
};

export default React.memo(ProfilePage3);