import { useContext, useEffect } from "react";
import { CurrencyCircleDollar, House, MapPinLine, Timer } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { HeaderAlt } from "../../components/HeaderAlt";
import { StyledLink } from "../Checkout/styles";
import { ProductsContext } from "../../context/ProductsContext";

import { Container } from "../../styles/global";
import { Heading, ItemContainer, SuccessContainer } from "./styles";

import successImage from "./../../assets/Illustration.png";

export function Success() {
  const { paymentMethod, addressData, cartItens } = useContext(ProductsContext);

  const navigator = useNavigate();

  const hasProductsInCart = cartItens.length === 0;

  useEffect(() => {
    if (hasProductsInCart) {
      navigator("/");
    }
  }, [hasProductsInCart]);

  function handleGoHomeAndClearStorage() {
    localStorage.clear();
    navigator("/");
  }

  return (
    <Container>
      <HeaderAlt />
      <Heading>Uhu! Pedido confirmado</Heading>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <SuccessContainer>
        <div>
          <ItemContainer>
            <MapPinLine size={"1.625rem"} weight={"fill"} />
            <div>
              {!hasProductsInCart ? (
                <span>
                  Entrega em &nbsp;
                  <strong>
                    {addressData.address}, {addressData.number} <br></br>{" "}
                    {addressData.district} - {addressData.city},{" "}
                    {addressData.UF}
                  </strong>
                </span>
              ) : (
                ""
              )}
            </div>
          </ItemContainer>
          <ItemContainer>
            <Timer size={"1.625rem"} weight={"fill"} />
            <div>
              <span>
                Previsão de entrega: <strong>20 a 30 minutos</strong>
              </span>
            </div>
          </ItemContainer>
          <ItemContainer>
            <CurrencyCircleDollar size={"1.625rem"} weight={"fill"} />
            <div>
              <span>
                Pagamento na entrega: <strong>{paymentMethod}</strong>
              </span>
            </div>
          </ItemContainer>
          <StyledLink onClick={handleGoHomeAndClearStorage}>
            <House weight="fill" />
            Voltar à página inicial
          </StyledLink>
        </div>
        <img src={successImage} />
      </SuccessContainer>
    </Container>
  );
}
