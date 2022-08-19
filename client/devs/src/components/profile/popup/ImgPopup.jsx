import axios from 'axios';
import React, { memo, useState,useEffect } from 'react';
import { getCookie, setCookie } from '../../../config/cookie';
import { APIURL } from '../../../config/key';
import { 
  PopupBox, PopupDiv,
  ImageUploadBtn, ImageBox,
  Image, ImageInputDiv, ImageInput,
  PopupSaveBtn
} from '../../../styledComponents';
import PopupHeader from './PopupHeader';

const ImgPopup = memo(({ setPopup }) => {
  const [src, setSrc] = useState(getCookie('user_img'));

  useEffect(() =>{
    axios.get(`${APIURL}/profiles/image/${getCookie('user_id')}/`)
    .then(
    res => {
      setCookie('user_img', res.data.image, {maxAge: 3000, path: '/'})
    }
  )}, [])

  const onSelectFile = (e) => {
    if(e.target.files && e.target.files.length > 0){
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0])
      reader.addEventListener('load', () => {
        setSrc(reader.result)
      })
    }
  }

  const sendImg = async() => {
    const res = await axios.post(`${APIURL}/profiles/image/${getCookie('user_id')}`,{
      image : src,
      user : getCookie('user_id')
    })
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
            
          <PopupSaveBtn onClick={sendImg}>
            저장하기
          </PopupSaveBtn>
        </PopupBox>
      
      </PopupDiv> 
    </>
  );
});

export default ImgPopup;