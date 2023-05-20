import React, { useState } from 'react';
import Card from '@/components/card';
import { Container } from '@/styles/grid';
import { ContainerHome } from './styles';
import Banner from '@/components/banner';
import Header from '@/components/header';
import api from '@/api';
import CardSkeleton from '@/components/skeletons/cardSkeletons';
import toast from '@/utils/toast';
import { AnimeListProps } from '../index.page';

export default function Home({ animes }: AnimeListProps) {
  const [animeList, setAnimeList] = useState(animes);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (value: string) => {
    setIsLoading(true);
    try {
      let params = `filter[text]=${value}&page[limit]=20`;

      if (!value) {
        params = "";
      }

      const {data} = await api.get(`/anime?${params}`);
      const defaultImg = "https://animesflix.net/_theme/img/image-header.jpg";
      
      if (!data.data.length) {
        toast({
          type: "error",
          text: "Nenhum anime encontrado", 
          duration: 5000
        });
        return;
      }
  
      const animes = data.data.map((anime: any) => ({
        id: anime.id,
        title: anime.attributes.canonicalTitle,
        img: anime.attributes.posterImage?.large || defaultImg,
      }))
  
      setAnimeList(animes);
      
    } catch (error) {
      toast({
        type: "error",
        text: "Falha ao efetuar busca", 
        duration: 5000
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header onClick={handleSearch}/>
      <ContainerHome>
        <Banner description='imagem de fundo com varios desenhos de animes.' />
        <Container>
          {isLoading ? <CardSkeleton /> : <Card cards={animeList}/>}
        </Container>
      </ContainerHome>
    </>
  )
}