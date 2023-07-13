import React from "react";
import styled from "styled-components";

interface NextArrowsProps {
  onClickNext: () => void;
}

const ArrowBox = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
`;

const NextArrows: React.FC<NextArrowsProps> = ({ onClickNext }) => {
  return (
    <ArrowBox>
      <button onClick={onClickNext}>
        <img
          src="https://eap.mindcafe.co.kr/images/common/slick-right.png"
          alt="다음 화살표"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </ArrowBox>
  );
};

export default NextArrows;
