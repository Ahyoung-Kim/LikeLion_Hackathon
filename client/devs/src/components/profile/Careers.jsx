import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { APIURL } from '../../config/key';
import { 
  CareerBox, CareerDiv, DescContentsDiv, 
  DescDiv, Career, CareerDescDiv, CareerText, CareerDesc
} from '../../styledComponents';
import DescHead from './DescHead';

const Careers = memo(() => {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    axios.get(`${APIURL}/profiles/career/`)
    .then(res => {
      console.log('career: ', res.data)
      setCareer(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])

  return (
    <DescDiv>

      <DescHead text="경력" />

      <DescContentsDiv>

        {career.length === 0 ? (
          <div>아직 경력이 없어요!</div>
        ) : (
          <>
            {career.map(data => (
              <CareerDiv key={data.id}>
              
                <CareerBox>
                  <Career>{data.career_at}</Career>
                  <Career>{data.career_who}</Career>
                  <Career>{data.career_when}</Career>
                </CareerBox>
                
                <CareerDescDiv>
                  <CareerText>업무 내용</CareerText>
                  <CareerDesc>{data.career_what}</CareerDesc>
                </CareerDescDiv>
                
                <CareerDescDiv>
                  <CareerText>성과</CareerText>
                  <CareerDesc>{data.career_achieve}</CareerDesc>
                </CareerDescDiv>
                
                <CareerDescDiv>
                  <CareerText>사용 기술</CareerText>
                  <CareerDesc>{data.career_skills}</CareerDesc>
                </CareerDescDiv>
                
              </CareerDiv>
            ))}
          </>
        )}

      </DescContentsDiv>
      
    </DescDiv>
  );
});

export default Careers;