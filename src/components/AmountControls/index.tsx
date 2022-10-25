import { ShoppingCart } from "phosphor-react";

import { ButtonQuant, CartButton } from "../CatalogItem/styles";

interface AmountControlProps {
  amount: number;
  handleDecreaseAmount: () => void;
  handleIncreaseAmount: () => void;
  handleAddToCart: () => void;
}

export function AmountControl({
  amount,
  handleAddToCart,
  handleDecreaseAmount,
  handleIncreaseAmount,
}: AmountControlProps) {
  return (
    <div>
      <div>
        <ButtonQuant onClick={handleDecreaseAmount} disabled={amount <= 1}>
          -
        </ButtonQuant>
        <input type="number" readOnly value={amount} />
        <ButtonQuant onClick={handleIncreaseAmount}>+</ButtonQuant>
      </div>
      <CartButton title="Adicionar ao carrinho">
        <ShoppingCart
          onClick={handleAddToCart}
          size={"1.125rem"}
          weight="fill"
        />
      </CartButton>
    </div>
  );
}
