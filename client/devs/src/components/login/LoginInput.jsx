import React, { useState, useRef, useEffect } from 'react';
import { 
  LoginDiv, LoginBtn, LoginBtnDiv,
  RegisterText, RegisterUl, RegisterLi,
  RegisterInput, RegisterInputText,
  RegisterBtn
} from '../../styledComponents';

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

  const onLogin = () => {

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
              type="text"
              name="pwd"
              value={pwd}
              ref={pwdRef}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </RegisterLi>
        </RegisterUl>

        <RegisterBtn onClick={onLogin}
          style={{marginTop: '60px'}}>
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