import React from 'react';

import {
  FollowDiv, FanIdolDiv, 
  FanIdolSmallDiv, FanIdolText, FanIdolNum,
  FollowBtn
} from '../../styledComponents'

const ProfileFollow = () => {
  return (
    <>
      <FollowDiv>

        <FanIdolDiv>

          <FanIdolSmallDiv>
            <FanIdolText>FAN</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
          </FanIdolSmallDiv>

          <FanIdolSmallDiv>
            <FanIdolText>IDOL</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
          </FanIdolSmallDiv>

        </FanIdolDiv>

        <FollowBtn>
          IDOL 등록
        </FollowBtn>
      </FollowDiv>
    </>
  );
};

export default React.memo(ProfileFollow);