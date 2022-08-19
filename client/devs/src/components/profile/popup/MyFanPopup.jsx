import axios from 'axios';
import React, { memo, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { APIURL } from '../../../config/key';
import { 
  PopupBox, PopupDiv,
  CardUnit, CardUserName, CardUserDesc, CardImg, CardImgNameBox
} from '../../../styledComponents';
import PopupHeader from './PopupHeader';
const  MyFanPopup = memo(({ setPopup, followers }) => {
  // const params = useParams();
  // const id = params.user_id;

  // useEffect(() => {
  //   axios.get(`${APIURL}/profiles/follower/${id}/`)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, [])

    return (
      
      <>
        <PopupDiv>
          <PopupBox>

              <PopupHeader setPopup={setPopup} text="나의 FAN" />

              {/* <CardUnit>
                  <CardImgNameBox>
                    <CardImg src={require('../../../static/profile-img.png')}></CardImg>
                    <CardUserName>도영</CardUserName>
                  </CardImgNameBox>
                  <CardUserDesc>Front-End Developer</CardUserDesc>
              </CardUnit> */}
              {followers.map((data, idx) => (
                <CardUnit key={idx}>
                    <CardImgNameBox>
                      <CardImg src={require('../../../static/profile-img.png')}></CardImg>
                      <CardUserName>도영</CardUserName>
                    </CardImgNameBox>
                    <CardUserDesc>{data}</CardUserDesc>
                </CardUnit>
              ))}
          </PopupBox>
        </PopupDiv>
      </>
    );
  });
  
  export default MyFanPopup;