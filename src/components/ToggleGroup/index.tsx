import { useContext } from "react";

import { ProductsContext } from "../../context/productsContext";

import { ToggleContainer, ToggleItem } from "./styles";

export function ToggleGroup() {
  const { selectPaymentMethod } = useContext(ProductsContext);

  function handlePaymentMethod(value: string) {
    selectPaymentMethod(value);
    console.log(value);
  }

  return (
    <ToggleContainer
      onValueChange={(value) => handlePaymentMethod(value)}
      type="single"
    >
      <ToggleItem value="Dinheiro">Dinheiro</ToggleItem>
      <ToggleItem value="Cartão de Crédito">Cartão de Crédito</ToggleItem>
      <ToggleItem value="Cartão de Débito">Cartão de Débito</ToggleItem>
    </ToggleContainer>
  );
}
