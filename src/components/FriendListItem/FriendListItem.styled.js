import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 70px;
  background-color: azure;
  -webkit-box-shadow: 2px 2px 9px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 2px 2px 9px 0px rgba(66, 68, 90, 1);
  box-shadow: 2px 2px 9px 0px rgba(66, 68, 90, 1);

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => (p.active ? 'green' : 'red')};
`;

// .false {
//   width: 20px;
//   height: 20px;
//   background: green;
// }
export const Name = styled.p`
  margin-left: 20px;
  font-weight: 700;
  font-size: 18px;
`;
export const Image = styled.img`
  width: 100px;
  margin-left: 20px;
`;
