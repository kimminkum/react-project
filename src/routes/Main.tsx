import React, { useRef, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextArrows from "../components/NextArrows";
import PrevArrows from "../components/PrevArrows";

interface MainProps {
  windowWidth: number;
}

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

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
const Article2 = styled.article`
  margin: 30px 0;
  padding: 30px 0;
  background-color: rgba(119, 196, 198, 0.24);
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      padding: 0;
      background-color: #fff;
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
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 780px;
      height: 172px;
      justify-content: flex-end;
      flex-direction: row;
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
  margin-top: 24px;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: solid 2px #3bacae;
  background-color: #fff;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 310px;
      padding: 24px 32px;
      height: 270px;
      justify-content: flex-start;
      margin-top: 0;
      margin-left: 24px;
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
    @media (min-width: 960px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `};
`;
const ItemContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    > div {
      opacity: 1;
    }
  }
`;

const ItemImg = styled.img`
  width: 100%;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const ItemP = styled.p`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 20px;
      font-weight: 500;
    }
  `};
`;

const ItemHoverBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MtDiv = styled.div`
  margin-top: 20px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      margin-top: 60px;
    }
  `};
`;

const SpecialBox = styled.div`
  position: relative;
  width: 305px !important;
  height: 156px !important;
  margin-right: 8px;
  display: flex !important;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      align-items: flex-end;
      width: 492px !important;
      height: 262px !important;
      margin-right: 16px;
    }
  `};
`;

const SpecialWrapper = styled.div`
  display: flex;
  background-color: #def0f2;
  border-radius: 16px;
  height: 136px;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      justify-content: end;
      height: 236px;
    }
  `};
`;

const SpecialImg = styled.img`
  width: 148px;
  position: absolute;
  left: 10px;
  bottom: 0;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 262px;
    }
  `};
`;
const SpecialInfo = styled.div`
  padding-top: 0px;
  padding-right: 18px;
  position: absolute;
  right: 0;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      padding-top: 36px;
      padding-right: 36px;
    }
  `};
`;

const SpecialLi = styled.li`
  font-size: 11px;
  line-height: 1.5;
  color: rgba(34, 34, 34, 0.71);
  ${({ theme }) => css`
    @media (min-width: 960px) {
      font-size: 14px;
    }
  `};
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 16px;
    }
  `};
`;

const SlickDiv = styled.div`
  position: relative;
  width: 100%;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      padding: 0 50px;
    }
  `};
`;

const ExpertBox = styled.div`
  width: 100%;
  display: inline-block;
  padding: 8px 4px;
`;
const ExpertWrapper = styled.div`
  height: auto;
  border-radius: 16px;
  padding: 20px;
  height: 252px;
  background-color: #fff
    ${({ theme }) => css`
      @media (min-width: 1200px) {
        box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.04),
          0 1px 8px 0 rgba(0, 0, 0, 0.08);
      }
    `};
`;
const ExpertTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const ExpertBottom = styled.div`
  border-top: 1px solid #ddd;
`;

const ExpertObj = styled.div`
  font-size: 11px;
  line-height: 1.5;
  border-radius: 12px;
  border: 1px solid #bbb;
  padding: 4px 8px;
  margin-right: 4px;
  color: #aaa;
`;

const EapBox = styled.div<{ bg: string }>`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: ${(props) => props.bg};
  margin-bottom: 36px;
  padding: 24px;
  border-radius: 16px;
  overflow: hidden;
  ${({ theme }) => css`
    @media (min-width: 720px) {
      width: 49.2%;
      height: 208px;
    }
    @media (min-width: 1200px) {
      width: 32%;
      height: 252px;
    }
  `};
`;

const ButtonEap = styled.button<{ act: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: solid 1px;
  border-color: ${(props) => (props.act ? "#007d7c" : "#fff")};
  color: #fff;
  background-color: ${(props) => (props.act ? "#007d7c" : "inherit")};
  width: 106px;
  height: 36px;
  font-size: 16px;
  cursor: pointer;
`;

