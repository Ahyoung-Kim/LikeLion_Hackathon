import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import { 
  DescDiv, DescContentsDiv, CurrentStudy,
  SaveBtn, CurrentInput 
} from '../../styledComponents';
import DescHead from './DescHead';


const OnGoing = memo(() => {
  // const id = getCookie('user_id')
  const params = useParams();
  const id = params.user_id;
  const [isEdit, setIsEdit] = useState(false);
  const [onGoing, setOnGoing] = useState("");
  const onRef = useRef();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    axios.get(`${APIURL}/profiles/ongoing/${id}/`)
    .then( res => {
      console.log('ongoing: ', res.data);
      setOnGoing(res.data[0].ongoing)
    })
    .catch(err => {
      console.log(err)
      setIsInit(true);
    })
  }, []);

  useEffect(() => {
    if(isEdit){
      onRef.current.focus();
    }
  }, [isEdit])

  const ongoingPost = () => {
    setIsEdit(false)

    if(isInit){
      axios.post(`${APIURL}/profiles/ongoing/`, {
        user: id, 
        ongoing: onGoing
      })
      .then(res => {
        console.log('ongoing post success')
      })
      .catch(err => console.log(err))
    } else {
      axios.patch(`${APIURL}/profiles/ongoing/${id}/`, {
        ongoing: onGoing
      })
      .then(res => {
        console.log('ongoing patch success');
      })
      .catch(err => console.log(err))
    }

    window.location.replace('');
  }

  return (
    <DescDiv>
      {isEdit && (
        <SaveBtn onClick={ongoingPost}>
          저장
        </SaveBtn>
      )}

      <DescHead text="현재 진행 중" setPopup={setIsEdit} />

      <DescContentsDiv>
        {isEdit ? (
          <CurrentInput
            value={onGoing}
            ref={onRef}
            onChange={(e) => {setOnGoing(e.target.value)}}
          />
        ) : (
          <CurrentStudy>
            {onGoing}
          </CurrentStudy>
        )}

      </DescContentsDiv>
      
    </DescDiv>
  );
});

export default OnGoing;