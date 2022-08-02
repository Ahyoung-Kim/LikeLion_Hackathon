import React from 'react';
import {
  DescHeadDiv, DescHeadText, 
  DescEditBtn
} from '../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const DescHead = ({ text }) => {
  return (
    <>
      <DescHeadDiv>

        <DescHeadText>{ text }</DescHeadText>

        <DescEditBtn>
          <FontAwesomeIcon icon={faPen} />
        </DescEditBtn>

      </DescHeadDiv>
    </>
  );
};

export default React.memo(DescHead);