import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import { DescContentsDiv, DescDiv, SkillContents, SkillDiv, SkillHeadDiv, SkillSetDiv } from '../../styledComponents';
import DescHead from './DescHead';

const Skill = memo(() => {
  const id = getCookie('user_id')
  const [lang, setLang] = useState([])
  const [frw, setFrw] = useState([]);

  useEffect(() => {
    axios.get(`${APIURL}/profiles/skills/${id}/`)
    .then(res => {
      console.log(res.data);
      const temp = res.data;

      setLang(temp.filter(data => data.skill_type === 'Language'))
      setFrw(temp.filter(data => data.skill_type === 'Framework'))
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <DescDiv>

      <DescHead text="기술스택/Skill Set" />

      <DescContentsDiv>

        <SkillSetDiv>
          <SkillHeadDiv>
            Programming Languages
          </SkillHeadDiv>
          <SkillContents>
            {lang.map(data => (
              <SkillDiv key={data.id}>
                {data.skill_name}
              </SkillDiv>
            ))}
          </SkillContents>

          <SkillHeadDiv>
            Framework / Library
          </SkillHeadDiv>
          <SkillContents>
            {frw.map(data => (
              <SkillDiv key={data.id}>
                {data.skill_name}
              </SkillDiv>
            ))}
          </SkillContents>
        </SkillSetDiv>
      </DescContentsDiv>
      
    </DescDiv>
  );
});

export default Skill;