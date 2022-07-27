import React from 'react';
import { 
  LandingInfoDiv, LandingInfoBig, LandingInfoSmall,
  LandingImg
} from '../../styledComponents';

const LandingInfo = () => {
  return (
    <>
      <LandingInfoDiv>

        <LandingInfoBig>
          다른 개발자들은 무엇을 하고 있을까?
        </LandingInfoBig>

        <LandingInfoSmall>
          개발자들만의 플랫폼 [뎁스]를 통해 다양한 분야의 <br/>
          개발자들과 소통하고 나만의 스토리를 뽐내세요!
        </LandingInfoSmall>

        <LandingImg />
      </LandingInfoDiv>
    </>
  );
};

export default React.memo(LandingInfo);