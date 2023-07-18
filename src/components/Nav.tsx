import { Link } from "react-router-dom";
import styled from "styled-components";

interface HistoryProps {
  isNavToggle: boolean;
  onToggle: () => void;
}

const NavContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const NavDiv = styled.div`
  width: 50%;
  min-width: 320px;
  position: absolute;
  height: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NavImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Nav: React.FC<HistoryProps> = ({ onToggle }) => {
  return (
    <NavContainer style={{ position: "relative" }}>
      <NavImg
        src="http://www.atommerce.com/_next/static/images/bg-welcome-section-abbde91ef6f2773ab674e5df914fbaed.jpg"
        alt=""
      />
      <NavDiv>
        <p className="NavTitle">괜찮은 척 안해도 돼요.</p>
        <p className="NavTxt">
          우리나라 국민 4명 중 1명은 평생에 한 번 이상 마음에 문제가 생겨요.
          하지만 관련 서비스를 받는 사람은 캐나다, 미국, 뉴질랜드의 반 정도밖에
          되지 않죠. 내 마음이 건강하다고 생각하거나 스스로 해결할 수 있다고
          생각하는 경우가 대부분이에요. 이제는 괜찮은 척하지 않아도 돼요.
          마인드카페가 도울 수 있어요.
        </p>
      </NavDiv>
    </NavContainer>
  );
};

export default Nav;
