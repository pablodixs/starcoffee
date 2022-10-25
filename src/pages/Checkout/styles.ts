import { Link } from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.h1`
  color: ${(props) => props.theme["grey-500"]};
  text-transform: uppercase;

  &::after {
    content: "";
    display: block;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme["grey-100"]};
    margin-top: 1rem;
  }
`;

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const InfoContainer = styled.section`
  flex: 1;

  h3 {
    font-weight: 500;
  }
`;

export const ItensContainer = styled.div`
  background-color: ${(props) => props.theme["green-100"]};
  padding: 1rem 1.125rem;
  margin: 1rem 0;
  border-radius: 8px;

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;

    svg {
      fill: ${(props) => props.theme["grey-500"]};
    }

    h4 {
      font-weight: 600;
      line-height: 140%;
      color: ${(props) => props.theme["grey-500"]};
    }

    p {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  label {
    font-size: 0.875rem;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme["green-500"]};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: calc(50% - 0.5rem);

    input {
      width: 100%;
    }
  }
`;

export const LastInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    width: 33, 33%;
  }
`;

export const ListItensContainer = styled.section`
  width: 35%;

  h3 {
    font-weight: 500;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5rem;
  background-color: ${(props) => props.theme["green-500"]};
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.white};
  transition: all ease 100ms;
  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme["green-900"]};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${(props) => props.theme["green-900"]};
  }
`;

export const CartMessage = styled.div`
  text-align: center;
  margin: 1rem;

  p {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  transition: all ease 100ms;

  &:hover {
    background-color: ${(props) => props.theme["green-900"]};
  }

  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const ButtonHome = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  border-radius: 5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["white"]};
  transition: all ease 100ms;

  &:hover {
    background-color: ${(props) => props.theme["green-900"]};
  }

  svg {
    fill: ${(props) => props.theme.white};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-weight: 500;
    font-size: 0.875rem;

    &:last-child {
      font-size: 1rem;
    }
  }
`;

export const PriceTotalContainer = styled(PriceContainer)`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;

  span {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;

    &:last-child {
      font-size: 1.25rem;
    }
  }
`;
