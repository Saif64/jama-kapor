import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Super Deal!!! Buy our products now!!!</Container>;
};

export default Announcement;
