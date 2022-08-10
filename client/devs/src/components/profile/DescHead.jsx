import React from 'react';
import { useEffect } from 'react';
import {
  DescHeadDiv, DescHeadText, 
  DescEditBtn
} from '../../styledComponents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const DescHead = ({ text, setPopup }) => {

  const onClick = () => {
    setPopup(true);
  }

  return (
    <>
      <DescHeadDiv>

        <DescHeadText>{ text }</DescHeadText>

        <DescEditBtn onClick={onClick}>
          <FontAwesomeIcon icon={faPen}/>
        </DescEditBtn>

      </DescHeadDiv>
    </>
  );
};

export default React.memo(DescHead);