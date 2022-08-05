import React, { useRef, useEffect, useState } from "react";

import {
  TabHeaderContainer,
  StylizedTab,
  StyledTabPanel,
  TabsHolder,
  TabSlider,
  InstructionCard,
  InstructionTitle,
  InstructionList,
  Instrction
} from "./styles";

interface ITabProp {
  label: string;
  active?: any;
  value: any
  onClick?: () => void;
}

export const Tab: React.FC<ITabProp> = ({
  label,
  active,
  onClick,
  value
}) => {
  return (
    <StylizedTab
      role="tab"
      active={active}
      onClick={onClick}
      value={value}
    >
      {label}
    </StylizedTab>
  );
};

interface ITabsProp {
  selectedTab: number;
  children: Array<any>
  onChange: (e: any , value: any) => void;
}

export const Tabs: React.FC<ITabsProp> = ({
  selectedTab, children, onChange
}) => {
  const containerRef = useRef<HTMLInputElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (null !== containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, [containerRef]);

  const sliderWidth = containerWidth / children.length;

  const tabs = children.map((child) => {
    const handleClick = (e: any) => {
      onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      key: child.props.value,
      active: child.props.value === selectedTab,
      onClick: handleClick
    });
  });

  return (
    <TabHeaderContainer ref={containerRef}>
      <TabsHolder>{tabs}</TabsHolder>
      <TabSlider width={sliderWidth}  index={selectedTab} />
    </TabHeaderContainer>
  );
};

interface ITabPanelProp {
  value: any;
  children: any
  selectedIndex: number;
}

export const TabPanel: React.FC<ITabPanelProp> = ({ children, value, selectedIndex }) => {
  const hidden = value !== selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {children}
    </StyledTabPanel>
  );
};