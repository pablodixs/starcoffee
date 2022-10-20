import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const InfoContainer = styled.section`
  flex: 1;

  h3 {
    font-weight: 500;
    margin-left: 1rem;
  }
`

export const AdressContainer = styled.div`
  background-color: ${props => props.theme["grey-100"]};
  padding: 1rem;
  margin: .5rem 0;
  border-radius: 8px;
`

export const ListItensContainer = styled.section`
  width: 30%;
`