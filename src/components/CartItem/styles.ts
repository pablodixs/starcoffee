import styled from "styled-components";

export const ItemCard = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  padding: .5rem;
  display: flex;
  gap: .5rem;
  margin-bottom: 1rem;

  img {
    width: 50px;
  }

  h4 {
    font-weight: 600;
  }
`