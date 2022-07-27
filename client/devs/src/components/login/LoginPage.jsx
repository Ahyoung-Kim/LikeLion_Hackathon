import React from 'react';
import { 
  LandingDiv, LandingContent, LandingFooter
} from '../../styledComponents';
import LandingTextComp from '../landing/LandingTextComp';
import LoginInput from './LoginInput';

const LoginPage = () => {
  return (
    <>
      <LandingDiv>

        <LandingTextComp />

        <LandingContent>
          <LoginInput />
        </LandingContent>

        <LandingFooter />

      </LandingDiv>
    </>
  );
};

export default React.memp(LoginPage);