const BackEap = styled.button<{ act: boolean }>`
  position: absolute;
  border-radius: 8px;
  border: solid 1px;
  border-color: ${(props) => (props.act ? "#007d7c" : "#fff")};
  color: ${(props) => (props.act ? "#007d7c" : "#fff")};
  width: 106px;
  height: 36px;
  right: 16px;
  bottom: 12px;
  font-size: 16px;
  cursor: pointer;
`;

const EapImg = styled.img`
  position: absolute;
  right: 24px;
  bottom: 24px;
`;

const MoreEap = styled.div<{ visible: boolean; bg: string }>`
  background-color: ${(props) => props.bg};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  padding: 24px;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0" : "100%")});
  transition: opacity 0.3s, transform 0.3s;
`;

const GraphDiv = styled.div`
  border-radius: 24px;
  background-color: #def0f2;
  margin-top: 12px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      min-width: 422px;
      margin-right: 40px;
    }
  `};
`;

const GraphInfoDiv = styled.div`
  width: 100%;
  margin: 12px 0 0 0;
  color: rgba(255, 255, 255, 0.89)
    ${({ theme }) => css`
      @media (min-width: 1200px) {
        width: 62%;
        margin: 12px 12px 0 0;
      }
    `};
`;

const GraphBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  color: #2a2a2a;
`;

const GraphLi = styled.li<{ bg: string }>`
  background-color: ${(props) => props.bg};
  border-radius: 24px;
  margin-bottom: 12px;
  padding: 24px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      padding: 24px 48px;
    }
  `};
`;

const GrapNum = styled.span`
  margin-right: 8px;
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.5px;
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      font-size: 64px;
    }
  `};
`;

const ReviewBox = styled.div`
  width: 100%;
  padding: 24px;
  height: 300px;
`;
const ReviewTitle = styled.h3`
  margin-bottom: 8px;
  color: #888;
`;
const ReviewSub = styled.p`
  font-weight: bold;
  color: #888;
  font-size: 18px;
  margin: auto 6px;
`;
const ReviewImg = styled.img`
  width: 22px;
  padding: 0;
`;
const ReviewTxt = styled.p`
  color: #888;
  margin-top: 12px;
  font-size: 14px;
`;

