import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return <StyledFooter>Behold © 2021</StyledFooter>;
};

export default Footer;
