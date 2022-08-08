import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DevsText, LandingHead } from '../../styledComponents';

const LandingTextComp = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/main')
  }
  return (
  <LandingHead>
    <DevsText>
      <div onClick={goMain}>
        뎁스 devStory
      </div>
    </DevsText>
  </LandingHead>
  );
};

export default React.memo(LandingTextComp);