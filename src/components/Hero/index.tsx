import { ShoppingCart, Package, Timer } from 'phosphor-react'

import heroImage from '../../assets/hero.png'

import { GridHighlights, HeroBase, HeroContainer, HeroHeading, HighlightContainer } from './styles'

export function Hero() {
  return(
    <HeroBase>
      <HeroContainer>
        <div>
          <HeroHeading>Encontre o café perfeito <br></br> para qualquer hora do dia</HeroHeading>
          <h3>Com o delivery da Starcoffee você recebe seu café onde estiver, a qualquer hora</h3>
          <GridHighlights>
            <HighlightContainer>
              <span><ShoppingCart size={'1.125rem'} weight={'fill'} /></span>
              <p>Compra simples e segura</p>
            </HighlightContainer>
            <HighlightContainer>
              <span><Package size={'1.125rem'} weight={'fill'} /></span>
              <p>Embalagem mantém o café intacto</p>
            </HighlightContainer>
            <HighlightContainer>
              <span><Timer size={'1.125rem'} weight={'fill'} /></span>
              <p>Entrega rápida e rastreada</p>
            </HighlightContainer>
            <HighlightContainer>
              <span><ShoppingCart size={'1.125rem'} weight={'fill'} /></span>
              <p>O café chega fresquinho até você</p>
            </HighlightContainer>
          </GridHighlights>
        </div>
          <img src={heroImage} alt="Imagem com um frapputino de morango à direita." />
      </HeroContainer>
    </HeroBase>

  )
}