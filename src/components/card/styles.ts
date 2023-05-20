import styled from 'styled-components';

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;

  li{
    list-style: none;
    max-width: 232px;
    
    &:hover{
      .card-header{
        cursor: pointer;
        
        img{
          transform: scale(1.2);
          filter: blur(3px);
          opacity: 0.8;
        }

        figcaption{
          /* bottom: calc(50% - 50px); */
          bottom: 0px;
        }
      }
    }

    .card-header{
      position: relative;
      width: 100%;
      /* max-width: 200px; */
      height: auto;
      margin-bottom: 10px;
      line-height: 0;
      border-radius: 0.2rem;
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
        transition: all 0.3s linear;
      }

      figcaption{
        position: absolute;
        bottom: -100%;
        left: 50%;
        width: 80%;
        padding: 20px;
        text-align: center;
        color: rgba(255,255,255, 0.7);
        font-weight: 400;
        border-radius: 0.3rem;
        background: rgba(255,255,255, 0.3);
        transform: translate(-50%, -50%);
        transition: all 0.3s linear;
      }
    }

    .card-content{
      h2{
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

  }

  @media(max-width: 485px){
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    li{
      .card-content{
        h2{
          font-size: .8rem;
        }
      }
    }
  }
`