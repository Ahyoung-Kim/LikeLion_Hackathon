import React, { memo } from 'react';
import { 
  ProfileInfoDiv, ProfileFunctDiv,
} from '../../styledComponents';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ProfileFollow from './ProfileFollow';
import ProfileTag from './ProfileTag';

const ProfileInfo = memo(() => {
  return (
    <ProfileInfoDiv>

      <ProfileImage />

      <ProfileFunctDiv>

        <ProfileText />

        <ProfileFollow />

        <ProfileTag />

      </ProfileFunctDiv>
      
    </ProfileInfoDiv>
  );
});

export default ProfileInfo;