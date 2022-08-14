import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import { DescContentsDiv, DescDiv, LicenceBox, LicenceDiv } from '../../styledComponents';
import DescHead from './DescHead';

const Certification = memo(() => {
  const id = getCookie('user_id')
  const [cert, setCert] = useState([])

  useEffect(() => {
    axios.get(`${APIURL}/profiles/cert/${id}/`)
    .then(res => {
      console.log('certification: ', res.data)
      setCert(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <DescDiv>

      <DescHead text="보유 자격증" />

      <DescContentsDiv>
        <LicenceDiv>
          {cert.length === 0 ? (
            <div>
              보유중인 자격증이 없습니다!
            </div>
          ) : (
            <>
            {cert.map(data => (
              <LicenceBox key={data.id}>
                {data.certification}
              </LicenceBox>
            ))}
            </>
          )}
        </LicenceDiv>
      </DescContentsDiv>
      
    </DescDiv>
  );
});

export default Certification;