import styled from "styled-components"

export const CatalogItemContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background-color: ${props => props.theme["grey-100"]};
padding: 4.5rem 1rem 1rem 1rem;
border-radius: 8px;
position: relative;
width: calc(25% - .5rem);
margin-bottom: 1rem;

img {
  width: 5rem;
  top: -1rem;
  position: absolute;
}

h3 {
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${props => props.theme["grey-500"]}
}

h4 {
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme["green-900"]};
  margin-bottom: 1rem;
}

div {
  display: flex;
  align-items: center;
  gap: .5rem;

  div {
    height: 2.125rem;
    padding: 0.375rem;
    border-radius: 5rem;
    background: grey;
    background-color: ${props => props.theme["brown-100"]};

    input {
      width: 3rem;
      text-align: center;
      border: none;
      border-radius: 3px;
      font-size: 1rem;
      background-color: transparent;
      outline: none;
  }
  }
}
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme["grey-300"]};
`

export const Tag = styled.span`
  background-color: ${props => props.theme["green-100"]};
  padding: .2rem .7rem;
  color: ${props => props.theme["green-900"]};
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: .5px;
  text-transform: uppercase;
  margin: .5rem 0;
  border-radius: 5rem;
`

export const ButtonQuant = styled.button`
border: none;
width: 1.5rem;
height: 1.5rem;
border-radius: 5rem;
background-color: ${props => props.theme["grey-500"]};
color: ${props => props.theme.white};
font-weight: 600;
cursor: pointer;
transition: all ease 100ms;

&:hover {
  background-color: ${props => props.theme["grey-300"]};
  color: ${props => props.theme.white};
}
`

export const CartButton = styled.button`
background-color: ${props => props.theme["grey-500"]};
border: none;
border-radius: 5rem;
padding: .5rem;
display: flex;
align-items: center;
justify-content: center;
transition: all ease 100ms;
cursor: pointer;

&:hover {
  background-color: ${props => props.theme["grey-300"]};
}

svg {
  fill: ${props => props.theme.white};
}
`