import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";

interface CoffeeProps {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
}

export interface AddressDataProps {
  address: string;
  number: string;
  city: string;
  district: string;
  UF: string;
}

interface ProductContextyType {
  cartItens: CoffeeProps[];
  cartAmount: number;
  totalPrice: number;
  paymentMethod: string;
  addressData: any;
  addToCart: (coffeeData: CoffeeProps) => void;
  changeCartItemAmount: (CartItemID: number, type: "add" | "remove") => void;
  removeProductFromCart: (CartItemID: number) => void;
  getUserAddress: (data: any) => void;
  selectPaymentMethod: (value: string) => void;
}

interface ProductContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductContextyType);

export function ProductsContextProvider({
  children,
}: ProductContextProviderProps) {
  const [cartItens, setCartItens] = useState<CoffeeProps[]>(() => {
    const productsOnCart = localStorage.getItem("@starcoffe:cart-itens-1.0.0");

    if (productsOnCart) {
      return JSON.parse(productsOnCart);
    }

    return [];
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [addressData, setAddressData] = useState();

  const cartAmount = cartItens.length;

  const totalPrice = cartItens.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amount;
  }, 0);

  function addToCart(coffeeData: CoffeeProps) {
    const hasProductInCartAlready = cartItens.findIndex(
      (cartItens) => cartItens.name === coffeeData.name
    );

    const refreshedCart = produce(cartItens, (draft) => {
      if (hasProductInCartAlready < 0) {
        draft.push(coffeeData);
      } else {
        draft[hasProductInCartAlready].amount += coffeeData.amount;
      }
    });

    setCartItens(refreshedCart);
  }

  function changeCartItemAmount(CartItemID: number, type: "add" | "remove") {
    const refreshedCart = produce(cartItens, (draft) => {
      const productIsAlreadyInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === CartItemID
      );

      if (productIsAlreadyInCart >= 0) {
        const productItem = draft[productIsAlreadyInCart];

        draft[productIsAlreadyInCart].amount =
          type === "add" ? productItem.amount + 1 : productItem.amount - 1;
      }
    });

    setCartItens(refreshedCart);
  }

  function removeProductFromCart(CartItemID: number) {
    const refreshedCart = produce(cartItens, (draft) => {
      const productIsAlreadyInCart = cartItens.findIndex(
        (cartItem) => cartItem.id === CartItemID
      );

      if (productIsAlreadyInCart >= 0) {
        draft.splice(productIsAlreadyInCart, 1);
      }
    });

    setCartItens(refreshedCart);
  }

  function selectPaymentMethod(value: string) {
    setPaymentMethod(value);
  }

  function getUserAddress(data: any) {
    setAddressData(data);
  }

  useEffect(() => {
    localStorage.setItem(
      "@starcoffe:cart-itens-1.0.0",
      JSON.stringify(cartItens)
    );
  }, [cartItens]);

  return (
    <ProductsContext.Provider
      value={{
        cartItens,
        cartAmount,
        totalPrice,
        addToCart,
        addressData,
        paymentMethod,
        changeCartItemAmount,
        removeProductFromCart,
        selectPaymentMethod,
        getUserAddress,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
