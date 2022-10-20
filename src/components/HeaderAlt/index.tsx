import { Link } from "react-router-dom";
import { FlexContainer } from "../../styles/global";
import { Logo } from "../Header/styles";
import { HeaderContainer } from "./styles";

export function HeaderAlt() {
  return (
    <HeaderContainer>
      <FlexContainer>
        <Link to={'/'}>
          <Logo />
        </Link>
      </FlexContainer>
    </HeaderContainer>
  )
}