import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { AmountControl } from "../AmountControls";
import { ButtonQuant } from "../CatalogItem/styles";
import { ItemCard } from "./styles";

interface CartItensProps {
  id: number
  name: string
  image: string
  price: number
  amount: number
}

export function CartItem({id, name, image, price, amount}: CartItensProps) {
  const { changeCartItemAmount } = useContext(ProductsContext)

  const totalPrice = (price * amount).toFixed(2).replace('.',',')

  function handleAddToCart() {
    changeCartItemAmount(id, "add")
  }

  function handleRemoveFromCart() {
    changeCartItemAmount(id, "remove")
  }

  return (
    <ItemCard>
      <img src={image} />
      <div>
        <h4>{name}</h4>
        <ButtonQuant onClick={handleAddToCart} disabled={amount <= 1}>-</ButtonQuant>
        <input type="number" readOnly value={amount} />
        <ButtonQuant onClick={handleRemoveFromCart}>+</ButtonQuant>
      </div>
      <h4>R$ {totalPrice}</h4>
    </ItemCard>
  )
}