import React from 'react';
import axios from 'axios';
import { APIURL } from '../../config/key';
import { 
  ProfileDiv, ProfileInfoDiv, ProfileImgDiv,
  ProfileImg, ProfileImgEditBtn, ProfileFunctDiv,
  ProfileTextDiv, ProfileName, ProfileEditBtn,
  ProfileDesc, FollowDiv, FanIdolDiv, 
  FanIdolSmallDiv, FanIdolText, FanIdolNum,
  FollowBtn, TagDiv, Tag,
  DescDiv, DescHeadDiv, DescHeadText, 
  DescEditBtn, DescContentsDiv, DescSmallDiv,
  SmallDiv, SmallLabel, SmallBox,
  BigDiv, BigBox, CurrentStudy,
  SkillSetDiv, SkillHeadDiv, SkillContents,
  SkillDiv, LicenceDiv, LicenceBox, 
  CareerDiv, CareerBox, Career, 
  CareerDescDiv, CareerText, CareerDesc
} from '../../styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faGear } from '@fortawesome/free-solid-svg-icons'

import DescHead from './DescHead';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ProfileTag from './ProfileTag';
import ProfileFollow from './ProfileFollow';

const ProfilePage = () => {

  //////////////////////백엔드에서 정보 가져오기
  const fetch = async() => {
    const res = await axios.post(`${APIURL}/profile/details/`, {
      
    })
  }
  /////////////////////


  return (
    <>
      <ProfileDiv>

        <ProfileInfoDiv>

          <ProfileImage />

          <ProfileFunctDiv>

            <ProfileText />

            <ProfileFollow />

            <ProfileTag />

          </ProfileFunctDiv>

        </ProfileInfoDiv>


        <DescDiv>

          <DescHead text="소개" />

          <DescContentsDiv id = "intro">
            <DescSmallDiv>
              <SmallDiv>
                <SmallLabel>학교/직장</SmallLabel>
                <SmallBox id="belongs">서강대학교</SmallBox>
              </SmallDiv>
              <SmallDiv>
                <SmallLabel>전공</SmallLabel>
                <SmallBox id="major">컴퓨터공학</SmallBox>
              </SmallDiv>
            </DescSmallDiv>

            <DescSmallDiv>
              <SmallDiv>
                <SmallLabel>메인포지션</SmallLabel>
                <SmallBox id="position">웹 프론트엔드</SmallBox>
              </SmallDiv>
              <SmallDiv>
                <SmallLabel>서브포지션</SmallLabel>
                <SmallBox id="subposition">웹 백엔드</SmallBox>
              </SmallDiv>
            </DescSmallDiv>

            <BigDiv>
              <SmallLabel>자기소개</SmallLabel>
              <BigBox id="introduction">난 킹아영</BigBox>
            </BigDiv>
          </DescContentsDiv>

        </DescDiv>

        <DescDiv>

          <DescHead text="현재 진행 중" />

          <DescContentsDiv>
            <CurrentStudy>
              현재 자바스크립트 공부 중이에요~!
            </CurrentStudy>
          </DescContentsDiv>
        </DescDiv>

        <DescDiv>

          <DescHead text="기술스택/Skill Set" />

          <DescContentsDiv>

            <SkillSetDiv>
              <SkillHeadDiv>
                Programing Languages
              </SkillHeadDiv>

              <SkillContents>
                <SkillDiv>JavaScript</SkillDiv>
                <SkillDiv>HTML</SkillDiv>
                <SkillDiv>CSS</SkillDiv>
                <SkillDiv>Python</SkillDiv>
                <SkillDiv>C++</SkillDiv>
              </SkillContents>

              <SkillHeadDiv>
                Framework / Library
              </SkillHeadDiv>

              <SkillContents>
                <SkillDiv>React</SkillDiv>
                <SkillDiv>Django</SkillDiv>
                <SkillDiv>Express</SkillDiv>
                <SkillDiv>JavaSpring</SkillDiv>
              </SkillContents>
            </SkillSetDiv>

          </DescContentsDiv>
        </DescDiv>

        <DescDiv>

          <DescHead text="개인공부" />

          <DescContentsDiv>

            <SkillSetDiv>
              <SkillHeadDiv>
                CS
              </SkillHeadDiv>

              <SkillContents>
                <SkillDiv>Operating System</SkillDiv>
                <SkillDiv>Data Structure</SkillDiv>
                <SkillDiv>Algorithm</SkillDiv>
                <SkillDiv>Computer Structure</SkillDiv>
                <SkillDiv>DataBase</SkillDiv>
                <SkillDiv>Computer Network</SkillDiv>
              </SkillContents>

              <SkillHeadDiv>
                PS
              </SkillHeadDiv>

              <SkillContents>
                <SkillDiv>BOJ</SkillDiv>
                <SkillDiv>Programmers</SkillDiv>
              </SkillContents>
            </SkillSetDiv>

          </DescContentsDiv>
        </DescDiv>

        <DescDiv>

          <DescHead text="보유 자격증" />

          <DescContentsDiv>

            <LicenceDiv>
              <LicenceBox>컴활1급</LicenceBox>
              <LicenceBox>정보처리기사</LicenceBox>
              <LicenceBox>리눅스마스터</LicenceBox>
              <LicenceBox>토익</LicenceBox>
            </LicenceDiv>

          </DescContentsDiv>
        </DescDiv>

        <DescDiv>

          <DescHead text="경력" />

          <DescContentsDiv>

            <CareerDiv>

              <CareerBox>
                <Career>구글</Career>
                <Career>웹 프론트엔드</Career>
                <Career>2020.01-2022.01</Career>
              </CareerBox>

              <CareerDescDiv>
                <CareerText>업무 내용</CareerText>
                <CareerDesc>
                  서브 프론트엔드 개발자로 구독자 증대를 위한 기능 다수 개발 (기여도 30%)
                </CareerDesc>
              </CareerDescDiv>
              <CareerDescDiv>
                <CareerText>성과</CareerText>
                <CareerDesc>
                  콘텐츠 공유 기능, 직무 맞춤 콘텐츠 추천 기능 개발 → 구독 전환율 개선에 기여
                </CareerDesc>
              </CareerDescDiv>
              <CareerDescDiv>
                <CareerText>사용 기술</CareerText>
                <CareerDesc>Next.js, React-query</CareerDesc>
              </CareerDescDiv>
            </CareerDiv>


            <CareerDiv>

              <CareerBox>
                <Career>구글</Career>
                <Career>웹 프론트엔드</Career>
                <Career>2020.01-2022.01</Career>
              </CareerBox>

              <CareerDescDiv>
                <CareerText>업무 내용</CareerText>
                <CareerDesc>
                  서브 프론트엔드 개발자로 구독자 증대를 위한 기능 다수 개발 (기여도 30%)
                </CareerDesc>
              </CareerDescDiv>
              <CareerDescDiv>
                <CareerText>성과</CareerText>
                <CareerDesc>
                  콘텐츠 공유 기능, 직무 맞춤 콘텐츠 추천 기능 개발 → 구독 전환율 개선에 기여
                </CareerDesc>
              </CareerDescDiv>
              <CareerDescDiv>
                <CareerText>사용 기술</CareerText>
                <CareerDesc>Next.js, React-query</CareerDesc>
              </CareerDescDiv>
            </CareerDiv>
          </DescContentsDiv>
        </DescDiv>

      </ProfileDiv>
    </>
  );
};

export default ProfilePage;