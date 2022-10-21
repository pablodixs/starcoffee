import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import { AmountControl } from "../AmountControls";
import { CatalogItemContainer, ButtonQuant, CartButton, Tag, Description } from "./styles";

interface ItensProps {
  id: number
  name: string
  image: string
  price: number
  description: string
  tags: string[]
}

interface CoffeeProps {
  coffeeData: ItensProps
}

export function CatalogItem({ coffeeData }: CoffeeProps) {
  const [amount, setAmount] = useState(1)
  
  const { addToCart } = useContext(ProductsContext)

  function handleIncreaseAmount() {
    setAmount(state => state + 1)
  }

  function handleDecreaseAmount() {
    setAmount(state => state - 1)
  }

  function handleAddToCart() {
    const toAddProduct = {
      ...coffeeData,
      amount,
    }
    addToCart(toAddProduct)
  }

  return (
    <CatalogItemContainer>
      <img src={coffeeData.image} alt="" />
      <h3>{coffeeData.name}</h3>
      <div>
        {coffeeData.tags.map(tags => <Tag key={tags}>{tags}</Tag>)}
      </div>
      <Description>{coffeeData.description}</Description>
      <h4>R$ {coffeeData.price.toFixed(2).replace('.',',')}</h4>
      <AmountControl 
          amount={amount}
          handleAddToCart={handleAddToCart} 
          handleDecreaseAmount={handleDecreaseAmount} 
          handleIncreaseAmount={handleIncreaseAmount}
        />
    </CatalogItemContainer>
  );
}
