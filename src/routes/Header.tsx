import { Link } from "react-router-dom";

import imgLogo from "../image/logo.png";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  windowWidth: number;
  isNavToggle: boolean;
  onToggle: () => void;
}

const HeaderPc = styled.div`
  width: 100%;
  padding: 20px 0;
  max-width: 1200px;
  position: absolute;
  top: 0;
`;

const Div = styled.div``;

const HeaderImg = styled.img`
  width: 100%;
`;

const Pcnav = styled.ul``;
const PcnavList = styled.li``;

const Header: React.FC<HeaderProps> = ({ windowWidth, onToggle }) => {
  return (
    <div>
      {windowWidth > 1200 && (
        <HeaderPc className="flex_sb">
          <Link to="/">
            <div>
              <HeaderImg src={imgLogo} alt="" />
            </div>
          </Link>

          <div className="flex_end">
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
          </div>
        </HeaderPc>
      )}
    </div>
  );
};

export default Header;
