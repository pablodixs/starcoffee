import { TrashSimple } from "phosphor-react";
import { useContext } from "react";

import { ProductsContext } from "../../context/ProductsContext";

import { ItemCard, RemoveButton, StyledButtonQuant } from "./styles";

interface CartItensProps {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export function CartItem({ id, name, image, price, amount }: CartItensProps) {
  const { changeCartItemAmount, removeProductFromCart } =
    useContext(ProductsContext);

  const totalPrice = (price * amount).toFixed(2).replace(".", ",");

  function handleAddToCart() {
    changeCartItemAmount(id, "add");
  }

  function handleRemoveFromCart() {
    changeCartItemAmount(id, "remove");
  }

  function handleRemoveItemFromCart() {
    removeProductFromCart(id);
  }

  return (
    <ItemCard>
      <img src={image} />
      <div>
        <h4>{name}</h4>
        <div>
          <StyledButtonQuant
            onClick={handleRemoveFromCart}
            disabled={amount <= 1}
          >
            -
          </StyledButtonQuant>
          <input type="number" readOnly value={amount} />
          <StyledButtonQuant onClick={handleAddToCart}>+</StyledButtonQuant>
          <RemoveButton onClick={handleRemoveItemFromCart}>
            <TrashSimple size={"0.875rem"} weight="fill" /> Remover
          </RemoveButton>
        </div>
      </div>
      <h4>R$ {totalPrice}</h4>
    </ItemCard>
  );
}
