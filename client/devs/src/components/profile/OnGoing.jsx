import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { APIURL } from '../../config/key';
import { 
  DescDiv, DescContentsDiv, CurrentStudy
} from '../../styledComponents';
import DescHead from './DescHead';


const OnGoing = memo(() => {
  const [onGoing, setOnGoing] = useState("");

  useEffect(() => {
    axios.get(`${APIURL}/profiles/ongoing/`)
    .then( res => {
      console.log('ongoing: ', res.data);
      setOnGoing(res.data[0].ongoing)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <DescDiv>

      <DescHead text="현재 진행 중" />

      <DescContentsDiv>

        <CurrentStudy>
          {onGoing}
        </CurrentStudy>

      </DescContentsDiv>
      
    </DescDiv>
  );
});

export default OnGoing;