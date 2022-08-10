import React, { memo, useState } from 'react';
import { 
  PopupBox, PopupDiv,
  ImageUploadBtn, ImageBox,
  Image, ImageInputDiv, ImageInput,
  PopupSaveBtn
} from '../../../styledComponents';
import PopupHeader from './PopupHeader';

const ImgPopup = memo(({ setPopup }) => {
  const [src, setSrc] = useState();

  const onSelectFile = (e) => {
    if(e.target.files && e.target.files.length > 0){
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener('load', () => {
        setSrc(reader.result)
      })
    }
  }

  return (
    <>
      <PopupDiv>

        <PopupBox>

          <PopupHeader setPopup={setPopup} text="프로필 이미지 업데이트" />

          <ImageBox>
            {src && (
              <Image src={src} />
            )}
          </ImageBox>
            
          <ImageInputDiv>
            <ImageInput type="file" onChange={onSelectFile} />
          </ImageInputDiv>
            
          <PopupSaveBtn>
            저장하기
          </PopupSaveBtn>
        </PopupBox>
      
      </PopupDiv> 
    </>
  );
});

export default ImgPopup;