import Link from "next/link";
import { CardContainer } from "./styles";

interface CardsProps {
  cards: Array<CardItensProps>
}

interface CardItensProps {
  id: string,
  img: string,
  title: string,
}

export default function Card({ cards }: CardsProps) {
  return (
    <CardContainer>
      {cards.map(card => (
        <li key={card.id}>
            <article>
              <Link href={`/details/${card.id}`}>
                <figure className="card-header">
                  <img src={card.img} alt={card.title}/>
                </figure>
              </Link>

              <div className="card-content">
                <h2>{card.title}</h2>
              </div>
            </article>
          </li>
      ))}
    </CardContainer>

  )
}