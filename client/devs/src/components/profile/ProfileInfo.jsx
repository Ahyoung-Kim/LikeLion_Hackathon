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
import { getCookie } from '../../config/cookie';
import { useParams } from 'react-router-dom';

const ProfileInfo = memo(() => {
  //const id = getCookie('user_id');
  const params = useParams();
  const id = params.user_id;
  const [isImgUpdate, setIsImageUpdate] = useState(false);
  const [fan, setFan] = useState(false);
  const [idol, setIdol] = useState(false);
  const [hashtag, setHashtag] = useState([]);

  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  
  const getHashTag = async() => {
    const res = await axios.get(`${APIURL}/profiles/hashtag/${id}/`)

    console.log('해시태그: ', res);
    const temp = res.data.hashtag.split(' ');
    console.log('hashtag temp ', temp);
    setHashtag(temp);
    // res.data[0]
    // hashtag: "웹프론트엔드 웹백엔드"
  }

  useEffect(() => {
    getHashTag().catch(err => console.log(err))

    axios.get(`${APIURL}/profiles/follower/${id}/`)
    .then(res => {
      console.log(res)
      // res.data : [{id, follower, following}]
      const temp = res.data;
      const tmp1 = [];
      const tmp2 = [];

      for(let i = 0; i < temp.length; i++){
        const data = temp[i];
        tmp1.push(data.follower);
        tmp2.push(data.following)
      }

      setFollowers(tmp1);
      setFollowings(tmp2);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
  <>
    {isImgUpdate && (
      <ImgPopup setPopup={setIsImageUpdate} />
    )}
    {fan && (
      <MyFanPopup setPopup={setFan} followers={followers} />
    )}
    {idol && (
      <MyIdolPopup setPopup={setIdol} followings={followings} />
    )}

    <ProfileInfoDiv>

      <ProfileImage setPopup={setIsImageUpdate} />

      <ProfileFunctDiv>
        <ProfileText />

        <ProfileFollow setFan={setFan} setIdol={setIdol} />

        <ProfileTag data={hashtag} />

      </ProfileFunctDiv>
      
    </ProfileInfoDiv>
  </>
  );
});

export default ProfileInfo;