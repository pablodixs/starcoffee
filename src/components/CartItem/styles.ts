import styled from "styled-components";
import { ButtonQuant } from "../CatalogItem/styles";

export const ItemCard = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin-bottom: 1rem;

  img {
    object-fit: contain;
    width: 3.125rem;
  }

  h4 {
    font-weight: 500;
  }

  div {
    flex: 1;

    div {
      display: flex;
      align-items: center;
      gap: .5rem;
      margin-top: .5rem;

      input {
        width: 1.5rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        border: none;

        &:focus {
          outline: none;
        }
      }
    }
  }
`

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.theme["grey-500"]};
  padding: 4px 8px;
  border-radius: 5rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: .5rem;
  transition: all ease 100ms;

  &:hover {
    background-color: ${props => props.theme["grey-100"]};
  }

  svg {
    fill: ${props => props.theme["grey-500"]};
  }
`

export const StyledButtonQuant = styled(ButtonQuant)`
  width: 1.25rem;
  height: 1.25rem;
`