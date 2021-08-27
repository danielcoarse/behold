import Image from "next/image";
import Link from "next/link";
import { StyledLogoLink, StyledLogoTitle } from "./Logo.components";

const Logo = () => (
  <Link href={"/"} passHref>
    <StyledLogoLink>
      <Image
        src="/logo.png"
        alt="Logo"
        layout="intrinsic"
        width={50}
        height={50}
        placeholder="blur"
        blurDataURL="/logo.png"
      />
      <StyledLogoTitle>Behold</StyledLogoTitle>
    </StyledLogoLink>
  </Link>
);

export default Logo;
