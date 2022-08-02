import React, { memo } from 'react';
import { TagDiv, Tag } from '../../styledComponents';

const ProfileTag = memo(() => {
  return (
    <>
      <TagDiv>
        <Tag>#웹프론트엔드</Tag>
        <Tag>#웹백엔드</Tag>
        <Tag>#웹</Tag>
        <Tag>#JavaScript</Tag>
        <Tag>#React</Tag>
      </TagDiv>
    </>
  );
});

export default ProfileTag;