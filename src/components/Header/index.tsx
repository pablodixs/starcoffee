import { useContext } from "react";
import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { ProductsContext } from "../../context/productsContext";
import { FlexContainer } from "../../styles/global";

import {
  Badge,
  CartButton,
  HeaderContainer,
  Logo,
  OptionsContainer,
  PrimaryA,
  SecondaryA,
} from "./styles";

export function Header() {
  const { cartAmount } = useContext(ProductsContext);

  return (
    <HeaderContainer>
      <FlexContainer>
        <Logo />
        <OptionsContainer>
          <SecondaryA href="#">
            <MapPin size={"1.125rem"} weight="fill" /> Brasília, DF
          </SecondaryA>
          <Link to={"/checkout"}>
            <CartButton>
              <ShoppingCart size={"1.25rem"} weight="fill" />
              {cartAmount > 0 && <Badge>{cartAmount}</Badge>}
            </CartButton>
          </Link>
        </OptionsContainer>
      </FlexContainer>
    </HeaderContainer>
  );
}
