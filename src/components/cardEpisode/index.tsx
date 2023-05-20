import { Button } from "antd";
import { CardContainer } from "./styles";

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

  return (
    <CardContainer>
      {cards.map(card => (
        <li className="card-episode">

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

  )
}