import React, { memo } from 'react';
import { TagDiv, Tag } from '../../styledComponents';

const ProfileTag = ({ data }) => {
  console.log(data)
  return (
    <>
      <TagDiv>
        {/* <Tag>#웹프론트엔드</Tag>
        <Tag>#웹백엔드</Tag>
        <Tag>#웹</Tag>
        <Tag>#JavaScript</Tag>
        <Tag>#React</Tag> */}
        {data.map((hashtag, idx) => (
          <Tag key={idx}>
            #{hashtag}
          </Tag>
        ))}
      </TagDiv>
    </>
  );
}

export default ProfileTag;