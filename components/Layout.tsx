import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import { StyledMain } from "./StyledComponents";

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </Container>
);

export default Layout;
