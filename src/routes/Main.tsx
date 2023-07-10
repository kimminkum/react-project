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

const SliderImg = styled.img`
  width: 100%;
  display: inline-block;
  height: 100vh;
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
  font-stretch: normal;
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
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.75px;
  text-align: left;
  vertical-align: sub;
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
    </div>
  );
};

export default Main;
