import Link from "next/link";
import styled from "styled-components";
import Logo from "../components/Logo";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <Logo />
      {router.pathname === "/posts/new" ? (
        <Link href="/">
          <a>Home Page</a>
        </Link>
      ) : (
        <Link href="/posts/new">
          <a>Create New Post</a>
        </Link>
      )}
    </StyledHeader>
  );
};

export default Header;
