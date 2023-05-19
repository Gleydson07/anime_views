import React from 'react';
import Card from '@/components/card';
import Header from '@/components/header';
import { Container } from '@/styles/grid';
import { ContainerHome } from './styles';
import Banner from '@/components/banner';
import { GetStaticProps } from 'next';

const cardsItens = [
  {
    id: '1',
    img: "https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg",
    title: "Dragon Ball Gt",
    slug: "Dragon-ball-gt",
  },
  {
    id: '2',
    img: "	https://image.tmdb.org/t/p/original/vj0alCBuOutq55ZhmlLwEkalZpR.jpg",
    title: "Dragon's Dogma",
    slug: "dragon-s-dogma",
  },
  {
    id: '3',
    img: "	https://image.tmdb.org/t/p/original/vj0alCBuOutq55ZhmlLwEkalZpR.jpg",
    title: "Dragon's Dogma",
    slug: "dragon-s-dogma",
  },
  {
    id: '4',
    img: "https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg",
    title: "Dragon Ball Gt",
    slug: "Dragon-ball-gt",
  },
  {
    id: '5',
    img: "	https://image.tmdb.org/t/p/original/vj0alCBuOutq55ZhmlLwEkalZpR.jpg",
    title: "Dragon's Dogma",
    slug: "dragon-s-dogma",
  },
  {
    id: '6',
    img: "https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg",
    title: "Dragon Ball Gt",
    slug: "Dragon-ball-gt",
  },
  {
    id: '7',
    img: "https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg",
    title: "Dragon Ball Gt",
    slug: "Dragon-ball-gt",
  },
  {
    id: '8',
    img: "	https://image.tmdb.org/t/p/original/vj0alCBuOutq55ZhmlLwEkalZpR.jpg",
    title: "Dragon's Dogma",
    slug: "dragon-s-dogma",
  },
  {
    id: '9',
    img: "https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg",
    title: "Dragon Ball Gt",
    slug: "Dragon-ball-gt",
  },
]

export default function Home() {

  return (
    <ContainerHome>
      <Banner description='imagem de fundo com varios desenhos de animes' />
      <Container>
        <Card cards={cardsItens} />
      </Container>
    </ContainerHome>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    revalidate: 60 * 60 * 24, // 24 hours
    props: {}
  }
}
