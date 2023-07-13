import React from "react";
import styled from "styled-components";

interface PrevArrowsProps {
  onClickPrev: () => void;
}

const ArrowBox = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  text-align: center;
`;

const PrevArrows: React.FC<PrevArrowsProps> = ({ onClickPrev }) => {
  return (
    <ArrowBox>
      <button onClick={onClickPrev}>
        <img
          src="https://eap.mindcafe.co.kr/images/common/slick-left.png"
          alt="이전 화살표"
          style={{ width: "50px", height: "50px" }}
        />
      </button>
    </ArrowBox>
  );
};

export default PrevArrows;
