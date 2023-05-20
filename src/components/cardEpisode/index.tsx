import { Button } from "antd";
import { CardContainer, Container } from "./styles";

interface CardsProps {
  cards: Array<CardItensProps>
}

interface CardItensProps {
  id: string,
  img: string,
  title: string,
  epTitle: string
  epNumber: string,
  seasonNumber: string,
}

export default function CardEpisode({ cards }: CardsProps) {
  
  if (!cards.some(card => card.seasonNumber && card.epNumber && card.img)) {
    return (
      <Container>
        <h2>Episodes</h2>
        <span>Episodes not available.</span>
      </Container>
    )
  };

  return (
    <Container>
      <h2>Episodes</h2>

      <CardContainer>
        {cards.map(card => card.seasonNumber && card.epNumber && card.img && (
          <li className="card-episode" key={card.id}>

            <figure>
              <img src={card.img} alt="" />

              <figcaption>{card.title}</figcaption>
            </figure>

            <div className='card-episode-footer'>
              <span>{card.seasonNumber} x {card.epNumber} - {card.epTitle}</span>

              <Button type="primary">Detalhes</Button>
            </div>
          </li>
        ))}
      </CardContainer>
    </Container>

  )
}