const Main: React.FC<MainProps> = ({ windowWidth }) => {
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);
  const [slidesToShow1, setSlidesToShow1] = useState<number>(4);
  const [slidesToShow2, setSlidesToShow2] = useState<number>(3);

  const [isMoreEapVisible1, setIsMoreEapVisible1] = useState(false);
  const [isMoreEapVisible2, setIsMoreEapVisible2] = useState(false);
  const [isMoreEapVisible3, setIsMoreEapVisible3] = useState(false);
  const [isMoreEapVisible4, setIsMoreEapVisible4] = useState(false);
  const [isMoreEapVisible5, setIsMoreEapVisible5] = useState(false);
  const [isMoreEapVisible6, setIsMoreEapVisible6] = useState(false);

  const VoiceImg: string =
    "https://eap.mindcafe.co.kr/images/main/section-09-icon-02.png";
  const TxtImg: string =
    "https://eap.mindcafe.co.kr/images/main/section-09-icon-03.png";
  const GroupImg: string =
    "https://eap.mindcafe.co.kr/images/main/section-09-icon-01.png";

  const handleButtonEapClick1 = () => {
    setIsMoreEapVisible1(!isMoreEapVisible1);
  };
  const handleButtonEapClick2 = () => {
    setIsMoreEapVisible2(!isMoreEapVisible2);
  };
  const handleButtonEapClick3 = () => {
    setIsMoreEapVisible3(!isMoreEapVisible3);
  };
  const handleButtonEapClick4 = () => {
    setIsMoreEapVisible4(!isMoreEapVisible4);
  };
  const handleButtonEapClick5 = () => {
    setIsMoreEapVisible5(!isMoreEapVisible5);
  };
  const handleButtonEapClick6 = () => {
    setIsMoreEapVisible6(!isMoreEapVisible6);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow1(1);
      } else if (window.innerWidth <= 720) {
        setSlidesToShow1(2);
        setSlidesToShow2(1);
      } else if (window.innerWidth <= 1200) {
        setSlidesToShow1(3);
        setSlidesToShow2(2);
      } else {
        setSlidesToShow1(4);
        setSlidesToShow2(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    slidesToShow: 1,
    arrows: false,
    loop: true
  };
  const settings2 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    arrows: false,
    loop: true,
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
  const settings3 = {
    autoplay: false,
    slidesToShow: slidesToShow2,
    arrows: false,
    loop: true
  };
  const settings4 = {
    slidesToShow: slidesToShow1,
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true,
    arrows: false
  };
  const settings5 = {
    slidesToShow: slidesToShow2,
    autoplay: false,
    loop: true,
    arrows: false
  };
  const handlePrev = () => {
    (sliderRef.current as any).slickPrev(); // 슬라이드 이전으로 이동
  };

  const handleNext = () => {
    (sliderRef.current as any).slickNext(); // 슬라이드 다음으로 이동
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
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-01.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                라운지
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-02.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                휴게공간
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-03.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                아동대기실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-04.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                아동 미술치료실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-05.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                부부상담실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-06.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                아동 놀이치료실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-07.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                밸런스 검사실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
          <ItemContainer>
            <ItemImg src="https://eap.mindcafe.co.kr/images/main/section-05-room-08.png" />
            <ItemHoverBox>
              <ItemP>
                마인드카페
                <br />
                심리상담실
              </ItemP>
            </ItemHoverBox>
          </ItemContainer>
        </ArticleGrid>
      </Article>

      <Article>
        <InnerBox>
          <div>
            <H2>업계 최대 규모, 최고의 전문의</H2>
            <P style={{ width: "384px" }}>
              업계 최대 자체 정신건강 R&D 연구소 운영을 통해 최적의 전문케어를
              제공합니다.
            </P>
          </div>
          <MtDiv>
            <Slider {...settings3} className="widthfull">
              <div>
                <SpecialBox>
                  <SpecialWrapper>
                    <SpecialImg src="https://eap.mindcafe.co.kr/images/main/section-06-doctor-01.png" />
                    <SpecialInfo>
                      <p className="p6">양재진 원장</p>
                      <ul>
                        <SpecialLi>· 마인드카페 고문</SpecialLi>
                        <SpecialLi>· 진병원 대표 원장</SpecialLi>
                        <SpecialLi>· MBN 속풀이쇼 출연</SpecialLi>
                        <SpecialLi>· SBS 동상이몽 출연</SpecialLi>
                      </ul>
                    </SpecialInfo>
                  </SpecialWrapper>
                </SpecialBox>
              </div>
              <div>
                <SpecialBox>
                  <SpecialWrapper>
                    <SpecialImg src="https://eap.mindcafe.co.kr/images/main/section-06-doctor-02.png" />
                    <SpecialInfo>
                      <p className="p6">양재웅 원장</p>
                      <ul>
                        <SpecialLi>· 마인드카페 이사</SpecialLi>
                        <SpecialLi>· W진병원 대표 원장</SpecialLi>
                        <SpecialLi>· 채널A 하트시그널 출연</SpecialLi>
                        <SpecialLi>· JTBC 비정상회담 출연</SpecialLi>
                      </ul>
                    </SpecialInfo>
                  </SpecialWrapper>
                </SpecialBox>
              </div>
              <div>
                <SpecialBox>
                  <SpecialWrapper>
                    <SpecialImg src="https://eap.mindcafe.co.kr/images/main/section-06-doctor-03.png" />
                    <SpecialInfo>
                      <p className="p6">이승원 소장</p>
                      <ul>
                        <SpecialLi>· 마카 심리연구소 소장</SpecialLi>
                        <SpecialLi>· 경희사이버대 </SpecialLi>
                        <SpecialLi>&nbsp;&nbsp;상담심리학과 교수</SpecialLi>
                        <SpecialLi>· 고려대 심리학과 임상/</SpecialLi>
                        <SpecialLi>&nbsp;&nbsp;상담심리 박사(수료)</SpecialLi>
                      </ul>
                    </SpecialInfo>
                  </SpecialWrapper>
                </SpecialBox>
              </div>
              <div>
                <SpecialBox>
                  <SpecialWrapper>
                    <SpecialImg src="https://eap.mindcafe.co.kr/images/main/section-06-doctor-04.png" />
                    <SpecialInfo>
                      <p className="p6">박윤정 원장</p>
                      <ul>
                        <SpecialLi>· 마인드카페 심리센터(수내) 원장</SpecialLi>
                        <SpecialLi>· 한국임상심리학회</SpecialLi>
                        <SpecialLi>&nbsp;&nbsp;임상심리 전문가</SpecialLi>
                        <SpecialLi>· 보건복지부</SpecialLi>
                        <SpecialLi>
                          &nbsp;&nbsp;정신건강임상심리사 1급
                        </SpecialLi>
                      </ul>
                    </SpecialInfo>
                  </SpecialWrapper>
                </SpecialBox>
              </div>
              <div>
                <SpecialBox>
                  <SpecialWrapper>
                    <SpecialImg src="https://eap.mindcafe.co.kr/images/main/section-06-doctor-05.png" />
                    <SpecialInfo>
                      <p className="p6">오지희 원장</p>
                      <ul>
                        <SpecialLi>· 마인드카페 심리센터</SpecialLi>
                        <SpecialLi>&nbsp;&nbsp;(한남) 원장</SpecialLi>
                        <SpecialLi>· 한국임상심리학회</SpecialLi>
                        <SpecialLi>&nbsp;&nbsp;임상심리 전문가</SpecialLi>
                        <SpecialLi>· 중앙대 심리학과 석사</SpecialLi>
                      </ul>
                    </SpecialInfo>
                  </SpecialWrapper>
                </SpecialBox>
              </div>
            </Slider>
          </MtDiv>
        </InnerBox>
      </Article>

      <Article2>
        <InnerBox>
          <PcFlexDiv>
            <div style={{ marginBottom: "20px" }}>
              <H2>1,000명의 상담·코칭 전문가 보유</H2>
              <P>
                엄격한 선발기준과 특화된 교육을 통해 최상의 서비스를 제공합니다
              </P>
            </div>
            <Div>
              <a href="#">
                <ItemImg src="https://eap.mindcafe.co.kr/images/common/expert-apply.png" />
              </a>
            </Div>
          </PcFlexDiv>
          <SlickDiv>
            <Slider {...settings4} ref={sliderRef} className="around">
              <div>
                <ExpertBox>
                  <ExpertWrapper>
                    <ExpertTop>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-07-coach-01.png"
                        alt=""
                      />
                      <div style={{ marginLeft: "12px" }}>
                        <p className="name">임그린 코치</p>
                        <p className="career">전문 경력 10년 +</p>
                        <div className="flex_center">
                          <ExpertObj>#대인관계</ExpertObj>
                          <ExpertObj>#목표달성</ExpertObj>
                        </div>
                      </div>
                    </ExpertTop>
                    <ExpertBottom>
                      <p className="name">간략한 자기소개</p>
                      <p className="WebBody1" style={{ fontSize: "14px" }}>
                        구체적인 새로운 역할 변화를 위한 행동과 원칙을 결정할 수
                        있어요. 탁월한 인생을 살아보세요.
                      </p>
                    </ExpertBottom>
                  </ExpertWrapper>
                </ExpertBox>
              </div>
              <div>
                <ExpertBox>
                  <ExpertWrapper>
                    <ExpertTop>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-07-coach-02.png"
                        alt=""
                      />
                      <div style={{ marginLeft: "12px" }}>
                        <p className="name">남윤정 코치</p>
                        <p className="career">전문 경력 4년 +</p>
                        <div className="flex_center">
                          <ExpertObj>#자존감</ExpertObj>
                          <ExpertObj>#실행력</ExpertObj>
                        </div>
                      </div>
                    </ExpertTop>
                    <ExpertBottom>
                      <p className="name">간략한 자기소개</p>
                      <p className="WebBody1" style={{ fontSize: "14px" }}>
                        코치는 당신의 잠재력과 창의력, 가능성을 불러 일으키고
                        한발 더 나아가는 여정을 함께 합니다.
                      </p>
                    </ExpertBottom>
                  </ExpertWrapper>
                </ExpertBox>
              </div>
              <div>
                <ExpertBox>
                  <ExpertWrapper>
                    <ExpertTop>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-07-coach-03.png"
                        alt=""
                      />
                      <div style={{ marginLeft: "12px" }}>
                        <p className="name">이영애 코치</p>
                        <p className="career">전문 경력 10년 +</p>
                        <div className="flex_center">
                          <ExpertObj>#의사소통</ExpertObj>
                          <ExpertObj>#갈등관리</ExpertObj>
                        </div>
                      </div>
                    </ExpertTop>
                    <ExpertBottom>
                      <p className="name">간략한 자기소개</p>
                      <p className="WebBody1" style={{ fontSize: "14px" }}>
                        자신이 디자인한 삶을 위한 변화와 성장을 함께
                        만들어갑니다.
                      </p>
                    </ExpertBottom>
                  </ExpertWrapper>
                </ExpertBox>
              </div>
              <div>
                <ExpertBox>
                  <ExpertWrapper>
                    <ExpertTop>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-07-coach-04.png"
                        alt=""
                      />
                      <div style={{ marginLeft: "12px" }}>
                        <p className="name">김수연 코치</p>
                        <p className="career">전문 경력 9년 +</p>
                        <div className="flex_center">
                          <ExpertObj>#자존감</ExpertObj>
                          <ExpertObj>#부모코칭</ExpertObj>
                        </div>
                      </div>
                    </ExpertTop>
                    <ExpertBottom>
                      <p className="name">간략한 자기소개</p>
                      <p className="WebBody1" style={{ fontSize: "14px" }}>
                        나의 감정과 욕구, 가치를 명료화하여 목적이 인도하는 삶을
                        살아갈 수 있도록 지원합니다.
                      </p>
                    </ExpertBottom>
                  </ExpertWrapper>
                </ExpertBox>
              </div>
              <div>
                <ExpertBox>
                  <ExpertWrapper>
                    <ExpertTop>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-07-coach-05.png"
                        alt=""
                      />
                      <div style={{ marginLeft: "12px" }}>
                        <p className="name">이정아 코치</p>
                        <p className="career">전문 경력 8년 +</p>
                        <div className="flex_center">
                          <ExpertObj>#비즈니스</ExpertObj>
                          <ExpertObj>#커리어</ExpertObj>
                        </div>
                      </div>
                    </ExpertTop>
                    <ExpertBottom>
                      <p className="name">간략한 자기소개</p>
                      <p className="WebBody1" style={{ fontSize: "14px" }}>
                        내 마음을 온전히 터놓고 함께 나눌 수 있는 ‘나만의
                        안전지대'가 되어드리는 전문코치입니다.
                      </p>
                    </ExpertBottom>
                  </ExpertWrapper>
                </ExpertBox>
              </div>
            </Slider>
            {windowWidth > 1200 && <NextArrows onClickNext={handleNext} />}
            {windowWidth > 1200 && <PrevArrows onClickPrev={handlePrev} />}
          </SlickDiv>
        </InnerBox>
      </Article2>

      <Article style={{ marginTop: "60px" }} className="eap">
        <InnerBox>
          <H2>체계적인 EAP 프로그램 제공</H2>
          <P>
            기업과 직원에게 필요한 다양한
            <br />
            심리케어 프로그램을 제공합니다.
          </P>
          <div
            className="flex_sb"
            style={{ marginTop: "24px", flexWrap: "wrap" }}
          >
            <EapBox bg="#3bacae">
              <div>
                <p className="p4 white74">EAP시스템</p>
                <p className="sub_title white">고객사 전용 EAP 시스템 구축</p>
                <ButtonEap act={false} onClick={handleButtonEapClick1}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-01.png" />
              </div>
              <MoreEap bg="#3bacae" visible={isMoreEapVisible1}>
                <p className="p6 white">EAP 시스템</p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="white74 WebBody2">
                    • 고객사 임직원 인증 시스템 구축
                  </li>
                  <li className="white74 WebBody2">
                    • 전체 프로그램 이용 메뉴얼 제공
                  </li>
                  <li className="white74 WebBody2">
                    • 앱을 통한 One stop EAP 서비스 제공
                  </li>
                </ul>
                <BackEap act={false} onClick={handleButtonEapClick1}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
            <EapBox bg="#77c4c6">
              <div>
                <p className="p4 white74">심리 상담 & 코칭</p>
                <p className="sub_title white">
                  시공간 제약 없는 심리상담·코칭
                </p>
                <ButtonEap act={false} onClick={handleButtonEapClick2}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-02.png" />
              </div>
              <MoreEap bg="#77c4c6" visible={isMoreEapVisible2}>
                <p className="p6 white">시공간 제약 없는 심리상담·코칭</p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="white74 WebBody2 bold">온라인</li>
                  <li className="white74 WebBody2">
                    • 비대면 심리상담·코칭 제공
                  </li>
                  <li className="white74 WebBody2 bold">오프라인</li>
                  <li className="white74 WebBody2">
                    • 온·오프라인 연계 서비스
                  </li>
                  <li className="white74 WebBody2">
                    • 국내 최고 시설의 직영센터
                  </li>
                </ul>
                <BackEap act={false} onClick={handleButtonEapClick2}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
            <EapBox bg="#addadc">
              <div>
                <p className="p4 jingreen">홍보 컨텐츠</p>
                <p className="sub_title blackgreen">
                  지속적인 전문 심리상담 콘텐츠 제공
                </p>
                <ButtonEap act={true} onClick={handleButtonEapClick3}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-03.png" />
              </div>
              <MoreEap bg="#addadc" visible={isMoreEapVisible3}>
                <p className="p6 blackgreen">
                  지속적인 전문 심리상담 콘텐츠 제공
                </p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="jingreen WebBody2">
                    • 온·오프라인 EAP 컨텐츠 제공
                  </li>
                  <li className="jingreen WebBody2">• 도입 프로모션</li>
                </ul>
                <BackEap act={true} onClick={handleButtonEapClick3}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
            <EapBox bg="#77c4c6">
              <div>
                <p className="p4 white74">보고서</p>
                <p className="sub_title white">
                  빅데이터를 활용한 조직 진단 보고
                </p>
                <ButtonEap act={false} onClick={handleButtonEapClick4}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-04.png" />
              </div>
              <MoreEap bg="#77c4c6" visible={isMoreEapVisible4}>
                <p className="p6 white">빅데이터를 활용한 조직 진단 보고</p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="white74 WebBody2 bold">
                    빅데이터 조직 진단 보고
                  </li>
                  <li className="white74 WebBody2">• 조직 진단 결과 보고</li>
                  <li className="white74 WebBody2">• 사전/사후 효과성 검증</li>
                  <li className="white74 WebBody2 bold">단계별 보고서</li>
                  <li className="white74 WebBody2">
                    • 주기별 EAP 운영 현황 보고·컨설팅
                  </li>
                </ul>
                <BackEap act={false} onClick={handleButtonEapClick4}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
            <EapBox bg="#addadc">
              <div>
                <p className="p4 jingreen">심리검사</p>
                <p className="sub_title blackgreen">
                  개인·조직 대상 다양한 심리검사 실시
                </p>
                <ButtonEap act={true} onClick={handleButtonEapClick5}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-05.png" />
              </div>
              <MoreEap bg="#addadc" visible={isMoreEapVisible5}>
                <p className="p6 blackgreen">
                  개인·조직 대상 다양한 심리검사 실시
                </p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="jingreen WebBody2">
                    • 기본/ 심층 정신건강 진단
                  </li>
                  <li className="jingreen WebBody2">• 조직 진단</li>
                  <li className="jingreen WebBody2">• 맞춤 연계 컨설팅</li>
                </ul>
                <BackEap act={true} onClick={handleButtonEapClick5}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
            <EapBox bg="#def0f2">
              <div>
                <p className="p4 jingreen">그룹 프로그램</p>
                <p className="sub_title blackgreen">
                  조직 맞춤 강연 및 프로그램 진행
                </p>
                <ButtonEap act={true} onClick={handleButtonEapClick6}>
                  더 알아보기
                </ButtonEap>
                <EapImg src="https://eap.mindcafe.co.kr/images/main/section-08-graphic-06.png" />
              </div>
              <MoreEap bg="#def0f2" visible={isMoreEapVisible6}>
                <p className="p6 blackgreen">조직 맞춤 강연 및 프로그램 진행</p>
                <ul style={{ marginTop: "4px" }}>
                  <li className="jingreen WebBody2">
                    • Work & Life 주제 강연, 집단상담
                  </li>
                  <li className="jingreen WebBody2">• 사전/사후 효과성 검증</li>
                </ul>
                <BackEap act={true} onClick={handleButtonEapClick6}>
                  돌아가기
                </BackEap>
              </MoreEap>
            </EapBox>
          </div>
        </InnerBox>
      </Article>

      <Article className="graph">
        <InnerBox>
          <div>
            <H2></H2>
            <P></P>
          </div>
          <PcFlexDiv>
            <GraphDiv>
              <GraphBox>
                <p className="WebH4">불안, 우울 등 심리 지표의 유의미한 감소</p>
                <img
                  src="https://eap.mindcafe.co.kr/images/main/section-08-graph-01.png"
                  alt=""
                  style={{
                    marginTop: "54px"
                  }}
                />
                <p className="smallP">
                  아토머스x행복나눔재단 코로나 피해자 대상 비대면상담 효과성
                  검증 프로젝트(2020)
                </p>
              </GraphBox>
            </GraphDiv>
            <GraphInfoDiv>
              <ul>
                <GraphLi bg="#3bacae">
                  <div className="flex_sb">
                    <p className="WebH4 white74" style={{ width: "35%" }}>
                      심리치료로 경감되는 불안정도
                    </p>
                    <div className="flex">
                      <GrapNum className="white">50%</GrapNum>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-08-graph-02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </GraphLi>
                <GraphLi bg="#77c4c6">
                  <div className="flex_sb">
                    <p className="WebH4 white74" style={{ width: "35%" }}>
                      심리치료로 감소하는 업무시간 손실
                    </p>
                    <div className="flex">
                      <GrapNum className="white">50%</GrapNum>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-08-graph-02.png"
                        alt=""
                      />
                    </div>
                  </div>
                </GraphLi>
                <GraphLi bg={"#addadc"}>
                  <div className="flex_sb">
                    <p className="WebH4 jingreen" style={{ width: "35%" }}>
                      심리치료로 향상되는 업무 생산성
                    </p>
                    <div className="flex">
                      <GrapNum className="blackgreen">36%</GrapNum>
                      <img
                        src="https://eap.mindcafe.co.kr/images/main/section-08-graph-03.png"
                        alt=""
                      />
                    </div>
                  </div>
                </GraphLi>
                <p className="smallP" style={{ marginTop: "12px" }}>
                  Meghan DellaCrosse, Kush Mahan & Thomas D. Hull, Journal of
                  Tech. in Behavioral Science, 4 (2019)
                </p>
              </ul>
            </GraphInfoDiv>
          </PcFlexDiv>
        </InnerBox>
      </Article>

      <Article2>
        <InnerBox>
          <div style={{ marginTop: "60px" }}>
            <div style={{ marginBottom: "20px" }}>
              <H2>10,000여 개의 후기로 증명된 상담 효과</H2>
              <P>
                상담사에 대해 사람들이 어떻게 생각했는지 앱 내에서 바로 확인할
                수 있습니다.
              </P>
            </div>
          </div>
          <Line></Line>
          <SlickDiv>
            <Slider {...settings5} ref={sliderRef2} className="around">
              <div>
                <ReviewBox>
                  <ReviewTitle>집중해서 들어주세요</ReviewTitle>
                  <div className="flex">
                    <ReviewImg src={VoiceImg} />
                    <ReviewSub>보이스 테라피</ReviewSub>
                    <ReviewImg src="https://eap.mindcafe.co.kr/images/main/section-09-icon-05.png" />
                    <ReviewSub>5.0</ReviewSub>
                  </div>
                  <ReviewTxt>
                    요즘 회사에서 스트레스를 너무 많이 받고 있습니다. 사람
                    만나는 것도 싫고 집에만 있고 싶고 내가 우울증에 걸렸나? 라는
                    생각도 들고 머릿속이 복잡했는데, 집에서 앱으로 상담 받을 수
                    있다고 해서 해봤어요. 상담사 선생님께서 정말 집중해서
                    들어주시고 말씀해 주셔서 감동받았어요 너무 감사합니다.
                  </ReviewTxt>
                </ReviewBox>
              </div>
              <div>
                <ReviewBox>
                  <ReviewTitle>마음이 너무 편해졌어요</ReviewTitle>
                  <div className="flex">
                    <ReviewImg src={TxtImg} />
                    <ReviewSub>텍스트 테라피</ReviewSub>
                    <ReviewImg src="https://eap.mindcafe.co.kr/images/main/section-09-icon-05.png" />
                    <ReviewSub>5.0</ReviewSub>
                  </div>
                  <ReviewTxt>
                    최근 너무 힘든 일이 많은데 정신과라는 타이틀이 너무 무겁게만
                    느껴졌습니다. 그러다가 우연히 알게 된 마인드 카페에서 가볍게
                    들어와 둘러보다 상담사 분과 테라피를 진행했는데 어렵지 않게
                    제 감정과 생각을 전달하면서 선생님께서 꼼꼼히 답변해 주셔서
                    너무 좋았습니다. 이렇게나마 털어놓으니 맘이 너무 편해졌어요.
                  </ReviewTxt>
                </ReviewBox>
              </div>
              <div>
                <ReviewBox>
                  <ReviewTitle>우울한 이유를 알게 됐어요</ReviewTitle>
                  <div className="flex">
                    <ReviewImg src={GroupImg} />
                    <ReviewSub>그룹 테라피</ReviewSub>
                    <ReviewImg src="https://eap.mindcafe.co.kr/images/main/section-09-icon-05.png" />
                    <ReviewSub>5.0</ReviewSub>
                  </div>
                  <ReviewTxt>
                    다른 원데이 클래스랑은 비교가 안되는 그룹 테라피 때문에 이
                    앱 팬이 됐어요. 다른 데에서 힐링 관련된 원데이 클래스 아무리
                    들어도 그냥 적당히 하하 호호 하고 체험하고 끝이었는데,
                    여기는 진짜 심리상담사가 심리와 관련된 그룹 테라피를
                    진행하니까 확실히 너무 좋아요. 저는 가끔 갑자기 이유를
                    모르는 우울함이 덮쳐와서 힘들 때가 있었는데 명상 클래스
                    들으면서 많이 울기도 하고, 제가 우울한 이유를 알게
                    되었습니다.
                  </ReviewTxt>
                </ReviewBox>
              </div>
              <div>
                <ReviewBox>
                  <ReviewTitle>신뢰가 가는 서비스</ReviewTitle>
                  <div className="flex">
                    <ReviewImg src={VoiceImg} />
                    <ReviewSub>보이스 테라피</ReviewSub>
                    <ReviewImg src="https://eap.mindcafe.co.kr/images/main/section-09-icon-05.png" />
                    <ReviewSub>5.0</ReviewSub>
                  </div>
                  <ReviewTxt>
                    정신과 진료를 많이 받아봤는데 효과가 없고 약만 타러 가게
                    되더라고요. 그래서 상담 치료를 알아보던 중 마인드카페를 알게
                    되었는데 상담지 작성부터 상담사를 직접 선택할 수 있는 게
                    너무 마음에 들었고, 신뢰가 갔습니다.
                  </ReviewTxt>
                </ReviewBox>
              </div>
              <div>
                <ReviewBox>
                  <ReviewTitle>나를 알아가는 시간</ReviewTitle>
                  <div className="flex">
                    <ReviewImg src={GroupImg} />
                    <ReviewSub>그룹 테라피</ReviewSub>
                    <ReviewImg src="https://eap.mindcafe.co.kr/images/main/section-09-icon-05.png" />
                    <ReviewSub>5.0</ReviewSub>
                  </div>
                  <ReviewTxt>
                    매일 누군가와 상담할 수 있는 서비스도 좋고 상담 선생님들을
                    다양하게 접하고 나에게 맞는 분을 직접 선택할 수 있어서
                    좋습니다. 자기성찰을 할 수 있는 좋은 앱입니다. 자신을
                    모르겠다면 꼭 한 번 해 보시길 바랍니다.
                  </ReviewTxt>
                </ReviewBox>
              </div>
            </Slider>
            {windowWidth > 1200 && <NextArrows onClickNext={handleNext} />}
            {windowWidth > 1200 && <PrevArrows onClickPrev={handlePrev} />}
          </SlickDiv>
        </InnerBox>
      </Article2>

      <Article></Article>
    </div>
  );
};

export default Main;
