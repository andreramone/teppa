import styled, { css } from "styled-components";

interface TabProps {
  active: boolean;
}

interface TabSliderProps {
  width?: number;
  index: number;
}

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button<TabProps>`
  color: #909391;
  width: 100%;
  font-size: 18px;
  padding: 8px 0;
  font-family: Poppins;
  background-color: transparent;
  border-bottom: 4 solid #909391;
  border: none;
  cursor: pointer;
  ${(p) =>
    p.active &&
    css`
      color: #14834E;
      font-weight: bold;
    `}
`;

export const StyledTabPanel = styled.div<TabProps>`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 4rem;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  flex-direction: row;
`;


export const TabSlider = styled.div<TabSliderProps>`
  width: ${(props) => `${props.width}px`};
  transition: 0.2s;
  background: transparent;
  border: none;
  border-bottom: 4px solid #14834E;
  transform: ${(props) => `translateX(${props.width! * props.index}px)`};

  @media (max-width: 1500px) {
    width: 300px;
    margin-left: 50px;
    transform: translateX(250px * 100px);
  }
`;

export const InstructionCard = styled.div`
  height: 246px;
  width: 100%;
  background-color: #FFF;
  margin-bottom: 20px;
  padding: 20px;
  border-top: 2px solid #909391;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const InstructionTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
`

export const InstructionList = styled.ul`
  padding: 15px 20px;
`

export const Instrction = styled.li`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  font-size: 15px;
  color: #525253;
`
