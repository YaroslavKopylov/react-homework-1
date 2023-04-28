import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 50px;
`;

export const Table = styled.table`
  padding: 40px 0;
  border-collapse: collapse;
  margin: 0 auto;
  -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;

export const TableHead = styled.thead`
  color: white;
  background-color: #008b8b;
`;

export const TableBody = styled.tbody`
  width: 360px;
`;

export const TH = styled.th`
  font-weight: 800;
  /* border: 1px solid black; */
`;

export const TD = styled.td`
  /* width: 100%; */
  /* padding: 20px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 288px;
  height: 60px;
`;

export const TableHeaderRow = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 288px;
  height: 60px;
`;

export const TableRow = styled.td`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-around;
`;
