import React from 'react';
import { GetStaticProps } from 'next';
import HomePage from '@/pages/home';
import api from '@/api';

export default function Home({animes}: any) {
  return (
    <HomePage animes={animes}/>
  )
}

export const getStaticProps:GetStaticProps = async () => {
    const {data} = await api.get("/anime?include=categories&page[limit]=18");
    
    const animes = data.data.map((anime: any) => ({
      id: anime.id,
      title: anime.attributes.canonicalTitle,
      img: anime.attributes.posterImage.large,
      rating: anime.attributes.averageRating,
      ageRatingGuide: anime.attributes.ageRatingGuide,
    }))

    return {
      revalidate: 60 * 5, // 5 minutes
      props: {
        animes: animes
      }
    }
  }
