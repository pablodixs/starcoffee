import { MapPin, CurrencyDollarSimple, House } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AmountControl } from "../../components/AmountControls";
import { CartItem } from "../../components/CartItem";

import { HeaderAlt } from "../../components/HeaderAlt";
import { ToggleGroup } from "../../components/ToggleGroup";
import { ProductsContext } from "../../context/productsContext";
import { Container } from "../../styles/global";
import {
  CartMessage,
  CheckoutContainer,
  ConfirmButton,
  Heading,
  InfoContainer,
  InputContainer,
  ItensContainer,
  LastInputContainer,
  ListItensContainer,
  PriceContainer,
  PriceTotalContainer,
  StyledLink,
} from "./styles";

export function Checkout() {
  const { cartItens, totalPrice } = useContext(ProductsContext);

  const totalPriceOfCart = (totalPrice + 3.5).toFixed(2).replace(".", ",");

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
                <MapPin weight="fill" size={"1.25rem"} />
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
                    <input
                      id="adress"
                      type="text"
                      placeholder="Av. das Araucárias"
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <input id="number" type="text" placeholder="125" />
                  </div>
                </InputContainer>
                <LastInputContainer>
                  <div>
                    <label htmlFor="district">Bairro</label>
                    <input
                      id="district"
                      type="text"
                      placeholder="Águas Claras"
                    />
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
                <CurrencyDollarSimple weight="fill" size={"1.25rem"} />
                <div>
                  <h4>Pagamento</h4>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                  <ToggleGroup />
                </div>
              </header>
            </ItensContainer>
          </InfoContainer>
          <ListItensContainer>
            <h3>Produtos selecionados</h3>
            <ItensContainer>
              {cartItens.length > 0 ? (
                <div>
                  {cartItens.map((itens) => {
                    return (
                      <CartItem
                        key={itens.id}
                        id={itens.id}
                        name={itens.name}
                        image={itens.image}
                        price={itens.price}
                        amount={itens.amount}
                      />
                    );
                  })}
                  <PriceContainer>
                    <span>Total de itens</span>
                    <span>R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
                  </PriceContainer>
                  <PriceContainer>
                    <span>Taxa de entrega</span>
                    <span>R$ 3,50</span>
                  </PriceContainer>
                  <PriceTotalContainer>
                    <span>Total</span>
                    <span>R$ {totalPriceOfCart}</span>
                  </PriceTotalContainer>
                  <Link to={'/success'}>
                    <ConfirmButton>
                      Confirmar pedido
                    </ConfirmButton>
                  </Link>
                </div>
              ) : (
                <CartMessage>
                  <h2>Carrinho vazio :(</h2>
                  <p>
                    Volte à página inicial e coloque itens no seu carrinho para
                    continuar.
                  </p>
                  <StyledLink to={"/"}>
                    <House weight="fill" />
                    Voltar à página inicial
                  </StyledLink>
                </CartMessage>
              )}
            </ItensContainer>
          </ListItensContainer>
        </CheckoutContainer>
      </Container>
    </>
  );
}
