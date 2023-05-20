import { Button, Modal } from "antd";
import { CardContainer, Container } from "./styles";
import { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEpidode, setIsEpidode] = useState("");

  if (!cards.some(card => card.seasonNumber && card.epNumber && card.img)) {
    return (
      <Container>
        <h2>Episodes</h2>
        <span>Episodes not available.</span>
      </Container>
    )
  };

  const showModal = (titleEp: string) => {
    setIsModalOpen(true);
    setIsEpidode(titleEp);
  };

  const handleCLose = () => {
    setIsModalOpen(false);
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

              <Button type="primary" onClick={() => showModal(card.title)}>Detalhes</Button>
            </div>
          </li>
        ))}
      </CardContainer>

      <Modal title={isEpidode} open={isModalOpen} onCancel={handleCLose} centered footer={false} width='50%' destroyOnClose={true}>
        <h1>todo o conteudo do episodio</h1>
      </Modal>
    </Container>

  )
}