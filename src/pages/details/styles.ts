import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;

  .header{
    display: flex;
    gap: 20px;
    margin-bottom: 50px;

    figure{
      width: 250px;
      height: auto;
      border-radius: 0.2rem;
      line-height: 0;
      overflow: hidden;

      img{
        width: 100%;
        height: auto;
      }
    }

    .header-title{
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-self: flex-end;

      margin: 10px 0px;

      h2{
        color: white;
        font-size: 2.5rem;
        font-weight: 600;
      }

      p{
        color: white;
        font-size: 0.8rem;
        font-weight: 100;
      }

      > span{
        height: 1.125rem;
        color: #fff;
        font-size: 0.875rem;
      }
    }
   
  }

  .content{
    display: flex;
    
    .synopsis{
      h2{
        text-transform: uppercase;
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 20px;
      }
      p{
        line-height: 1.5;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 100;
      }
    }
  }

  @media(max-width: 690px){
    .header{
      flex-direction: column;

      figure{
        width: 100%;
        height: 250px;

        img{
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
      }

      .header-title{
        width: 100%;
      }
    }
  }
`;