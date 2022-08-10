import React, { memo } from 'react';

import { 
  PopupInputDiv,
  PopupInputText, PopupInput
} from '../../../styledComponents'

const PopupInputComp = memo(({ text }) => {
  return (
    <PopupInputDiv>
      <PopupInputText>{ text }</PopupInputText>
      <PopupInput />
    </PopupInputDiv>
  );
});

export default PopupInputComp;