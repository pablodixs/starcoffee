import { MapPin, ShoppingCart } from "phosphor-react";
import { FlexContainer } from "../../styles/global";
import { HeaderContainer, Logo, OptionsContainer, PrimaryA, SecondaryA } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <FlexContainer>
        <Logo />
        <OptionsContainer>
          <SecondaryA href="#">
            <MapPin size={'1.125rem'} weight="fill" /> Brasília, DF
          </SecondaryA>
          <PrimaryA href="#">
            <ShoppingCart size={'1.25rem'} weight="fill" />
          </PrimaryA>
        </OptionsContainer>
      </FlexContainer>
    </HeaderContainer>
  )
}