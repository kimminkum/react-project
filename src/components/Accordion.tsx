import React, { useState, ReactNode } from "react";
import styled from "styled-components";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const AccordionLine = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;
const AccordionTitle = styled.div<{ open: boolean }>`
  display: flex;
  padding: 24px 36px;
  background-color: ${(props) =>
    props.open ? "rgba(140, 168, 245, 0.356)" : "#fff"};
  border-radius: 24px;
  cursor: pointer;
`;

const Marker = styled.div`
  font-size: 20px;
  line-height: 1.5;
  font-weight: bold;
`;

const TitleTxt = styled.div`
  margin-left: 16px;
  color: #222;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.5;
`;
const AccordionContent = styled.div`
  display: flex;
  padding-left: 36px;
  margin: 32px 0;
  font-size: 16px;
  line-height: 1.5;
`;
const AccordionItem = styled.div`
  margin-left: 16px;
  color: #222;
`;

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionLine>
      <AccordionTitle open={isOpen} onClick={toggleAccordion}>
        <Marker>Q</Marker>
        <TitleTxt className="pr_title">{title}</TitleTxt>
      </AccordionTitle>
      {isOpen && (
        <AccordionContent>
          <Marker>A</Marker>
          <AccordionItem>{children}</AccordionItem>
        </AccordionContent>
      )}
    </AccordionLine>
  );
};

export default Accordion;
