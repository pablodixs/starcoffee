import { ShoppingCart } from "phosphor-react";
import { CatalogItemContainer, ButtonQuant, CartButton, Tag, Description } from "./styles";

interface ItensProps {
  name: string
  image: string
  price: number
  description: string
  tags: string[]
}

export function CatalogItem({price, image, name, description, tags}: ItensProps) {
  return (
    <CatalogItemContainer>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div>
        {tags.map(tags => <Tag key={tags}>{tags}</Tag>)}
      </div>
      <Description>{description}</Description>
      <h4>R$ {price.toFixed(2).replace('.',',')}</h4>
      <div>
        <div>
          <ButtonQuant>-</ButtonQuant>
          <input type="number" defaultValue={1} />
          <ButtonQuant>+</ButtonQuant>
        </div>
        <CartButton title="Adicionar ao carrinho">
          <ShoppingCart size={"1.125rem"} weight="fill" />
        </CartButton>
      </div>
    </CatalogItemContainer>
  );
}
