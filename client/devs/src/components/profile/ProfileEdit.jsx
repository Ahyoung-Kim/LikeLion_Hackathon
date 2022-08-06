import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../../config/key';


//원래 계획은 여기에다가 입력 받고 수정하는 거 구현하려고 했습니다



const ProfileEdit = () => {
    // 소개란에 입력 받는 5가지
    const [intro, setIntro] = useState({
      belongs: '',
      major: '',
      position: '',
      subposition: '',
      introduction: ''
    })
    const [input, setInput] = useState('')
    const { belongs, major, position, subposition, introduction } = intro;

    
  
    const onEditIntro = (e) => {
      const { name, value } = e.target;
  
      setIntro((prevState) => {
        return [input, ...prevState]
      })
    }

    console.log(input)
  
    
    return (
      <>
        
      </>
    );
  };
  
  export default React.memo(ProfileEdit);