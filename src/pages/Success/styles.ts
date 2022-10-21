import styled from "styled-components";

export const Heading = styled.h1`
  margin-top: 3rem;
  color: ${props => props.theme["grey-500"]};
  text-transform: uppercase;
`

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40%;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  span {
    color: ${props => props.theme["grey-300"]};
  }

  strong {
    font-weight: 600;
    color: ${props => props.theme["grey-500"]};
  }

  svg {
    fill: ${props => props.theme["green-900"]};
    margin-right: 1rem;
  }
`