import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mukta', sans-serif;
    color: ${props => props.theme.black};
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  margin: 0 auto;
`