import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import { 
  BigBox,
  BigDiv,
  DescContentsDiv, DescDiv, DescSmallDiv, 
  SmallBox, SmallDiv, SmallLabel,
  SmallInput, BigInput, SaveBtn
} from '../../styledComponents';
import DescHead from './DescHead';

const Details = memo(() => {
  // const id = getCookie('user_id');
  const [isEdit, setIsEdit] = useState(false);
  const params = useParams();
  const id = params.user_id;
  const [isInit, setIsInit] = useState(false);

  const [details, setDetails] = useState({
    belongs: '',
    introduction: '',
    major: '',
    position: '',
    subposition: ''
  });
  const { belongs, introduction, major, position, subposition } = details

  const bRef = useRef();
  const iRef = useRef();
  const mRef = useRef();
  const pRef = useRef();
  const sRef = useRef();

  useEffect(() => {
    axios.get(`${APIURL}/profiles/details/${id}/`)
    .then(res => {
      console.log('profile details: ', res.data);
      setDetails(res.data);
    })
    .catch(err => {
      console.log(err);
      setIsInit(true)
    })
  }, [])

  const onChange = (e) => {
    const { name, value } = e.target;

    setDetails({
      ...details,
      [name]: value
    })
  }

  useEffect(() => {
    if(isEdit){
      bRef.current.focus();
    }
  }, [isEdit])

  const onDetailsPost = () => {
    setIsEdit(false)

    if(isInit){
      axios.post(`${APIURL}/profiles/details/`, {
        user: id, 
        belongs, major, position, subposition,
        introduction
      })
      .then(res => {
        console.log('detail post success')
      })
      .catch(err => console.log(err))
    } else {
      axios.patch(`${APIURL}/profiles/details/${id}/`, {
        belongs, major, position, subposition,
        introduction
      })
      .then(res => {
        console.log('detail patch success');
      })
      .catch(err => console.log(err))
    }

    window.location.replace('');
  }

  return (
    <DescDiv>
      {isEdit && (
        <SaveBtn onClick={onDetailsPost}>
          저장
        </SaveBtn>
      )}
      <DescHead text="소개" setPopup={setIsEdit} />

      <DescContentsDiv>

        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>학교/직장</SmallLabel>
            {isEdit ? (
              <SmallInput 
                type="text"
                name="belongs"
                value={belongs}
                onChange={onChange}
                ref={bRef}
                autoComplete='nope'
              />
            ) : (
              <SmallBox>{belongs}</SmallBox>
            )}
            
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>전공</SmallLabel>
            {isEdit ? (
              <SmallInput 
                type="text"
                name="major"
                value={major}
                onChange={onChange}
                ref={mRef}
                autoComplete='nope'
              />
            ) : (
              <SmallBox>{major}</SmallBox>
            )}
          </SmallDiv>
        </DescSmallDiv>

        <DescSmallDiv>
          <SmallDiv>
            <SmallLabel>메인포지션</SmallLabel>
            {isEdit ? (
              <SmallInput 
                type="text"
                name="position"
                value={position}
                onChange={onChange}
                ref={pRef}
                autoComplete='nope'
              />
            ) : (
              <SmallBox>{position}</SmallBox>
            )}
          </SmallDiv>
          <SmallDiv>
            <SmallLabel>서브포지션</SmallLabel>
            {isEdit ? (
              <SmallInput 
                type="text"
                name="subposition"
                value={subposition}
                onChange={onChange}
                ref={sRef}
                autoComplete='nope'
              />
            ) : (
              <SmallBox>{subposition}</SmallBox>
            )}
          </SmallDiv>
        </DescSmallDiv>

        <BigDiv>
          <SmallLabel>자기소개</SmallLabel>
          {isEdit ? (
            <BigInput
              name="introduction"
              value={introduction}
              onChange={onChange}
              ref={iRef}
              autoComplete='nope'
            ></BigInput>
          ) : (
            <BigBox>{introduction}</BigBox>
          )}
        </BigDiv>
        
      </DescContentsDiv>  

    </DescDiv>
  );
});

export default Details;