import { useState } from 'react'
import { Container, Content } from './style'
import Card from '../Card/Card'
import bobrossparrot from '../../assets/images/bobrossparrot.gif'
import explodyparrot from '../../assets/images/explodyparrot.gif'
import fiestaparrot from '../../assets/images/fiestaparrot.gif'
import metalparrot from '../../assets/images/metalparrot.gif'
import revertitparrot from '../../assets/images/revertitparrot.gif'
import tripletsparrot from '../../assets/images/tripletsparrot.gif'
import unicornparrot from '../../assets/images/unicornparrot.gif'

const comparador = () => {
  return Math.random() - 0.5
}

const backFace = [
  bobrossparrot,
  explodyparrot,
  fiestaparrot,
  metalparrot,
  revertitparrot,
  tripletsparrot,
  unicornparrot
]

const imageGame = num => {
  const arrayGame = []
  backFace.sort(comparador)
  for (let i = 0; i < num; i++) {
    arrayGame.push({ id: i, image: backFace[i], flip: false })
    arrayGame.push({ id: i, image: backFace[i], flip: false })
  }
  return arrayGame.sort(comparador)
}

export default function GameScreen() {
  const num = 4
  const [game, setGame] = useState({
    cards: imageGame(num),
    logic: {
      card1: { id: undefined, index: undefined },
      card2: { id: undefined, index: undefined }
    }
  })
  console.log(game)
  console.log(game)
  return (
    <Container>
      <div>
        <h1>PARROT CARD GAME</h1>
        <Content>
          {game.cards.map((item, index) => (
            <Card
              key={index}
              card={item}
              game={game}
              setGame={setGame}
              index={index}
            />
          ))}
        </Content>
      </div>
    </Container>
  )
}
