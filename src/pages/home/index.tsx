import React from 'react';
import Card from '@/components/card';
import { Container } from '@/styles/grid';
import { ContainerHome } from './styles';
import Banner from '@/components/banner';

export default function Home({animes}: any) {

  return (
    <ContainerHome>
      <Banner description='imagem de fundo com varios desenhos de animes.' />
      <Container>
        <Card cards={animes} />
      </Container>
    </ContainerHome>
  )
}