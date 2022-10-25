import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItem";
import { MapPin, CurrencyDollarSimple, House } from "phosphor-react";

import { HeaderAlt } from "../../components/HeaderAlt";
import { ToggleGroup } from "../../components/ToggleGroup";
import { ProductsContext } from "../../context/productsContext";

import { Container } from "../../styles/global";
import {
  ButtonHome,
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
  StyledInput,
} from "./styles";

export function Checkout() {
  const { register, handleSubmit } = useForm();
  const { cartItens, totalPrice, paymentMethod, getUserAddress } =
    useContext(ProductsContext);

  const allowButton = paymentMethod != "";

  const navigate = useNavigate();

  function onSubmitForm(data: any) {
    getUserAddress(data);
    navigate("/success");
  }

  const totalPriceOfCart = (totalPrice + 3.5).toFixed(2).replace(".", ",");

  return (
    <>
      <HeaderAlt />
      <Container>
        <Heading>Checkout</Heading>
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
                <InputContainer>
                  <div>
                    <label htmlFor="cep">CEP</label>
                    <StyledInput id="cep" type="text" placeholder="00000-000" />
                  </div>
                </InputContainer>
                <InputContainer>
                  <div>
                    <label htmlFor="adress">Logradouro</label>
                    <StyledInput
                      id="adress"
                      type="text"
                      placeholder="Av. das Araucárias"
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="number">Número</label>
                    <StyledInput
                      id="number"
                      type="text"
                      placeholder="125"
                      {...register("number", { required: true })}
                    />
                  </div>
                </InputContainer>
                <LastInputContainer>
                  <div>
                    <label htmlFor="district">Bairro</label>
                    <StyledInput
                      id="district"
                      type="text"
                      placeholder="Águas Claras"
                      {...register("district", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="city">Cidade</label>
                    <StyledInput
                      id="city"
                      type="text"
                      placeholder="Brasília"
                      {...register("city", { required: true })}
                    />
                  </div>
                  <div>
                    <label htmlFor="UF">UF</label>
                    <StyledInput
                      id="UF"
                      type="text"
                      placeholder="Distrito Federal"
                      {...register("UF", { required: true })}
                    />
                  </div>
                </LastInputContainer>
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
                    <ConfirmButton type="submit" disabled={!allowButton}>
                      Confirmar pedido
                    </ConfirmButton>
                  </div>
                ) : (
                  <CartMessage>
                    <h2>Carrinho vazio :(</h2>
                    <p>
                      Volte à página inicial e coloque itens no seu carrinho
                      para continuar.
                    </p>
                    <ButtonHome to={"/"}>
                      <House weight="fill" />
                      Voltar à página inicial
                    </ButtonHome>
                  </CartMessage>
                )}
              </ItensContainer>
            </ListItensContainer>
          </CheckoutContainer>
        </form>
      </Container>
    </>
  );
}
