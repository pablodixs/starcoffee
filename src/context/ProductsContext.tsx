import { createContext, ReactNode, useState } from "react";
import { produce } from "immer";

export const ProductsContext = createContext({} as ProductContextyType);

interface CoffeeProps {
  id: number
  name: string;
  image: string;
  price: number;
  amount: number;
}

interface ProductContextyType {
  cartItens: CoffeeProps[];
  cartAmount: number;
  addToCart: (coffeeData: CoffeeProps) => void;
  changeCartItemAmount: (CartItemID: number, type: "add" | "remove") => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductContextProviderProps) {
  const [cartItens, setCartItens] = useState<CoffeeProps[]>([]);

  const cartAmount = cartItens.length;

  function addToCart(coffeeData: CoffeeProps) {
    const hasProductInCartAlready = cartItens.findIndex(
      (cartItens) => cartItens.name === coffeeData.name
    );

    const newCart = produce(cartItens, (draft) => {
      if (hasProductInCartAlready < 0) {
        draft.push(coffeeData);
      } else {
        draft[hasProductInCartAlready].amount += coffeeData.amount;
      }
    });

    setCartItens(newCart);
  }

  function changeCartItemAmount(CartItemID: number, type: "add" | "remove") {
    const newCart = produce(cartItens, (draft) => {
      const productIsAlreadyInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === CartItemID
      );

      if (productIsAlreadyInCart >= 0) {
        const productItem = draft[productIsAlreadyInCart];

        draft[productIsAlreadyInCart].amount =
          type === "add" ? productItem.amount + 1 : productItem.amount - 1;
      }
    });

    setCartItens(newCart);
  }

  console.log(cartItens);

  return (
    <ProductsContext.Provider
      value={{ cartItens, cartAmount, addToCart, changeCartItemAmount }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
