import { HeaderAlt } from "../../components/HeaderAlt";
import { Container } from "../../styles/global";
import { AdressContainer, CheckoutContainer, InfoContainer, ListItensContainer } from "./styles";

export function Checkout() {
  return (
    <>
      <HeaderAlt />
      <Container>
        <h1>Checkout</h1>
        <CheckoutContainer>
          <InfoContainer>
            <h3>Complete seu pedido</h3>
            <AdressContainer>
              Testing
            </AdressContainer>
          </InfoContainer>
          <ListItensContainer>
            <h3>Produtos selecionados</h3>
          </ListItensContainer>
        </CheckoutContainer>
      </Container>
    </>
  )
}