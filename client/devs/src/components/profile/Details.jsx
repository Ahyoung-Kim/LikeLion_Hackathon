import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import { 
  BigBox,
  BigDiv,
  DescContentsDiv, DescDiv, DescSmallDiv, 
  SmallBox, SmallDiv, SmallLabel 
} from '../../styledComponents';
import DescHead from './DescHead';

const Details = memo(() => {
  const id = getCookie('user_id');
  const [details, setDetails] = useState({
    belongs: '',
    introduction: '',
    major: '',
    position: '',
    subposition: ''
  });
  const { belongs, introduction, major, position, subposition } = details

  useEffect(() => {
    axios.get(`${APIURL}/profiles/details/${id}/`)
    .then(res => {
      console.log('profile details: ', res.data);
      setDetails(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <DescDiv>
      <DescHead text="소개" />

      <DescContentsDiv>

        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>학교/직장</SmallLabel>
            <SmallBox>{belongs}</SmallBox>
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>전공</SmallLabel>
            <SmallBox>{major}</SmallBox>
          </SmallDiv>
        </DescSmallDiv>

        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>메인포지션</SmallLabel>
            <SmallBox>{position}</SmallBox>
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>서브포지션</SmallLabel>
            <SmallBox>{subposition}</SmallBox>
          </SmallDiv>
        </DescSmallDiv>

        <BigDiv>
          <SmallLabel>자기소개</SmallLabel>
          <BigBox>{introduction}</BigBox>
        </BigDiv>
        
      </DescContentsDiv>  

    </DescDiv>
  );
});

export default Details;