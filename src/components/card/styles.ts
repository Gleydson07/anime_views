import styled from 'styled-components';

export const CardContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;

  li{
    list-style: none;
    
    &:hover{
      .card-header{
        cursor: pointer;
        
        img{
          transform: scale(1.2);
          filter: blur(3px);
          opacity: 0.8;
        }
      }
    }

    .card-header{
      position: relative;
      width: 100%;
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
    }

    .card-content{
      h2{
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
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