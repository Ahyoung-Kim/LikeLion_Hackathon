import React from 'react';
import { 
  LandingDiv, DevsText, LandingContent, LandingFooter
} from '../../styledComponents';
import LandingInfo from './LandingInfo';
import Register from './Register';
import LandingTextComp from './LandingTextComp';

const LandingPage = () => {
  return (
    <>
      <LandingDiv>

        <LandingTextComp />

        <LandingContent>

          <LandingInfo />

          <Register />

        </LandingContent>

        <LandingFooter />

      </LandingDiv>
    </>
  );
};

export default React.memo(LandingPage);