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
    const response = await api.get("/anime");

    return {
    //   revalidate: 60 * 5, // 5 minutes
      props: {
        animes: response.data
      }
    }
  }