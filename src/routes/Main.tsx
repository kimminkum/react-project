import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MainProps {
  windowWidth: number;
}

const MainBanner = styled.div`
  opacity: 0;
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  animation-name: fade_in;
  animation: 0.5s ease-in-out 0s 1 normal forwards running fade_in;
  animation-delay: 1s;
`;

const SliderBox = styled.div`
  width: 100%;
  display: block;
`;
const SliderBox2 = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  padding: 0 0 18px;
`;

const SliderImg = styled.img`
  width: 100%;
  display: inline-block;
  height: 100vh;
  object-fit: cover;
`;

const SliderImg2 = styled.img`
  width: 100%;
  display: inline-block;
  object-fit: cover;
`;
const TxtBox = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TxtDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  text-align: center;

  ${({ theme }) => css`
    @media (min-width: 720px) {
      width: 625px;
      left: 132px;
      top: 42%;
      transform: translateY(-50%);
      text-align: left;
    }
  `}
`;

const H1 = styled.h1`
  color: white;
  font-size: 1.8rem;
  ${({ theme }) => css`
    @media (min-width: 720px) {
      font-size: 4rem;
      line-height: 6rem;
    }
  `}
`;
const H4 = styled.h4`
  color: #aaa;
  word-break: break-all;
  font-size: 16px;
  letter-spacing: -2px;
  margin-top: 20px;
  font-weight: bold;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 720px) {
      line-height: 2rem;
      font-size: 1.2rem;
      letter-spacing: -0.7px;
    }
  `}
`;
const Button = styled.button`
  width: 265px;
  height: 70px;
  margin: 64px 0;
  background-color: rgba(119, 196, 198, 0.44);
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-size: 16px;
  font-weight: bold;
`;

const Article = styled.article`
  margin: 30px 0;
  padding: 30px 0;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      padding: 0;
    }
  `}
`;
const InnerBox = styled.div`
  width: 100%;
  padding: 0 20px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      max-width: 1200px;
      padding: 0;
      margin: 0 auto;
    }
  `}
`;
const Div = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 35%;
    }
  `}
`;
const RightDiv = styled.div`
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 60%;
    }
  `}
`;

const PcFlexDiv = styled.div`
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      display: flex;
      justify-content: space-between;
    }
  `}
`;
const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.5;
  color: #222;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 40px;
    }
  `}
`;
const P = styled.p`
  margin-top: 16px;
  color: rgba(34, 34, 34, 0.62);
  font-size: 16px;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 20px;
    }
  `}
`;
const Gray = styled.p`
  margin-top: 16px;
  color: rgba(34, 34, 34, 0.43);
  font-size: 14px;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  `}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;
const Circle = styled.div<{ light: boolean }>`
  width: 98px;
  height: 98px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  color: #fff;
  background-color: ${(props) => (props.light ? "#3bacae" : "#007d7c;")};
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 160px;
      height: 160px;
      font-size: 24px;
    }
  `}
`;
const Span = styled.span`
  vertical-align: bottom;
  font-size: 16px;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 20px;
    }
  `}
`;
const Line = styled.div`
  margin: 30px 0;
`;
const Ul = styled.ul`
  margin-left: 12px;
  width: 164px;
  padding: 16px 32px;
  gap: 0;
  border-radius: 36px;
  box-shadow: 0 6px 10px 6px rgba(0, 0, 0, 0.04),
    0 2px 10px 0 rgba(0, 0, 0, 0.06);
  border: solid 2px #3bacae;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      margin-left: 84px;
      gap: 10px;
      padding: 20px 60px;
      border-radius: 36px;
      width: 362px;
    }
  `}
`;
const Li = styled.li`
  list-style: disc;
  font-size: 14px;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  `}
`;
const Img_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 362px;
      margin-left: 84px;
    }
  `}
`;
const OnlineBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      justify-content: flex-start;
      margin-top: 0;
      width: 49.5%;
    }
  `}
`;
const OnlineImg = styled.img`
  width: 120px;
  margin-right: 32px;

  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 200px;
      margin-right: 48px;
      padding: 8px;
    }
  `}
