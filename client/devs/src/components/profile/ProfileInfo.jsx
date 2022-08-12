import React, { memo, useState } from 'react';
import { 
  ProfileInfoDiv, ProfileFunctDiv,
} from '../../styledComponents';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ProfileFollow from './ProfileFollow';
import ProfileTag from './ProfileTag';
import ImgPopup from './popup/ImgPopup';
import MyFanPopup from './popup/MyFanPopup';
import MyIdolPopup from './popup/MyIdolPopup';

const ProfileInfo = memo(() => {
  const [isImgUpdate, setIsImageUpdate] = useState(false);
  const [fan, setFan] = useState(false);
  const [idol, setIdol] = useState(false);

  return (
  <>
    {isImgUpdate && (
      <ImgPopup setPopup={setIsImageUpdate} />
    )}
    {fan && (
      <MyFanPopup setPopup={setFan} />
    )}
    {idol && (
      <MyIdolPopup setPopup={setIdol} />
    )}

    <ProfileInfoDiv>

      <ProfileImage setPopup={setIsImageUpdate} />

      <ProfileFunctDiv>

        <ProfileText />

        <ProfileFollow setFan={setFan} setIdol={setIdol} />

        <ProfileTag />

      </ProfileFunctDiv>
      
    </ProfileInfoDiv>
  </>
  );
});

export default ProfileInfo;