import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
