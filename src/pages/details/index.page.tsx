import React from 'react';
import Banner from '@/components/banner';
import { Wrapper } from './styles';
import { Container } from '@/styles/grid';
import { Button } from 'antd';
import Tags from '@/components/tags';
import StarRating from '@/components/starRating';

const tags = ["Artes marciais", "Aventura", "Shounen"]

export default function Details() {
  return (
    <Container>
      <Banner img='https://image.tmdb.org/t/p/original/erMkdaaYEyUqCSUEdYtqBtl63rK.jpg' description='imagem de fundo do dragon ball gt' />

      <Wrapper>
        <div className='header'>
          <figure>
            <img src="https://image.tmdb.org/t/p/original/kmO4AHj1xx8wiaBMgwGjXhOQfNt.jpg" alt="" />
          </figure>

          <div className='header-title'>
            <h2>Dragon bal gt</h2>
            <Tags tags={tags} />
            <StarRating rating={86.51} />

            <span>popularityRank 10</span>
            <span>26 Episodios</span>

            <Button type="primary">Ver video</Button>

          </div>



        </div>

        <div className='content'>
          <div className='synopsis'>
            <h2>synopsis</h2>
            <p>A história se passa 10 anos após o final da saga Z, Goku reencontra vilões de sua infância, que estão roubando as esferas do dragão que estão no templo do kamisama, goku descobre o que eles estão tramando e por um engano, pilaf deseja que Shenlong transforme Goku em criança, agora as esferas se espalharam pelo universo e goku e seus amigos tem apenas um ano para encontrar todas, antes que a terra exploda. Eles embarcam numa aventura em busca das 7 esferas do dragão.</p>
          </div>


          {/* <iframe src="https://www.youtube.com/embed/Sl2k7bfBeCw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
        </div>
      </Wrapper>

    </Container>
  )
}
