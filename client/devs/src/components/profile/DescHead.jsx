import React from 'react';
import { useEffect } from 'react';
import {
  DescHeadDiv, DescHeadText, 
  DescEditBtn
} from '../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const DescHead = ({ text }) => {


  ///////////////////////// 어떤 부분을 고칠지 넘기기
  const edit = () => {
    console.log(text) //고칠 부분
    if(text === "소개"){
      // ProfilePage의 id = 'intro' 인 곳을 편집하기
    }
    else if(text === "현재 진행 중"){
      
    }
    else if(text === "기술스택/Skill Set"){
      
    }
    else if(text === "개인공부"){
      
    }
    else if(text === "보유 자격증"){
      
    }
    else if(text === "경력"){
      
    }
  }
  ////////////////////////

  return (
    <>
      <DescHeadDiv>

        <DescHeadText>{ text }</DescHeadText>

        <DescEditBtn>
          <FontAwesomeIcon icon={faPen} onClick={edit} />
          
        </DescEditBtn>

      </DescHeadDiv>
    </>
  );
};

export default React.memo(DescHead);