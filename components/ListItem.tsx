import styled from "styled-components";

const StyledListItem = styled.li`
  background-color: whitesmoke;
  padding: 0.25rem 1rem;
  margin-bottom: 1rem;
`;

const ListItem: React.FC = ({ children }) => (
  <StyledListItem>{children}</StyledListItem>
);

export default ListItem;
