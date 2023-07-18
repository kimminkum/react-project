import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import imgLogo from "../image/logo.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  windowWidth: number;
  isNavToggle: boolean;
  onToggle: () => void;
}

const HeaderPc = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 10px 0;
  position: fixed;
  top: 0;
  display: ${(props) => (props.active ? "block" : "none")};
  z-index: 5;
  background-color: white;
`;
const InnerBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  align-items: center;
`;
const HeaderMb = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  display: ${(props) => (props.active ? "flex" : "none")};
  z-index: 5;
  background-color: white;
`;
const InnerBoxMb = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  align-items: center;
`;

const BarBox = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const HeaderImgPc = styled.img`
  width: 260px;
`;
const HeaderImgMb = styled.img`
  width: 180px;
`;

const Pcnav = styled.ul`
  padding: 8px 0;
  overflow: hidden;
  align-items: center;
  height: 100%;
`;
const PcnavList = styled.li`
  position: relative;
  width: 130px;
  margin: 0 30px;
  border-radius: 20px;
  padding: 12px 0;
  text-align: center;
  color: #007d7c;
  &:hover {
    background-color: #def0f2;
  }
`;

const Header: React.FC<HeaderProps> = ({ windowWidth, onToggle }) => {
  const [mbButton, setMbButton] = useState<boolean>(false);
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  useEffect(() => {
    // 이전 스크롤 위치를 저장하는 변수
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isTop = currentScrollPos === 0;

      if (isTop) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {windowWidth > 1200 && (
        <HeaderPc active={hideHeader}>
          <InnerBox className="flex_sb">
            <Link to="/">
              <div>
                <HeaderImgPc src={imgLogo} alt="" />
              </div>
            </Link>

            {/* <div className="flex_end">
              <Pcnav className="flex_end">
                <PcnavList>
                  <Link to="/">서비스 소개</Link>
                </PcnavList>
                <PcnavList>
                  <Link to="/">회사 소개</Link>
                </PcnavList>
                <PcnavList>
                  <Link to="/">무료 견적 받아보기</Link>
                </PcnavList>
              </Pcnav>
            </div> */}
            <BarBox className="flex_end" onClick={onToggle}>
              <FontAwesomeIcon icon={faBars} />
            </BarBox>
          </InnerBox>
        </HeaderPc>
      )}
      {windowWidth < 1200 && (
        <HeaderMb active={hideHeader}>
          <InnerBoxMb className="flex_sb">
            <Link to="/">
              <div>
                <HeaderImgMb src={imgLogo} alt="" />
              </div>
            </Link>

            <BarBox className="flex_end" onClick={onToggle}>
              <FontAwesomeIcon icon={faBars} />
            </BarBox>
          </InnerBoxMb>
        </HeaderMb>
      )}
    </div>
  );
};

export default Header;
