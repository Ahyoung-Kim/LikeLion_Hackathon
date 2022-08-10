import React, { memo, useState } from 'react';
import { 
  ProfileInfoDiv, ProfileFunctDiv,
} from '../../styledComponents';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ProfileFollow from './ProfileFollow';
import ProfileTag from './ProfileTag';
import ImgPopup from './popup/ImgPopup';

const ProfileInfo = memo(() => {
  const [isImgUpdate, setIsImageUpdate] = useState(false);

  return (
  <>
    {isImgUpdate && (
      <ImgPopup setPopup={setIsImageUpdate} />
    )}
    <ProfileInfoDiv>

      <ProfileImage setPopup={setIsImageUpdate} />

      <ProfileFunctDiv>

        <ProfileText />

        <ProfileFollow />

        <ProfileTag />

      </ProfileFunctDiv>
      
    </ProfileInfoDiv>
  </>
  );
});

export default ProfileInfo;