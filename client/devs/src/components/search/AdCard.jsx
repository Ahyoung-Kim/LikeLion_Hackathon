import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import './search.css';

const AdCard = () => {
  return (
    <section style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}className='ad-card'>   

        <div className='id-container'>
            <img style={{width:'95px', borderRadius:'50%'}} src={require('../../static/profile-img.png')}></img>
            <div>
                <p className='ad-name'>코드라이언</p>
                <p className='ad-type'>인터넷 강의</p>
            </div>
        </div>

        <div className='ad-content'>
          <p>K-Digital Training은 멋쟁이사자처럼과 고용노동부가 함께하는. IT 인재양성 프로그램으로. 내일배움카드가 있다면 무료로 수강할 수 있는 온/오프라인 통합 과정입니다.</p>
        </div>

        <div className='ad-text'>
          광고
        </div>

    </section>
  );
};

export default React.memo(AdCard);