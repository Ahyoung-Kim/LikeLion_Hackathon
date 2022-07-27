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
`

export const DevsText = styled.div`
position: absolute;
top: 56px;
left: 100px;
z-index: 15;
font-weight: 500;
font-size: 28px;
cursor: pointer;
`

export const LandingContent = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
z-index: 10;
//background-color: aqua;
`

export const LandingInfoDiv = styled.div`
margin-top: 137px;
`

export const LandingInfoBig = styled.div`
font-weight: 700;
font-size: 42px;
margin-bottom: 50px;
`

export const LandingInfoSmall = styled.div`
font-weight: 400;
font-size: 28px;
line-height: 40px;
`
// background-image: url(./landing-img.png);
export const LandingImg = styled.div`
width: 751px;
height: 599px;
margin-top: 30px;
background-color: black;

background-size: contain;
`

export const RegisterDiv = styled.div`
background-color: #FFF8E1;
width: 564px;
height: 916px;
border-radius: 8px;
position: relative;
`

export const RegisterText = styled.div`
font-weight: 700;
font-size: 36px;
line-height: 130px;
width: 100%;
text-align: center;
`

export const RegisterUl = styled.ul`
width: 80%;
margin: 0 auto;
`

export const RegisterLi = styled.li`
margin-bottom: 30px;
`

export const RegisterInputText = styled.div`
font-weight: 400;
font-size: 24px;
`

export const RegisterInput = styled.input`
//display: inline-block;
border: none;
border-radius: 7px;
width: 100%;
height: 40px;
margin-top: 15px;
`

export const RegisterBtn = styled.div`
background-color: #FFD249;
width: 80%;
line-height: 65px;
font-weight: 700;
font-size: 24px;
text-align: center;
border-radius: 50px;
cursor: pointer;
margin: 0 auto;
`

export const AlreadyRegister = styled.div`
width: 150px;
line-height: 30px;
text-align: center;
color: #0D4AE9;
position: absolute;
left: calc(100% / 2);
bottom: 40px;
margin-left: -75px;
cursor: pointer;
`

export const LandingFooter = styled.div`
background-color: #FFB300;
width: 100%;
height: 240px;
position: absolute;
left: 0;
bottom: 0;
z-index: 5;
`
// login
export const LoginDiv = styled.div`
background-color: #FFF8E1;
width: 652px;
height: 641px;
border-radius: 8px;
position: relative;
`
export const LoginBtnDiv = styled.div`
color: #0D4AE9;
display: flex;
justify-content: space-between;
width: 270px;
position: absolute;
bottom: 40px;
left: calc(652px / 2);
margin-left: -135px;
`

export const LoginBtn = styled.div`
cursor: pointer;
`