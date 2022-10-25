import { ToggleContainer, ToggleItem } from "./styles";

export function ToggleGroup() {
  return (
    <ToggleContainer type="single">
      <ToggleItem value="money">
        Dinheiro
      </ToggleItem>
      <ToggleItem value="credit">
        Cartão de Crédito
      </ToggleItem>
      <ToggleItem value="debit">
        Cartão de Débito
      </ToggleItem>
    </ToggleContainer>
  )
}