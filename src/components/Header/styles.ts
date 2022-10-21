import styled from "styled-components";

import logo from '../../assets/logo.svg'

export const Logo = styled.div`
  width: 12rem;
  height: 3.5rem;
  background: url(${logo}) no-repeat center;
  background-size: contain;
  animation: all ease 100ms;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.white};
  z-index: 1000;
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const BaseA = styled.a`
  display: inline-block;
  border-radius: 5rem;
  text-decoration: none;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: .5rem;
  height: 2.25rem;
  transition: all ease 100ms;
`

export const CartButton = styled.span`
  display: inline-block;
  border-radius: 5rem;
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.25rem;
  transition: all ease 100ms;
  background-color: ${props => props.theme["green-500"]};

  svg {
    /* fill: ${props => props.theme["green-100"]}; */
    fill: #fff;
  }

  &:hover {
    background-color: ${props => props.theme["green-100"]};
    
    svg {
      fill: ${props => props.theme["green-500"]};
    }
  }
`

export const SecondaryA = styled(BaseA)`
  color: ${props => props.theme["green-900"]};

  svg {
    fill: ${props => props.theme["green-500"]};
  }

  &:hover {
    background-color: ${props => props.theme["green-100"]};
  }
`

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 5rem;
  background-color: ${props => props.theme["green-900"]};
  padding: .5rem;
  font-size: 0.875rem;
  color: ${props => props.theme.white};
  top: 0.5rem;
`