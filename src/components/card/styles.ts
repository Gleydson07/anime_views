import styled from 'styled-components';

export const CardContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  padding: 0;
  margin: 0;

  li{
    list-style: none;
    width: calc(100% / 6 - 20px);
    cursor: pointer;

    &:hover{
      .card-header{
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
      color: white;
      font-size: .875rem;
      font-weight: 400;
    }
  }
`