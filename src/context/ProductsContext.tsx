import { createContext, ReactNode, useState } from "react";
import { produce } from 'immer'

export const ProductsContext = createContext({} as ProductContextyType)

interface CoffeeProps {
  name: string
  image: string
  price: number
  amount: number
}

interface ProductContextyType {
  cartItens: CoffeeProps[]
  cartAmount: number
  addToCart: (coffeeData: CoffeeProps) => void
}

interface ProductContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({ children }: ProductContextProviderProps) {
  const [cartItens, setCartItens] = useState<CoffeeProps[]>([])
  const cartAmount = cartItens.length
  
  function addToCart(coffeeData: CoffeeProps) {
    const hasProductInCartAlready = cartItens.findIndex((cartItens) => cartItens.name === coffeeData.name)

    const newCart = produce(cartItens, (draft) => {
      if (hasProductInCartAlready < 0) {
        draft.push(coffeeData)
      } else {
        draft[hasProductInCartAlready].amount += coffeeData.amount
      }
    })

    setCartItens(newCart)
  }

  console.log(cartItens)  

  return (
    <ProductsContext.Provider value={{ cartItens, cartAmount, addToCart }}>
      {children}
    </ProductsContext.Provider> 
  )
}