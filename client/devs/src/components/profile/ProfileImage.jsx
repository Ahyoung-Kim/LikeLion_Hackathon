import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { APIURL } from '../../config/key';
import { 
  ProfileImg, ProfileImgDiv, ProfileImgEditBtn
} from '../../styledComponents';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from '../../config/cookie';

const ProfileImage = ({ setPopup }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClick = () => {
    // navigate(`${location.pathname}/image`)
    setPopup(true);
  }

  const [userImg, setUserImg] = useState('');
  const user_id = getCookie('user_id')

  useEffect(() => {
    axios.get(`${APIURL}/profiles/image/${user_id}/`)
    .then(res => {
      setUserImg(res.data.image)
    })
    .catch(err => {
      console.log('img fetch error')
      setUserImg(`${APIURL}/media/uploads/profile-img.png`)
      console.log(err);
    })
  }, [])


  return (
    <>
      <ProfileImgDiv>
        <ProfileImg src={userImg} />
        
        <ProfileImgEditBtn>
          <FontAwesomeIcon onClick={onClick} icon={faPen} />
        </ProfileImgEditBtn>
      </ProfileImgDiv>
    </>
  );
};

export default React.memo(ProfileImage);