import React from 'react';
import { GetStaticProps } from 'next';
import HomePage from '@/pages/home';
import * as AnimeService from '@/api/AnimesService';

export default function Home({animes}: any) {
  return (
    <HomePage animes={animes}/>
  )
}

// export const getStaticProps:GetStaticProps = async () => {
//     const animes = await AnimeService.getAnimes();
//     console.log(animes)
    
//     return {
//       revalidate: 60 * 5, // 5 minutes
//       props: {
//         animes
//       }
//     }
//   }