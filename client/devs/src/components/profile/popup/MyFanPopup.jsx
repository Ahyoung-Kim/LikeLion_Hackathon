import React, { memo, useState } from 'react';
import { 
  PopupBox, PopupDiv,
  CardUnit, CardUserName, CardUserDesc, CardImg, CardImgNameBox
} from '../../../styledComponents';
import PopupHeader from './PopupHeader';
const  MyFanPopup = memo(({ setPopup }) => {

    return (
      
      <>
        <PopupDiv>
          <PopupBox>

              <PopupHeader setPopup={setPopup} text="나의 FAN" />

              <CardUnit>
                  <CardImgNameBox>
                    <CardImg src={require('../../../static/profile-img.png')}></CardImg>
                    <CardUserName>도영</CardUserName>
                  </CardImgNameBox>
                  <CardUserDesc>Front-End Developer</CardUserDesc>
              </CardUnit>
          </PopupBox>
        </PopupDiv>
      </>
    );
  });
  
  export default MyFanPopup;