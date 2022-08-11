import React, { memo, useState } from 'react';
import { 
  PopupBox, PopupDiv,
  CardUnit, CardUserName, CardUserDesc, CardImg, CardImgNameBox
} from '../../../styledComponents';
import PopupHeader from './PopupHeader';
const  MyIdolPopup = memo(({setPopup}) => {

    return (
      
      <>       
        {setPopup && (<PopupDiv>
        <PopupBox>

        <PopupHeader setPopup={setPopup} text="나의 IDOL" />
            <CardUnit>
                <CardImgNameBox>
                  <CardImg src={require('../../../static/profile-img.png')}></CardImg>
                  <CardUserName>도영</CardUserName>
                </CardImgNameBox>
                <CardUserDesc>Front-End Developer</CardUserDesc>
            </CardUnit>
        </PopupBox>
        </PopupDiv>)}
      </>
    );
  });
  
  export default MyIdolPopup;