import styled from 'styled-components'

// landing page
export const LandingDiv = styled.div`
width: 100%;
height: max-content;
min-height: 100vh;
padding-bottom: 100px;
background-color: #FFE082;
//position: relative;
position: absolute;
z-index: -5;
//display: flex;
//justify-content: center;
//align-items: center;

//padding-top: 55px;
//padding-top: 8vh;
`
export const LandingHead = styled.div`
// background-color: orange;
width: 100%;
height: 100px;
`
export const DevsText = styled.div`
// background-color: aqua;
width: 1700px;
//width: 100%;
//line-height: 100%;
height: 100%;
display: flex;
align-items: center;
margin: 0 auto;
//padding-left: 100px;
font-weight: 500;
font-size: 28px;
//font-size: 3vh;
cursor: pointer;
`

export const LandingContent = styled.div`
width: max-content;
//min-height: 100vh;
margin: 0 auto;
display: flex;
//justify-content: space-evenly;
//align-items: center;
//position: absolute;
//left: 0;
////top: 8vh;
////bottom: 10vh;
//top: 80px;
//bottom: 100px;
//z-index: 10;
// background-color: aqua;
`

export const LandingInfoDiv = styled.div`
margin-top: 95px;
margin-right: 150px;
//margin-top: 13vh;
//  background-color: orange;
//width: 40vw;
width: 610px;
//width: 50%;
`

export const LandingInfoBig = styled.div`
font-weight: 700;
font-size: 36px;
margin-bottom: 40px;
//font-size: 3.8vh;
//margin-bottom: 5vh;
`

export const LandingInfoSmall = styled.div`
font-weight: 400;
font-size: 22px;
line-height: 35px;
//line-height: 3.5vh;
//font-size: 2.2vh;
`
// background-image: url(./landing-img.png);
export const LandingImg = styled.img`
display: inline-block;
//width: 751px;
//height: 599px;
width: 100%;
height: calc(100% * 0.7976);
margin-top: 30px;
//margin-top: 3vh;
object-fit: contain;
`

export const RegisterDiv = styled.div`
background-color: #FFF8E1;
margin-left: 150px;
width: 460px;
height: 690px;
//width: 30vw;
//height: calc(30vw * 1.5);
border-radius: 8px;
//border-radius: 0.8vh;
position: relative;
`

export const RegisterText = styled.div`
font-weight: 700;
font-size: 26px;
line-height: 100px;
//line-height: 12vh;
//font-size: 3vh;
width: 100%;
text-align: center;
`

export const RegisterUl = styled.ul`
width: 80%;
margin: 0 auto;
`

export const RegisterLi = styled.li`
// margin-bottom: 30px;
padding-bottom: 25px;
// background-color: orange;
position: relative;
//margin-bottom: 3vh;
`

export const RegisterInputText = styled.div`
font-weight: 400;
font-size: 18px;
//font-size: 2vh;
`

export const RegisterInput = styled.input`
//display: inline-block;
border: none;
border-radius: 7px;
//border-radius: 0.7vh;
width: 100%;
height: 35px;
margin: 5px 0 0;
//margin-top: 1vh;
//height: 4vh;
`
export const WrongInputText = styled.div`
font-size: 12px;
color: red;
position: absolute;
right: 0;
top: 4px;
//bottom: 0;
`

export const RegisterBtn = styled.div`
background-color: #FFD249;
width: 80%;
line-height: 35px;
//line-height: 5vh;
font-weight: 700;
font-size: 18px;
//font-size: 2vh;
text-align: center;
border-radius: 50px;
//border-radius: 5vh;
cursor: pointer;
margin: 20px auto 0;
//margin: 4.5vh auto 0;
`

export const AlreadyRegister = styled.div`
width: 150px;
line-height: 30px;
//width: 15vh;
//line-height: 3vh;
text-align: center;
color: #0D4AE9;
position: absolute;
left: calc(100% / 2);
bottom: 30px;
//bottom: 4vh;
//margin-left: -7.5vh;
//font-size: 1.6vh;
margin-left: -75px;
cursor: pointer;
`

