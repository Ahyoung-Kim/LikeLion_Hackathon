import React, { memo, useEffect, useState } from 'react';
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
import axios from 'axios';
import { APIURL } from '../../config/key';

const ProfileInfo = memo(() => {
  const [isImgUpdate, setIsImageUpdate] = useState(false);
  const [fan, setFan] = useState(false);
  const [idol, setIdol] = useState(false);
  const [image, setImage] = useState();
  const [hashtag, setHashtag] = useState();

  const getImage = async() => {
    const res = await axios.get(`${APIURL}/profiles/image/`)
  }
  const getHashTag = async() => {
    const res = await axios.get(`${APIURL}/profiles/hashtag/`)

    console.log('해시태그: ', res);
    // res.data[0]
    // hashtag: "웹프론트엔드 웹백엔드"
  }

  useEffect(() => {
    getHashTag();
  }, [])

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