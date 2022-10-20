import { products } from "../../services/products";
import { Container } from "../../styles/global";
import { CatalogItem } from "../CatalogItem";
import { CatalogContainer } from "./styles";

export function Catalog() {
  return (
    <Container>
      <h1>Nossos cafés</h1>
      <CatalogContainer>
        {products.map((product) => {
          return (
            <CatalogItem
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              tags={product.tags}
            />
          )
        })}
      </CatalogContainer>
    </Container>
  )
}