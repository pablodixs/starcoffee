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
          return <CatalogItem key={product.name} coffeeData={product} />;
        })}
      </CatalogContainer>
    </Container>
  );
}
