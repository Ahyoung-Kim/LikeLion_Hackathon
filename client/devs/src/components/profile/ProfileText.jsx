import React, { memo } from 'react';
import { 
  ProfileTextDiv, ProfileName, ProfileEditBtn, 
  ProfileDesc
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

const ProfileText = memo(() => {
  return (
    <>
      <ProfileTextDiv>
        <ProfileName>
          아영
          <ProfileEditBtn>
            <FontAwesomeIcon icon={faGear} />
          </ProfileEditBtn>
        </ProfileName>
        {/* <ProfileDesc>웹 프론트엔드</ProfileDesc>
        <ProfileDesc>서강대학교</ProfileDesc> */}
      </ProfileTextDiv>
    </>
  );
});

export default ProfileText;