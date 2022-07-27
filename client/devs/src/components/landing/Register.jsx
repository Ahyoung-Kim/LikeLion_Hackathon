import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  RegisterDiv, RegisterText, RegisterUl,
  RegisterLi, RegisterInputText, RegisterInput,
  RegisterBtn, AlreadyRegister
} from '../../styledComponents';

const RegTextComp = React.memo(() => (
  <RegisterText>
    지금 바로 가입하세요!
  </RegisterText>
))

const Register = () => {
  const [input, setInput] = useState({
    uname: '',
    email: '',
    nickname: '',
    pwd: '',
    pwd2: ''
  })
  const { uname, email, nickname, pwd, pwd2 } = input;
  const unameRef = useRef();
  const emailRef = useRef();
  const nickRef = useRef();
  const pwdRef = useRef();
  const pwd2Ref = useRef();

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
      if(name === "uname"){
        emailRef.current.focus();
      } else if(name === 'email'){
        nickRef.current.focus();
      } else if(name === 'nickname'){
        pwdRef.current.focus();
      } else if(name === 'pwd'){
        pwd2Ref.current.focus();
      } else if(name === 'pwd2'){
        onRegister();
      }
    }
  }

  const onRegister = () => {

  }

  const navigate = useNavigate();
  const goLogin = () => {
    navigate('/login');
  }

  return (
    <>
      <RegisterDiv>

        <RegTextComp />

        <RegisterUl>

          <RegisterLi>
            <RegisterInputText>이름</RegisterInputText>
            <RegisterInput 
              type="text"
              name="uname"
              value={uname}
              ref={unameRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          <RegisterLi>
            <RegisterInputText>이메일 주소</RegisterInputText>
            <RegisterInput 
              type="text"
              name="email"
              value={email}
              ref={emailRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          <RegisterLi>
            <RegisterInputText>유저 닉네임</RegisterInputText>
            <RegisterInput 
              type="text"
              name="nickname"
              value={nickname}
              ref={nickRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          <RegisterLi>
            <RegisterInputText>비밀번호</RegisterInputText>
            <RegisterInput 
              type="text"
              name="pwd"
              value={pwd}
              ref={pwdRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          <RegisterLi>
            <RegisterInputText>비밀번호 확인</RegisterInputText>
            <RegisterInput 
              type="text"
              name="pwd2"
              value={pwd2}
              ref={pwd2Ref}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

        </RegisterUl>

        <RegisterBtn onClick={onRegister}>
          가입하기
        </RegisterBtn>

        <AlreadyRegister onClick={goLogin}>
          이미 회원이신가요?
        </AlreadyRegister>

      </RegisterDiv>
    </>
  );
};

export default React.memo(Register);