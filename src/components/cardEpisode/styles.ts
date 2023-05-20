import styled from 'styled-components';

export const CardContainer = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;

  .card-episode{
    max-width: calc(100% / 6 - 20px);
    /* max-width: 250px; */
    background: #1b0f30;
    padding: 10px;
    border-radius: 0.3rem;
    list-style: none;

    figure{
      width: 100%;
      height: auto;
      border-radius: 0.3rem;
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
      }

      figcaption{
        margin: 10px 0px;
        color: #a0a0a0;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }

    .card-episode-footer{
      display: flex;
      flex-direction: column;
      gap: 8px;

      span{
        color: white;
        font-size: 1rem;
        font-weight: 600;
      }
    }


  }

`