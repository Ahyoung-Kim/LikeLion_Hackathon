import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { APIURL } from '../../config/key';
import { 
  RegisterDiv, RegisterText, RegisterUl,
  RegisterLi, RegisterInputText, RegisterInput,
  RegisterBtn, AlreadyRegister, WrongInputText
} from '../../styledComponents';

const RegTextComp = React.memo(() => (
  <RegisterText>
    지금 바로 가입하세요!
  </RegisterText>
))

const Register = () => {
  // 이메일 유효성 검사
  const [isRightEmail, setIsRightEmail] = useState(true);
  // 비밀번호 8자 미만일 시 true -> 비밀번호 재입력칸 비활성화
  const [isPwdRight, setIsPwdRight] = useState(false);
  // 비밀번호 재입력 일치하지 않았을 때
  const [isPwdDiff, setIsPwdDiff] = useState(false);

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

  // 이메일 유효성 검사
  useEffect(() => {
    if(!email){
      setIsRightEmail(true)
      return
    }

    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    // 형식에 맞는 경우 true 리턴
    //console.log('이메일 유효성 검사 :: ', regExp.test(email))

    if(regExp.test(email)){
      setIsRightEmail(true)
    } else {
      setIsRightEmail(false)
    }

  }, [email])

  // 비밀번호 유효성 검사
  useEffect(() => {
    if(!pwd){
      setIsPwdRight(true);
      return;
    }

    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
    // 형식에 맞는 경우 true 리턴
    //console.log('비밀번호 유효성 검사 :: ', regExp.test(pwd))

    if(regExp.test(pwd)){
      setIsPwdRight(true);
    } else {
      setIsPwdRight(false);
    }

  }, [pwd])

  // 비밀번호 재입력 유효성 검사
  useEffect(() => {
    if(pwd2 === ''){
      setIsPwdDiff(false)
      return
    }

    if(pwd2 !== pwd){
      setIsPwdDiff(true)
    } else {
      setIsPwdDiff(false)
    }
  }, [pwd2])

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

  const sendRequest = async() => {
    const res = await axios.post(`${APIURL}/account/signup/`, {
      email: email,
      password: pwd,
      nickname: nickname,
      name: uname
    })

    console.log(res);

    if(res.data.success === 'true'){
      alert('회원가입 성공! 환영합니다.')
      navigate('/login');
    } else {
      console.log('sign up fail')
      alert('이메일 또는 닉네임이 중복되었습니다.')
    }
  }

  const onRegister = () => {
    if(!email || !pwd || !nickname || !uname || !pwd2){
      alert('모든 정보를 입력해주세요!')
    } else if(!isRightEmail){
      alert('이메일 표기식이 잘못되었습니다!')
    } else if(isPwdDiff) {
      alert('비밀번호가 일치하지 않습니다')
    } else {
      sendRequest();
    }
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
            <RegisterInputText>이메일 주소</RegisterInputText>
            { !isRightEmail && (
              <WrongInputText>
                올바른 이메일 표현식이 아닙니다.
              </WrongInputText>
            )}
            <RegisterInput 
              type="text"
              name="email"
              value={email}
              ref={emailRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          <RegisterLi>
            <RegisterInputText>비밀번호</RegisterInputText>
            {!isPwdRight && (
              <WrongInputText>
                영문, 숫자 조합 8~16자를 입력해주세요.
              </WrongInputText>
            )}
            {isPwdRight && isPwdDiff && (
              <WrongInputText>
                비밀번호가 일치하지 않습니다.
              </WrongInputText>
            )}
            <RegisterInput 
              type="password"
              name="pwd"
              placeholder='영문, 숫자 조합 8~16자'
              value={pwd}
              ref={pwdRef}
              onChange={onChange}
              onKeyUp={onKeyUp} />

            <RegisterInput 
              type="password"
              name="pwd2"
              placeholder='비밀번호 확인'
              value={pwd2}
              ref={pwd2Ref}
              disabled={isPwdRight && pwd ? false : true}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi>

          {/* <RegisterLi>
            <RegisterInputText>비밀번호 확인</RegisterInputText>
            <RegisterInput 
              type="password"
              name="pwd2"
              placeholder='비밀번호 확인'
              value={pwd2}
              ref={pwd2Ref}
              disabled={isPwdRight ? false : true}
              onChange={onChange}
              onKeyUp={onKeyUp} />
          </RegisterLi> */}

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