import React from 'react';
import { 
  LandingDiv, LandingContent, LandingFooter,
  LoginImg1, LoginImg2
} from '../../styledComponents';
import LandingTextComp from '../landing/LandingTextComp';
import LoginInput from './LoginInput';

const LoginPage = () => {
  return (
    <>
      <LandingDiv>

        <LandingTextComp />
        
        <LoginImg1 src="img/login-2.png" />
        <LoginImg2 src="img/login-1.png" />

        <LandingContent>
          <LoginInput />
        </LandingContent>

        <LandingFooter />

      </LandingDiv>
    </>
  );
};

export default React.memo(LoginPage);