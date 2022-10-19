import styled from "styled-components";

export const HeroBase = styled.section`
  background-color: #D4E9E2;
  width: 100%;
  height: 25rem;
`

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1200px;

  img {
    object-fit: contain;
    height: 25rem;
  }
`

export const HeroHeading = styled.h1`
  font-family: 'FreightSans', sans-serif;
  text-transform: uppercase;
  font-size: 2.625rem;
  color: ${props => props.theme["green-900"]};
`

export const GridHighlights = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin-bottom: 1.25rem;
`

export const HighlightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  gap: .5rem;
  width: 50%;

  span {
    width: 32px;
    height: 32px;
    display: inline-block;
    background-color: ${props => props.theme["green-500"]};
    border-radius: 5rem;
    padding: 0.4375rem;

    svg {
      fill: white;
    }
  }

  p {
    display: inline-block;
    font-weight: 700;
    font-size: 1.125rem;
  }
`