export const LandingFooter = styled.div`
background-color: #FFB300;
width: 100%;
height: 240px;
//height: 22vh;
position: absolute;
left: 0;
bottom: 0;
z-index: -3;
`
// login
export const LoginDiv = styled.div`
background-color: #FFF8E1;
margin-top: 10vh;
width: 652px;
height: 541px;
border-radius: 8px;
//width: 37vw;
//height: 33vw;
//border-radius: 0.8vh;
position: relative;
z-index: 10;
`
export const LoginImgDiv = styled.div`
display: flex;
`
export const LoginImg1 = styled.img`
// background-color: aqua;
display: inline-block;
//width: 40vw;
width: 700px;
height: calc(700px * 0.89);
object-fit: contain;
position: absolute;
top: 93px;
//top: 9vh;
left: 0;
`

export const LoginImg2 = styled.img`
//background-color: aqua;
display: inline-block;
width: 700px;
height: calc(700px * 0.79);
object-fit: contain;
position: absolute;
bottom: 0;
right: 0;
z-index: 6;
`

export const LoginBtnDiv = styled.div`
color: #0D4AE9;
display: flex;
justify-content: space-between;
width: 270px;
//width: 27vh;
position: absolute;
bottom: 40px;
//bottom: 4vh;
//left: calc(37vw / 2);
//margin-left: -13.5vh;
left: calc(652px / 2);
margin-left: -135px;
`

export const LoginBtn = styled.div`
cursor: pointer;
//font-size: 1.8vh;
`

// Profile Page
export const ProfileDiv = styled.div`
background-color: rgba(255, 224, 130, 0.3);
// width: 963px;
width: calc(923px + 100px);
margin: 50px auto;
padding: 50px;
border-radius: 10px;
`

export const ProfileInfoDiv = styled.div`
width: 100%;
height: max-content;
display: flex;
flex-wrap: wrap;
align-items: center;
/* background-color: orange; */
position: relative;
`

export const ProfileImgDiv = styled.div`
width: 150px;
height: max-content;
position: relative;
`

export const ProfileImg = styled.img`
display: inline-block;
border-radius: 50%;
background-color: white;
width: 120px;
height: 120px;
object-fit: contain;
`

