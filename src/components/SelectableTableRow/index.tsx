import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

import { RootState } from '../../redux/store';

interface ISelectedTableRow
  extends React.TableHTMLAttributes<HTMLTableRowElement> {
  rowProps: any;
  onClick?: () => void;
  rowId?: string | number;
}

const SelectableTableRow: React.FC<ISelectedTableRow> = ({
  rowProps,
  rowId,
  children,
  onClick,
}) => {
  const { selectedTableRowId } = useSelector((state: RootState) => state.table);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTableRowId === rowId) {
      setIsSelected(true);
      return;
    }
    setIsSelected(false);
  }, [rowId, selectedTableRowId]);

  return (
    <Container
      onClick={() => {
        if (onClick) onClick();
      }}
      isSelected={isSelected}
      {...rowProps}
    >
      {children}
    </Container>
  );
};

SelectableTableRow.defaultProps = {
  onClick: () => {},
  rowId: -1,
};

export default SelectableTableRow;