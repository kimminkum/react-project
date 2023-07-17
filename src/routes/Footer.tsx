import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

interface FooterProps {
  windowWidth: number;
  onToggle: () => void;
}

const Container = styled.div`
  width: 360px;
  margin: 0 auto 60px;
  text-align: center;

  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 100%;
      max-width: 1200px;
      margin: 60px auto;
    }
  `}
`;
const InnerBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  ${({ theme }) => css`
    @media (min-width: 1200px) {
      max-width: 1200px;
      padding: 0;
      display: flex;
      justify-content: space-between;
    }
  `}
`;
const FooterBox = styled.div`
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 56%;
      text-align: left;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
    }
  `}
`;
const RightBox = styled.div`
  ${({ theme }) => css`
    @media (min-width: 1200px) {
      width: 40%;
    }
  `}
`;
const Img = styled.img`
  width: 200px;
`;
const AppBox = styled.div`
  width: 240px;
  cursor: pointer;
`;
const AppImg = styled.img`
  width: 50px;
  height: 50px;
`;
const AppTxt = styled.div``;
const AppH5 = styled.h5`
  margin-bottom: 12px;
`;
const AppSmall = styled.small`
  color: #666;
  font-weight: bold;
  display: block;
  font-size: 0.72rem;

  ${({ theme }) => css`
    @media (min-width: 1200px) {
      display: inline-block;
      margin-right: 4px;
    }
  `}
`;
const AppDownBox = styled.ul`
  width: 120px;
`;
const AppList = styled.li`
  cursor: pointer;
  margin-bottom: 2px;
`;
const DownImg = styled.img`
  width: auto;
  height: 27px;
`;
const FooterBanner = styled.div`
  margin: 10px 0;
`;
const FooterBannerImg = styled.img`
  width: 100%;
`;

const FootInfo = styled.div`
  margin-bottom: 8px;
`;
const Smallmr = styled.small`
  color: #666;
  font-weight: bold;
  margin-right: 8px;
  display: inline-block;
  font-size: 0.72rem;
`;
const Small = styled.small`
  color: #666;
  font-weight: bold;
  display: inline-block;
  font-size: 0.72rem;
`;
const App900 = styled.p`
  font-weight: 900;
  display: inline-block;
  font-size: 0.9rem;
`;
const AppP = styled.p`
  display: inline-block;
  font-size: 0.9rem;
  margin-left: 8px;
`;
const IconNav = styled.ul`
  align-items: center;
  font-size: 1.3rem;
`;
const IconList = styled.li`
  cursor: pointer;
  margin-left: 20px;
  padding: 4px;
`;
const PcVer = styled.div`
  align-items: center;
`;

const Footer: React.FC<FooterProps> = ({ windowWidth, onToggle }) => {
  return (
    <div>
      <Container>
        <InnerBox>
          <FooterBox>
            {windowWidth > 1200 && (
              <PcVer className="flex_start">
                <div style={{ marginRight: "42px" }}>
                  <Img src="https://eap.mindcafe.co.kr/images/main/footer_logo.png"></Img>
                </div>

                <IconNav className="flex">
                  <IconList>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </IconList>
                  <IconList>
                    <FontAwesomeIcon icon={faInstagram} />
                  </IconList>
                  <IconList>
                    <FontAwesomeIcon icon={faBlog} />
                  </IconList>
                  <IconList>
                    <FontAwesomeIcon icon={faYoutube} />
                  </IconList>
                </IconNav>
              </PcVer>
            )}
            <div>
              <FootInfo>
                <Smallmr>대표번호 02-567-9811</Smallmr>
                <Small>이메일 eap@atommerce.com</Small>
              </FootInfo>
              <FootInfo>
                <AppSmall>사업자등록번호 374-81-00313</AppSmall>
                <AppSmall>통신판매업신고 제 2019-서울강남-01000호</AppSmall>
                <AppSmall>대표 김규태</AppSmall>
                <AppSmall>주소 서울시 강남구 영동대로 96길 20</AppSmall>
              </FootInfo>
              <FootInfo>
                <App900>개인정보 처리방침</App900>
                <AppP>이메일 무단수집 거부</AppP>
              </FootInfo>
            </div>
          </FooterBox>
          <RightBox>
            <div className="flex_sb">
              <AppBox className="flex">
                <AppImg src="data:image/png;base64,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"></AppImg>
                <AppTxt>
                  <AppH5>마인드카페</AppH5>
                  <AppSmall>심리상담 & 마음 치유 플랫폼</AppSmall>
                </AppTxt>
              </AppBox>
              <AppDownBox>
                <AppList>
                  <DownImg src="https://eap.mindcafe.co.kr/images/main/footer_google_play.png"></DownImg>
                </AppList>
                <AppList>
                  <DownImg src="https://eap.mindcafe.co.kr/images/main/footer_app_store.png"></DownImg>
                </AppList>
              </AppDownBox>
            </div>
            <FooterBanner>
              <FooterBannerImg src="https://eap.mindcafe.co.kr/images/common/footer-apply.png"></FooterBannerImg>
            </FooterBanner>
          </RightBox>
        </InnerBox>
      </Container>
    </div>
  );
};

export default Footer;
