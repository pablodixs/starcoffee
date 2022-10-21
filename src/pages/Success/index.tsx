import { CurrencyCircleDollar, House, MapPinLine, Timer } from "phosphor-react";

import { HeaderAlt } from "../../components/HeaderAlt";
import { Container } from "../../styles/global";
import { Heading, ItemContainer, SuccessContainer } from "./styles";

import successImage from "../../assets/illustration.png";
import { StyledLink } from "../Checkout/styles";

export function Success() {
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
              <span>
                Entrega em{" "}
                <strong>
                  Rua João Daniel Martinelli, 102 <br></br> Farrapos - Porto
                  Alegre, RS
                </strong>
              </span>
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
                Pagamento na entrega: <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </ItemContainer>
          <StyledLink to={"/"}>
            <House weight="fill" />
            Voltar à página inicial
          </StyledLink>
        </div>
        <img src={successImage} />
      </SuccessContainer>
    </Container>
  );
}