`;
const Img = styled.img`
  width: 164px;
  height: 24px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 251px;
      height: 36px;
    }
  `}
`;
const TxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Spantitle = styled.span`
  width: calc(80%);
  color: #005e5b;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: auto;
      font-size: 20px;
    }
  `}
`;
const SpanSub = styled.span`
  margin-top: 8px;
  color: rgba(34, 34, 34, 0.71);
  width: 200px;
  font-size: 14px;
  font-weight: bold;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      margin-top: 16px;
      font-size: 16px;
      width: 100%;
    }
  `}
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `};
`;

const Advantages = styled.div`
  background-color: rgba(119, 196, 198, 0.24);
  margin-top: 97px;
  padding-top: 62px;
  padding-bottom: 60px;
`;
const AdvantagesBox = styled.div`
  width: 100%;
  padding: 24px;
  margin-bottom: 8px;
  border-radius: 16px;
  background-color: #fff;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      box-shadow: 0 6px 10px 6px rgba(0, 0, 0, 0.04),
        0 2px 10px 0 rgba(0, 0, 0, 0.06);
    }
  `};
`;
const ImgIcon = styled.img`
  width: 48px;
  image-rendering: -webkit-optimize-contrast;
  transform: translateZ(0);
  backface-visibility: hidden;
`;
const AdvantagesP = styled.p<{ active: boolean }>`
  margin-top: ${(props) => (props.active ? "24px" : "8px")};
  color: ${(props) => (props.active ? "#222" : "rgba(34, 34, 34, 0.71)")};
  font-size: ${(props) => (props.active ? "16px" : "14px")};
  font-weight: bold;
  line-height: 1.5;
  ${({ theme, active }) => css`
    @media (min-width: 1200px) {
      font-size: ${active ? "20px" : "16px"};
    }
  `};
`;

const Button2 = styled.button`
  width: 100%;
  height: 56px;
  margin: 36px 0;
  background-color: #007d7c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 28px;
  font-size: 16px;
  font-weight: bold;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 164px;
    }
  `};
`;
const OfflineContents = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 780px;
      height: 172px;
      justify-content: flex-end;
    }
  `};
`;
const OfflineBox = styled.li`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: solid 2px #3bacae;
  background-color: #fff;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 254px;
      padding: 24px 32px;
      justify-content: flex-end;
    }
  `};
`;

const OfflineImg = styled.img`
  width: 82px;
  margin-right: 28px;
  margin-top: 16px;
`;

const LocationRow = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

const LocationImg = styled.img`
  width: 24px;
  margin-right: 4px;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `};
