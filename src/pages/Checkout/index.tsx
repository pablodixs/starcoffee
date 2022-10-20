import { MapPin, CurrencyDollarSimple } from "phosphor-react";  
import { useContext } from "react";
import { AmountControl } from "../../components/AmountControls";

import { HeaderAlt } from "../../components/HeaderAlt";
import { ProductsContext } from "../../context/productsContext";
import { Container } from "../../styles/global";
import { 
  CheckoutContainer, 
  ConfirmButton, 
  Heading, 
  InfoContainer, 
  InputContainer, 
  ItemCard, 
  ItensContainer, 
  LastInputContainer, 
  ListItensContainer 
} from "./styles";

export function Checkout() {
  const { cartItens, addToCart } = useContext(ProductsContext)

  return (
    <>
      <HeaderAlt />
      <Container>
        <Heading>Checkout</Heading>
        <CheckoutContainer>
          <InfoContainer>
            <h3>Complete seu pedido</h3>  
            <ItensContainer>
              <header>
                <MapPin weight="fill" size={'1.25rem'} />
                <div>
                  <h4>Endereço de entrega</h4>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </header>
              <form>
                <InputContainer>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <input id="cep" type="text" placeholder="00000-000" />
                  </div>
                </InputContainer>
                <InputContainer>
                  <div>
                    <label htmlFor="adress">Logradouro</label>
                    <input id="adress" type="text" placeholder="Av. das Araucárias" />
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input id="number" type="text" placeholder="125" />
                  </div>
                </InputContainer>
                <LastInputContainer>
                  <div>
                    <label htmlFor="district">Bairro</label>
                    <input id="district" type="text" placeholder="Águas Claras" />
                  </div>
                  <div>
                    <label htmlFor="city">Cidade</label>
                    <input id="city" type="text" placeholder="Brasília" />
                  </div>
                  <div>
                    <label htmlFor="UF">UF</label>
                    <input id="UF" type="text" placeholder="Distrito Federal" />
                  </div>
                </LastInputContainer>
              </form>
            </ItensContainer>
            <ItensContainer>
              <header>
                <CurrencyDollarSimple weight="fill" size={'1.25rem'} />
                <div>
                  <h4>Pagamento</h4>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>
            </ItensContainer>
          </InfoContainer>
          <ListItensContainer>
            <h3>Produtos selecionados</h3>
            <ItensContainer>
              <div>
                {cartItens.map(itens => {
                  return (
                    <ItemCard>
                      <img src={itens.image} />
                      <div>
                        <h4>{itens.name}</h4>

                      </div>
                    </ItemCard>
                  )
                })}
              </div>
              <ConfirmButton>Confirmar pedido</ConfirmButton>
            </ItensContainer>
          </ListItensContainer>
        </CheckoutContainer>
      </Container>
    </>
  )
}