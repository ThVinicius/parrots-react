import { Container, Face, BackFace } from './style'
import front from '../../assets/images/front.png'

const resetCard = game => {
  game.logic.card1.id = undefined
  game.logic.card2.id = undefined
  game.logic.card1.index = undefined
  game.logic.card2.index = undefined
}

const storage = (id, index, game) => {
  if (game.logic.card1.id === undefined) {
    game.logic.card1 = { id: id, index: index }
  } else {
    game.logic.card2 = { id: id, index: index }
  }
}

const compare = (game, setGame) => {
  if (game.logic.card1.id !== game.logic.card2.id) {
    setTimeout(() => {
      game.cards[game.logic.card1.index].flip = false
      game.cards[game.logic.card2.index].flip = false

      resetCard(game)

      setGame({ ...game })
    }, 1000)
  } else {
    resetCard(game)
  }
}

export default function Card({ card, index, game, setGame }) {
  const flip = () => {
    if (game.logic.card2.id !== undefined || game.cards[index].flip === true) {
      return
    }

    game.cards[index].flip = true
    setGame({ ...game })

    if (game.logic.card1.id === undefined) {
      storage(card.id, index, game)
      // setGame({ ...game })
    } else {
      storage(card.id, index, game)
      compare(game, setGame)
    }

    // storage(card.id, index, game)
    // if (game.logic.card2.id !== undefined) compare(game, setGame)

    // setGame({ ...game })
  }

  const state = () => {
    if (card.flip === false) return 'rotateY(0deg)'
    return 'rotateY(180deg)'
  }

  return (
    <Container flip={state()} onClick={flip}>
      <Face>
        <img src={front} alt="papagaio" />
      </Face>
      <BackFace>
        <img src={card.image} alt={card.image} />
      </BackFace>
    </Container>
  )
}