`;
const ItemContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Main: React.FC<MainProps> = ({ windowWidth }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    slidesToShow: 1,
    arrows: false
  };
  const settings2 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom"
  };

  return (
    <div>
      <MainBanner>
        <Slider {...settings}>
          <SliderBox>
            <SliderImg src="https://eap.mindcafe.co.kr/images/main/hero_background_03.png"></SliderImg>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://eap.mindcafe.co.kr/images/main/hero_background_01.png"></SliderImg>
          </SliderBox>
          <SliderBox>
            <SliderImg src="https://eap.mindcafe.co.kr/images/main/hero_background_02.png"></SliderImg>
          </SliderBox>
        </Slider>

        <TxtBox>
          <TxtDiv>
            <H1>
              기업과 사람 사이에
              <br />
              아토머스가 있습니다.
            </H1>
            <H4>
              아토머스의 마인드카페 EAP는 임직원 개인 및 조직의 마음건강을
              정확히 진단하고 맞춤 솔루션을 제공하는 컨설팅 프로그램입니다.
            </H4>
            <Button>무료 견적 받아보기</Button>
          </TxtDiv>
        </TxtBox>
      </MainBanner>

      <Article>
        <InnerBox>
          {/* pc flex / mb div */}
          <PcFlexDiv>
            <Div>
              <H2>
                마인드카페와
                <br />
                함께 하는 기업
              </H2>
              <P>
                마인드 카페 EAP는 국내 최고 기업들의
                <br />
                심리지원 프로그램 파트너입니다.
              </P>
            </Div>
            <RightDiv>
              <Slider {...settings2}>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-01.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-02.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-03.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-04.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-05.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-06.png"></SliderImg2>
                </SliderBox2>
                <SliderBox2>
                  <SliderImg2 src="https://eap.mindcafe.co.kr/images/main/section-02-ci-07.png"></SliderImg2>
                </SliderBox2>
              </Slider>
            </RightDiv>
          </PcFlexDiv>
          <Line></Line>
          {/* pc flex / mb div */}
          <PcFlexDiv>
            <Div>
              <H2>
                기업과 직원을
                <br />
                이어주는 아토머스
              </H2>
              <P>
                마인드카페 EAP(Employee Assistance Program)는 기업과 직원의
                건강한 성장을 도모하는 복리후생 솔루션을 제공합니다.
              </P>
              <Gray>마인드카페는 아토머스(주)의 브랜드 이름입니다.</Gray>
            </Div>
            <Wrapper>
              <Row>
                <Circle light={true}>
                  E<Span>nterprise</Span>
                </Circle>
                <Ul>
                  <Li className="WebBody2">조직문화 향상</Li>
                  <Li className="WebBody2">심리적, 정서적 이슈 예방 및 관리</Li>
                  <Li className="WebBody2">업무 생산성 저하 예방</Li>
                  <Li className="WebBody2">인력 이탈 손실 예방</Li>
                </Ul>
              </Row>
              <Row>
                <Circle light={false}>
                  A<Span>tommerce</Span>
                </Circle>
                <Img_Wrapper>
                  <Img src="https://eap.mindcafe.co.kr/images/common/logo20220502.png"></Img>
                </Img_Wrapper>
              </Row>
              <Row>
                <Circle light={true}>
                  P<Span>eople</Span>
                </Circle>
                <Ul>
                  <Li className="WebBody2">심리적, 정서적 안정</Li>
                  <Li className="WebBody2">회복탄력성 향상</Li>
                  <Li className="WebBody2">스트레스 해소·업무 대처능력 향상</Li>
                  <Li className="WebBody2">기업에 대한 로열티 상승</Li>
                </Ul>
              </Row>
            </Wrapper>
          </PcFlexDiv>
          <Line></Line>
          <div>
            <div>
              <H2>온라인 서비스</H2>
              <P>
                130만 회원에게 검증된 국내 1위 플랫폼으로 온라인 심리케어
                서비스를 제공합니다.
              </P>
            </div>
            <Line></Line>
            {/* pc flex / mb div */}
            <PcFlexDiv>
              <OnlineBox>
                <div>
                  <OnlineImg src="https://eap.mindcafe.co.kr/images/main/online01.png" />
                </div>
                <TxtWrapper>
                  <Spantitle>온라인 심리상담</Spantitle>
                  <SpanSub>
                    전문 상담사와 전화, 채팅을 통한 1:1 실시간 심리상담이
                    가능합니다.
                  </SpanSub>
                </TxtWrapper>
              </OnlineBox>
              <OnlineBox>
                <div>
                  <OnlineImg src="https://eap.mindcafe.co.kr/images/main/online04.png" />
                </div>
                <TxtWrapper>
                  <Spantitle>그룹 심리상담 및 코칭</Spantitle>
                  <SpanSub>
                    상담·코칭 전문가와 화상(비디오)를 통한 실시간 그룹 심리상담,
                    코칭을 진행합니다.
                  </SpanSub>
                </TxtWrapper>
              </OnlineBox>
            </PcFlexDiv>
            <PcFlexDiv>
              <OnlineBox>
                <div>
                  <OnlineImg src="https://eap.mindcafe.co.kr/images/main/online02.png" />
                </div>
                <TxtWrapper>
                  <Spantitle>온라인 코칭</Spantitle>
                  <SpanSub>
                    심리상담 전문가와 전화, 채팅으로 1:1로 실시간 코칭을
                    진행합니다.
                  </SpanSub>
                </TxtWrapper>
              </OnlineBox>
              <OnlineBox>
                <div>
                  <OnlineImg src="https://eap.mindcafe.co.kr/images/main/online03.png" />
                </div>
                <TxtWrapper>
                  <Spantitle>멤버십 채팅 상담</Spantitle>
                  <SpanSub>
                    전문 상담사에게 매일 심리케어 서비스를 받을 수 있습니다.
                    편한 곳에서,
                  </SpanSub>
                </TxtWrapper>
              </OnlineBox>
            </PcFlexDiv>
          </div>
          <Line></Line>
        </InnerBox>
        <Advantages>
          <InnerBox>
            <PcFlexDiv>
              <Div>
                <H2>
                  편한 곳에서,
                  <br />
                  익명으로
                  <br />
                  신속하게
                </H2>
                <P>익명 커뮤니티 기반으로 즉시성과 접근성을 담보합니다.</P>
              </Div>
              <RightDiv>
                <GridBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section-04-advantage-icon-01.png" />
                    <AdvantagesP active={true}>익명성</AdvantagesP>
                    <AdvantagesP active={false}>
                      암호화 및 보안 강화로 익명성과 안정성을 확보합니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section-04-advantage-icon-062.png" />
                    <AdvantagesP active={true}>즉시성</AdvantagesP>
                    <AdvantagesP active={false}>
                      바로 상담 서비스가 가능하며, 즉각적 효과를 제공합니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section04-advantage-icon03.png" />
                    <AdvantagesP active={true}>접근성</AdvantagesP>
                    <AdvantagesP active={false}>
                      원하는 시간과 장소에서 제약 없이 이용 가능합니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section-04-advantage-icon-04.png" />
                    <AdvantagesP active={true}>기술성</AdvantagesP>
                    <AdvantagesP active={false}>
                      빅데이터 기술로 시각화, 통계화된 분석을 제공합니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section-04-advantage-icon-05.png" />
                    <AdvantagesP active={true}>경제성</AdvantagesP>
                    <AdvantagesP active={false}>
                      기업에게 더 합리적인 가격으로 서비스를 제공합니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                  <AdvantagesBox>
                    <ImgIcon src="https://eap.mindcafe.co.kr/images/main/section-04-advantage-icon-06.png" />
                    <AdvantagesP active={true}>전문성</AdvantagesP>
                    <AdvantagesP active={false}>
                      엄격한 전문가 선발 및 전문성관리 시스템을 구축했습니다.
                    </AdvantagesP>
                  </AdvantagesBox>
                </GridBox>
              </RightDiv>
            </PcFlexDiv>
          </InnerBox>
        </Advantages>
        <Article>
          <InnerBox>
            <PcFlexDiv>
              <Div>
                <H2>오프라인 서비스</H2>
                <P>
                  국내 최대 규모의 직영 센터와 전국 500여개의 협약센터를
                  보유하고 있습니다.
                </P>
                <Button2>직영센터 둘러보기</Button2>
              </Div>
              <OfflineContents>
                <OfflineBox>
                  <p className="p5">고위험군 정신과 진료연계</p>
                  <OfflineImg src="https://eap.mindcafe.co.kr/images/main/section-05-hospital-01.png" />
                  <OfflineImg src="https://eap.mindcafe.co.kr/images/main/section-05-hospital-02.png" />
                  <OfflineImg src="https://eap.mindcafe.co.kr/images/main/section-05-hospital-03.png" />
                  <OfflineImg src="https://eap.mindcafe.co.kr/images/main/section-05-hospital-04.png" />
                </OfflineBox>
                <OfflineBox>
                  <p className="p5">고위험군 정신과 진료연계</p>
                  <div>
                    <LocationRow>
                      <LocationImg src="https://eap.mindcafe.co.kr/images/common/location.png" />
                      <p style={{ color: "#222" }}>
                        경기도 성남시 황새울로 214번길 8
                      </p>
                    </LocationRow>
                    <LocationRow>
                      <LocationImg src="https://eap.mindcafe.co.kr/images/common/location.png" />
                      <p style={{ color: "#222" }}>
                        서울특별시 용산구 장문로 23
                      </p>
                    </LocationRow>
                  </div>
                </OfflineBox>
              </OfflineContents>
            </PcFlexDiv>
          </InnerBox>
        </Article>

        <ArticleGrid>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
          <ItemContainer></ItemContainer>
        </ArticleGrid>
      </Article>
    </div>
  );
};

export default Main;
