import styled from "styled-components";

import logo from '../../assets/logo.svg'

export const Logo = styled.div`
  width: 12rem;
  height: 3rem;
  background: url(${logo}) no-repeat center;
  background-size: contain;
`

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.15); */
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
  font-weight: 600;
  gap: .5rem;
  height: 2.25rem;
  transition: all ease 100ms;
`

export const PrimaryA = styled(BaseA)`
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