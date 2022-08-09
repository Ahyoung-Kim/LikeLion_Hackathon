import React, { memo, useState } from 'react';
import { 
  ImageDiv, ImageUploadBtn, ImageBox,
  Image, ImageInputDiv, ImageInput
} from '../../../styledComponents';

const ImageEdit = memo(() => {
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

  const onLoad = () => {

  }

  return (
    <ImageDiv>

      <ImageBox>
        {src && (
          <Image src={src} onLoad={onLoad} />
        )}
      </ImageBox>
      
      <ImageInputDiv>
        <ImageInput type="file" onChange={onSelectFile} />
      </ImageInputDiv>

      <ImageUploadBtn>
        프로필 이미지 업로드
      </ImageUploadBtn>
    </ImageDiv>
  );
});

export default ImageEdit;