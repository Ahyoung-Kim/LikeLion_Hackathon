import React, { useState } from 'react';

import {
  FollowDiv, FanIdolDiv, 
  FanIdolSmallDiv, FanIdolText, FanIdolNum,
  FollowBtn
} from '../../styledComponents'
import MyFanPopup from './popup/MyFanPopup';
import MyIdolPopup from './popup/MyIdolPopup';

const ProfileFollow = () => {
  const [fan, setFan] = useState(false)
  const [idol, setIdol] = useState(false)
  const clickFan = () =>{
    setFan(!fan)
    if (idol === true){
      setIdol(!idol)
    }
    console.log(fan, idol)
  }
  const clickIdol = () =>{
    setIdol(!idol)
    if (fan === true){
      setFan(!fan)
    }
    console.log(fan, idol)

  }
  return (
    <>
      <FollowDiv>

        <FanIdolDiv>

          <FanIdolSmallDiv onClick={clickFan}>
            <FanIdolText>FAN</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
            <MyFanPopup setPopup={fan}></MyFanPopup>
          </FanIdolSmallDiv>

          <FanIdolSmallDiv onClick={clickIdol}>
            <FanIdolText>IDOL</FanIdolText>
            <FanIdolNum>10</FanIdolNum>
            <MyIdolPopup setPopup={idol}></MyIdolPopup>
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