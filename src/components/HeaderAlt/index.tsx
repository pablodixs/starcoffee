import { Link } from "react-router-dom";

import { Logo } from "../Header/styles";

import { HeaderContainer } from "./styles";

export function HeaderAlt() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
    </HeaderContainer>
  );
}
