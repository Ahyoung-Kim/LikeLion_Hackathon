import React, { memo } from 'react';
import { 
  ProfileTextDiv, ProfileName, ProfileEditBtn, 
  ProfileDesc
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import axios from 'axios';
import { APIURL } from '../../config/key';
import { getCookie } from '../../config/cookie';
import { useState } from 'react';

const ProfileText = memo(() => {
  const [nickname, setNickname] = useState('');
  const id = getCookie('user_id')

  useEffect(() => {
    axios.get(`${APIURL}/account/userinfo/${id}/`)
    .then(res => {
      console.log(res.data);

    })
    .catch(err => {
      console.log(err)
    })
  }, [])
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