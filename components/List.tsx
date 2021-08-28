import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  margin-top: 3rem;
  padding: 0;
`;

const List: React.FC = ({ children }) => <StyledList>{children}</StyledList>;

export default List;
