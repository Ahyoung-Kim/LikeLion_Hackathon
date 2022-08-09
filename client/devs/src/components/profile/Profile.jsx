import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { ProfileDiv } from '../../styledComponents';

const Profile = memo(() => {
  return (
    <>
      <ProfileDiv>
        <Outlet />
      </ProfileDiv>
    </>
  );
});

export default Profile;