export const ProfileImgEditBtn = styled.span`
display: inline-block;
width: 35px;
height: 35px;
// line-height: 30px;
border-radius: 50%;
background-color: black;
border: 2px solid white;
color: white;
//text-align: center;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
right: 8px;
bottom: 8px;
cursor: pointer;
`
// --------------------------------------
export const ProfileFunctDiv = styled.div`
// background-color: orange;
width: calc(100% - 150px);
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

// -----------
export const ProfileTextDiv = styled.div`
// background-color: aqua;
width: calc(100% - 374px);
height: max-content;
margin-left: 30px;
`

export const ProfileName = styled.p`
display: flex;
align-items: center;
font-size: 22px;
font-weight: bold;
line-height: 44px;
`

export const ProfileEditBtn = styled.span`
margin-left: 10px;
cursor: pointer;
`

export const ProfileDesc = styled.p`
line-height: 22px;
`
// ----------
export const FollowDiv = styled.div`
// background-color: white;
width: max-content;
height: max-content;
display: flex;
`
export const FanIdolDiv = styled.div`
display: flex;
background-color: #D9D9D9;
width: max-content;
height: max-content;
border-radius: 7px;
`
export const FanIdolSmallDiv = styled.div`
text-align: center;
width: 92px;
height: 60px;
display: flex;
flex-direction: column;
cursor: pointer;
`
export const FanIdolText = styled.div`
font-size: 12px;
margin: 6px;
`
export const FanIdolNum = styled.div`
font-size: 18px;
font-weight: bold;
`
export const FollowBtn = styled.div`
width: 130px;
line-height: 60px;
border-radius: 7px;
background-color: #B299B0;
text-align: center;
font-size: 18px;
font-weight: bold;
margin-left: 30px;
cursor:pointer;
`
// ----------
export const TagDiv = styled.div`
// background-color: orange;
display: flex;
flex-wrap: wrap;
max-width: 100%;
width: max-content;
height: max-content;
margin-left: 20px;
margin-top: 20px;
`
export const Tag = styled.div`
line-height: 20px;
width: max-content;
padding: 0 10px;
margin: 7px 7px 0;
background-color: #D9D9D9;
border-radius: 20px;
font-size: 12px;
`
// --------------------------------------
export const DescDiv = styled.div`
width: 100%;
/* background-color: orange; */
margin: 40px 0;
`
export const DescHeadDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: max-content;
margin-bottom: 10px;
`
export const DescHeadText = styled.p`
font-weight: bold;
margin-left: 20px;
`
export const DescEditBtn = styled.span`
// display: inline-block;
width: 40px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
// line-height: 30px;
background-color: black;
color: white;
// text-align: center;
border-radius: 7px;
cursor: pointer;
margin-right: 20px;
`
export const DescContentsDiv = styled.div`
background-color: white;
// max-width: 100%;
width: 923px;
padding: 20px;
height: max-content;
border-radius: 5px;
`
export const DescSmallDiv = styled.div`
width: 100%;
display: flex;
margin-bottom: 20px;
`
export const SmallDiv = styled.div`
width: 50%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
`
export const SmallLabel = styled.div`
text-align: center;
width: 120px;
`
export const SmallBox = styled.div`
width: calc((923px / 2) - 120px);
min-height: 35px;
line-height: 35px;
background-color: #F4F4F4;
border-radius: 5px;
padding: 0 10px;
`
export const BigDiv = styled.div`
width: 100%;
/* background-color: aqua; */
display: flex;
justify-content: space-between;
align-items: center;
`
export const BigBox = styled.div`
width: calc(923px - 120px);
min-height: 100px;
line-height: 100px;
background-color: #F4F4F4;
border-radius: 5px;
padding: 0 10px;
margin: 0 auto;
`
// -----------------------------------------
export const CurrentStudy = styled.div`
background-color: #F4F4F4;
max-width: 100%;
padding: 30px;
border-radius: 5px;
`

export const SkillSetDiv = styled.div`
max-width: 100%;
`

export const SkillHeadDiv = styled.div`
max-width: 100%;
background-color:rgba(215, 203, 161, 0.65);
line-height: 48px;
font-weight: bold;
padding-left: 20px;
`
export const SkillContents = styled.div`
background-color: #F4F4F4;
max-width: 100%;
min-height: 63px;
display: flex;
flex-wrap: wrap;
padding: 5px 0;
`
export const SkillDiv = styled.div`
background-color: white;
//width: calc(923px / 4 - 30px);
width: calc(883px / 4 - 30px);
line-height: 33px;
text-align: center;
margin: 10px 15px;
border-radius: 5px;
cursor: pointer;
`

