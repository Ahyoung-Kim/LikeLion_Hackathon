import styled from 'styled-components'

// landing page
export const LandingDiv = styled.div`
width: 100%;
height: 100vh;
background-color: #FFE082;
position: relative;
display: flex;
justify-content: center;
align-items: center;

//padding-top: 55px;
//padding-top: 8vh;
`

export const DevsText = styled.div`
position: absolute;
//top: 56px;
//left: 100px;
top: 5vh;
left: 10vh;
z-index: 15;
font-weight: 500;
//font-size: 28px;
font-size: 3vh;
cursor: pointer;
`

export const LandingContent = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
position: absolute;
left: 0;
top: 8vh;
bottom: 10vh;
z-index: 10;
//background-color: aqua;
`

export const LandingInfoDiv = styled.div`
//margin-top: 137px;
margin-top: 13vh;
//background-color: orange;
width: 40vw;
`

export const LandingInfoBig = styled.div`
font-weight: 700;
//font-size: 38px;
//margin-bottom: 50px;
font-size: 3.8vh;
margin-bottom: 5vh;
`

export const LandingInfoSmall = styled.div`
font-weight: 400;
//font-size: 24px;
//line-height: 40px;
line-height: 3.5vh;
font-size: 2.2vh;
`
// background-image: url(./landing-img.png);
export const LandingImg = styled.img`
display: inline-block;
//width: 751px;
//height: 599px;
width: 100%;
height: calc(100% * 0.7976);
//margin-top: 30px;
margin-top: 3vh;
object-fit: contain;
`

export const RegisterDiv = styled.div`
background-color: #FFF8E1;
//width: 532px;
//height: 850px;
width: 30vw;
height: calc(30vw * 1.5);
//border-radius: 8px;
border-radius: 0.8vh;
position: relative;
`

export const RegisterText = styled.div`
font-weight: 700;
//font-size: 30px;
//line-height: 130px;
line-height: 12vh;
font-size: 3vh;
width: 100%;
text-align: center;
`

export const RegisterUl = styled.ul`
width: 80%;
margin: 0 auto;
`

export const RegisterLi = styled.li`
//margin-bottom: 30px;
margin-bottom: 3vh;
`

export const RegisterInputText = styled.div`
font-weight: 400;
//font-size: 20px;
font-size: 2vh;
`

export const RegisterInput = styled.input`
//display: inline-block;
border: none;
//border-radius: 7px;
border-radius: 0.7vh;
width: 100%;
//height: 40px;
//margin-top: 10px;
margin-top: 1vh;
height: 4vh;
`

export const RegisterBtn = styled.div`
background-color: #FFD249;
width: 80%;
//line-height: 50px;
line-height: 5vh;
font-weight: 700;
//font-size: 20px;
font-size: 2vh;
text-align: center;
//border-radius: 50px;
border-radius: 5vh;
cursor: pointer;
//margin: 50px auto 0;
margin: 4.5vh auto 0;
`

export const AlreadyRegister = styled.div`
//width: 150px;
//line-height: 30px;
width: 15vh;
line-height: 3vh;
text-align: center;
color: #0D4AE9;
position: absolute;
left: calc(100% / 2);
//bottom: 40px;
bottom: 4vh;
margin-left: -7.5vh;
font-size: 1.6vh;
//margin-left: -75px;
cursor: pointer;
`

export const LandingFooter = styled.div`
background-color: #FFB300;
width: 100%;
//height: 240px;
height: 22vh;
position: absolute;
left: 0;
bottom: 0;
z-index: 5;
`
// login
export const LoginDiv = styled.div`
background-color: #FFF8E1;
margin-top: 10vh;
//width: 652px;
//height: 641px;
//border-radius: 8px;
width: 37vw;
height: 33vw;
border-radius: 0.8vh;
position: relative;
z-index: 10;
`
export const LoginImg1 = styled.img`
//background-color: aqua;
display: inline-block;
width: 40vw;
height: calc(40vw * 0.89);
object-fit: contain;
position: absolute;
//top: 93px;
top: 9vh;
left: 0;
`

export const LoginImg2 = styled.img`
//background-color: aqua;
display: inline-block;
width: 40vw;
height: calc(40vw * 0.79);
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
//width: 270px;
width: 27vh;
position: absolute;
//bottom: 40px;
bottom: 4vh;
left: calc(37vw / 2);
margin-left: -13.5vh;
//left: calc(652px / 2);
//margin-left: -135px;
`

export const LoginBtn = styled.div`
cursor: pointer;
font-size: 1.8vh;
`