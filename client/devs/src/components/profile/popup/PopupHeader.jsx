import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  PopupHead,
  PopupText, PopupXMark
} from '../../../styledComponents'

const PopupHeader = memo(({ text, setPopup }) => {

  const closePopup = () => {
    setPopup(false);
  }

  return (
    <>
      <PopupHead>
        <PopupText>{ text }</PopupText>
        <FontAwesomeIcon icon={faXmark} 
          style={PopupXMark} onClick={closePopup} />
      </PopupHead>
    </>
  );
});

export default PopupHeader;