export const LicenceDiv = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`
export const LicenceBox = styled.div`
background-color: rgba(208, 191, 105, 0.65);
//width: calc(923px / 4 - 30px);
width: calc(883px / 4 - 30px);
margin: 15px;
line-height: 40px;
border-radius: 20px;
text-align: center;
`
export const CareerDiv = styled.div`
background-color: #F4F4F4;
border-radius: 5px;
padding: 20px 20px 10px;
margin: 20px 0;
`
export const CareerBox = styled.div`
margin-bottom: 20px;
display: flex;
justify-content: space-between;
`
export const Career = styled.div`
background-color: rgba(215, 203, 161, 0.65);
width: calc(923px / 3 - 45px);
/* margin: 10px; */
line-height: 35px;
border-radius: 5px;
padding: 0 10px;
`

export const CareerDescDiv = styled.div`
max-width: 100%;
height: max-content;
display: flex;
/* background-color: aqua; */
margin-bottom: 20px;
`
export const CareerText = styled.div`
width: 100px;
line-height: 35px;
text-align: center;
`
export const CareerDesc = styled.div`
background-color: white;
min-height: 35px;
/* height: max-content; */
width: calc(923px - 100px);
border-radius: 5px;
padding: 0 10px;
display: flex;
flex-wrap: wrap;
align-items: center;
`

// Profile Image Upload
export const ImageDiv = styled.div`
// background-color: aqua;
display: flex;
flex-direction: column;
align-items: center;
`

export const ImageInputDiv = styled.div`
// background-color: white;
// width: max-content;
width: 82px;
margin-bottom: 80px;
`

export const ImageInput = styled.input`
// background-color: rgba(178, 153, 176, 1);
// margin: 0 auto;
`

export const ImageBox = styled.div`
width: 350px;
height: 350px;
background-color: white;
border: 3px solid white;
border-radius: 50%;
overflow: hidden;
margin-bottom: 20px;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
background-color: white;
`

export const ImageUploadBtn = styled.div`
background-color: #FFB300;
border: 2px solid #FFB300;
color: white;
font-weight: bold;
text-align: center;
width: 300px;
line-height: 40px;
border-radius: 8px;
cursor: pointer;
transition: .45s;

&:hover{
background-color: white;
color: #FFB300;
}
`


// POPUP
export const PopupDiv = styled.div`
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 100;
background-color: rgba(0, 0, 0, .2);
display: flex;
justify-content: center;
align-items: center;
`

export const PopupBox = styled.div`
width: 723px;
// height: 759px;
background-color: #FCF4DE;
padding: 20px 20px 40px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 7px;
position: relative;
`

export const PopupHead = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;
`

export const PopupText = styled.p`
font-size: 28px;
font-weight: bold;
`

export const PopupXMark = {
  cursor: 'pointer',
  fontSize: '28px'
}

export const PopupInputDiv = styled.div`
margin-bottom: 30px;
`

export const PopupInputText = styled.div`
font-weight: bold;
font-size: 18px;
margin-bottom: 10px;
`

export const PopupInput = styled.input`
width: 670px;
line-height: 35px;
border: none;
border-radius: 5px;
padding: 0 10px;
`

export const PopupDateDiv = styled.div`
width: 670px;
display: flex;
margin-bottom: 30px;
`

export const PopupDateSmall = styled.div`
width: 50%;
// background-color: orange;
`
export const PopupDateText = styled.div`
font-weight: bold;
font-size: 18px;
margin-bottom: 10px;
`
export const PopupDateInputDiv = styled.div`
display: flex;
// justify-content: space-between;
align-items: center;
`

export const PopupDateInput = styled.input`
width: 43%;
line-height: 35px;
border: none;
border-radius: 5px;
padding: 0 10px;
margin-right: 25px;
`

export const PopupTextarea = styled.textarea`
width: 670px;
height: 100px;
padding: 10px;
border: none;
border-radius: 5px;
`

export const PopupSaveBtn = styled.div`
background-color: #FFB300;
font-weight: bold;
font-size: 18px;
width: 150px;
color: white;
line-height: 36px;
text-align: center;
border-radius: 10px;
border: 2px solid #FFB300;
transition: .45s;
position: absolute;
right: 20px;
bottom: 20px;
cursor: pointer;

&:hover{
  color: #FFB300;
  background-color: white;
}
`

//팬, 아이돌 팝업

export const CardUnit = styled.section`
display: flex;
align-items: center;
background-color: #ede4b4;
border-radius: 20px;
width:  600px;
height: 180px;
`

export const CardImgNameBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`
export const CardImg = styled.img`
  width: 66px; 
  height: 66px;
  border: none;
  border-radius: 50%;
`

export const CardUserName = styled.div`
  font-size: 26px;
  font-weight: bold;
`

export const CardUserDesc = styled.div`
  flex:2;
  font-size: 24px;
`