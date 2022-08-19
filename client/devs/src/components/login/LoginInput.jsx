import React, { useState, useRef, useEffect } from 'react';
import { 
  LoginDiv, LoginBtn, LoginBtnDiv,
  RegisterText, RegisterUl, RegisterLi,
  RegisterInput, RegisterInputText,
  RegisterBtn
} from '../../styledComponents';
import axios from 'axios'
import { APIURL } from '../../config/key';
import { getCookie, setCookie } from '../../config/cookie';
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const [input, setInput] = useState({
    email: '',
    pwd: ''
  })
  const { email, pwd } = input;
  const emailRef = useRef();
  const pwdRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    })
  }
  const onKeyUp = (e) => {
    const { name } = e.target;

    if(e.key === 'Enter'){
      if(name === 'email'){
        pwdRef.current.focus();
      } else {
        onLogin();
      }
    }
  }

  const navigate = useNavigate();
  const sendRequest = async() => {
    const res = await axios.post(`${APIURL}/account/login/`, {
      email: email,
      password: pwd
    })

    console.log(res);
    if(res.data.success === 'true'){
      console.log('login success')
      console.log('res::::', res.data)
      setCookie('user_id', res.data.id, {maxAge: 3000, path: '/'})
      if(res.data.img === ''){
        console.log('no img')
        setCookie('user_img', `${APIURL}/media/uploads/profile-img.png`, {maxAge: 3000, path: '/'})
      }
      else{
        console.log('has img')
        setCookie('user_img', res.data.img, {maxAge: 3000, path: '/'})
        console.log('img cookie', getCookie('user_img'))
      }
      navigate('/main')
    } else {
      console.log('login fail')
    }
  }

  const onLogin = () => {
    if(!email || !pwd){
      alert('모든 정보를 입력해주세요!');
    } else {
      sendRequest();
    }
  }

  return (
    <>
      <LoginDiv>

        <RegisterText>
          당신의 스토리를 알려주세요!
        </RegisterText>

        <RegisterUl>
          <RegisterLi>
            <RegisterInputText>이메일</RegisterInputText>
            <RegisterInput 
              type="text"
              name="email"
              value={email}
              ref={emailRef}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </RegisterLi>
          <RegisterLi>
            <RegisterInputText>비밀번호</RegisterInputText>
            <RegisterInput 
              type="password"
              name="pwd"
              value={pwd}
              ref={pwdRef}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </RegisterLi>
        </RegisterUl>

        <RegisterBtn onClick={onLogin}>
          로그인
        </RegisterBtn>

        <LoginBtnDiv>
          <LoginBtn>아이디 찾기</LoginBtn>
          <LoginBtn>비밀번호 찾기</LoginBtn>
        </LoginBtnDiv>

      </LoginDiv>
    </>
  );
};

export default React.memo(LoginInput);