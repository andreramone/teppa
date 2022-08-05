import styled from 'styled-components';
import Button from '../../components/Button/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: start;

`;

export const Content = styled.div`
  padding: 48px 48px 48px 30px;
  width: 100%;
`;

export const TopContent = styled.div`
  width: 100%;
`;

export const TitleAgent = styled.div`
  flex: 1;
  flex-direction: column;
  width: 100%;
  color: #1f1e25;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;

  span {
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 25px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  padding: 0 20px 0 20px;
  border-style: none;
`;

export const InnerInput = styled.input`
  flex: 1;
  border-style: none;
  opacity: 0.7;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: black;
`;

export const Table = styled.table`
  position: relative;
  border-spacing: 0.5px;
  text-align: left;
  background-color: #ffffff;
  font-size: 12px;
  overflow-y: auto;
  max-height: 640px;
  width: 100%;
`;

export const RegistrosWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;

  color: #525253;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

export const Th = styled.th`
  background: white;
  position: sticky;
  top: 0; // Don't forget this, required for the stickiness
  border: 1px solid #e1e2e1;
  font-weight: normal;
  padding: 8px 14px 8px;
`;

export const Td = styled.td<{statusColor?: string}>`
  border-left: 1px solid #e1e2e1;
  border-right: 1px solid #e1e2e1;
  vertical-align: middle;
  padding: 8px 14px 8px;
  ${props => props.statusColor && `color: ${props.statusColor}`}
`;

export const TableOverflow = styled.div`
  overflow-y: auto;
  max-height: 640px;
  margin: 10px;
  border-bottom: 1px solid #e1e2e1;
`;

export const Trow = styled.tr``;

export const Tr = styled.tr`
  &:hover {
    color: white;
    background-color: #14834e;
  }
`;

export const CrudWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const TableWrapper = styled.div`
  color: black;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  min-height: 630px;
  background: url('https://tm.ibxk.com.br/2019/04/22/22174711196117.jpg?ims=1120x420');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
`;

export const HeaderWrapper = styled.div`
  border-radius: 20px;
  margin-bottom: 20px;
  background: #e5e5e5;
`;
export const Input = styled.input`
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  padding: 20px;
  border-style: none;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  min-height: 49px;
  border-radius: 20px;
  align-items: center;
`;

export const ButtonFilter = styled(Button)`
  font-family: Poppins;
  font-size: 18px;
  background-color: #ffffff;
  color: #909391;
`;

export const FiltersContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const SelectStatusContent = styled.div`
  width: 172px;
  height: 45px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 0 20px;
  border-style: none;
`
export const SelectDateContent = styled.div`
  width: 216px;
  height: 45px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 0 20px;
  border-style: none;
  margin-left: 24px;
`
export const SelectFilter = styled.select`
  cursor: pointer;
  color: #14834e;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border: none;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const ButtonModal = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  background: none;
  border: none;
  color: black;
  padding: 14px;
  cursor: pointer;
`;

export const DropDownPartnerOfficeResponsible = styled.select`
  cursor: pointer;
  color: #14834e;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border: none;
  width: 100%;
`;
