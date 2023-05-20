import React from 'react';
import { GetServerSideProps } from 'next';
import Banner from '@/components/banner';
import { Wrapper } from './styles';
import { Container } from '@/styles/grid';
import { Button } from 'antd';
import Tags from '@/components/tags';
import StarRating from '@/components/starRating';
import api from '@/api';

export default function Details({anime}: any) {
  const {
    id,
    img,
    banner,
    title,
    description,
    popularityRanking,
    rating,
    ageRating,
    episodes,
    episodeCount,
    youtubeVideoId,
    categories,
  } = anime;

  return (
    <Container id={id}>
      <Banner img={banner} description='imagem de fundo do dragon ball gt' />

      <Wrapper>
        <div className='header'>
          <figure>
            <img src={img} alt="" />
          </figure>

          <div className='header-title'>
            <h2>{title}</h2>
            <Tags tags={categories} />
            <StarRating rating={rating} />

            <span>{popularityRanking ? `${popularityRanking}° Popular ranking` : ''}</span>
            <span>{episodeCount ? `${episodeCount} Episodes` : ''}</span>

            <Button type="primary">Watch video</Button>
          </div>
        </div>

        <div className='content'>
          <div className='synopsis'>
            <h2>synopsis</h2>
            <p>{description}</p>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            height={180}
            width={340}
          >
          </iframe>
        </div>
      </Wrapper>

    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const id = params?.slug;

  if (!id) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      }
    }
  }

  const responses = await Promise.all([
    api.get(`/anime/${id}?include=categories,episodes`),
    api.get(`/anime/${id}/categories`),
    api.get(`/anime/${id}/episodes`),
  ]);

  const responseAnime = responses[0]?.data;
  const responseCategories = responses[1]?.data;
  const responseEpisodes = responses[2]?.data;
    
  const anime = {
    id: responseAnime.data.id,
    title: responseAnime.data.attributes.canonicalTitle,
    description: responseAnime.data.attributes.description,
    popularityRanking: responseAnime.data.attributes.popularityRank,
    img: responseAnime.data.attributes.posterImage.large,
    banner: responseAnime.data.attributes.coverImage.large,
    rating: responseAnime.data.attributes.averageRating,
    ageRating: responseAnime.data.attributes.ageRating,
    episodeCount: responseAnime.data.attributes.episodeCount,
    youtubeVideoId: responseAnime.data.attributes.youtubeVideoId,
    episodes: responseEpisodes.data.map((episode: any) => ({
      id: episode.id,
      title: episode.attributes.canonicalTitle,
      description: episode.attributes.description,
      season: episode.attributes.seasonNumber,
      synopsis: episode.attributes.synopsis,
    })),
    categories: responseCategories.data
      .filter((included: any) => responseAnime.data.relationships.categories.data
      .map((category: any) => category.id).includes(included.id))
      .map((category: any) => category.attributes.title).slice(0, 3)
  }

  return {
    props: {
      anime: anime,
      data: responseEpisodes.data,
    },
  }
}
