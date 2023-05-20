import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 50px;
  padding-top: 250px;

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
        max-width: 500px;
        width: 100%;
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
    flex-direction: column;
    gap: 20px;
    
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

    .episodes{
      h2{
        text-transform: uppercase;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 600;
        margin: 20px 0;
      }
      p{
        line-height: 1.5;
        color: #fff;
        font-size: 1.25rem;
        font-weight: 100;
      }
    }
  }

  iframe{
    width: 100%;
    height: 100%;
  }

  @media(max-width: 785px){
    .header{
      flex-direction: column;

      figure{
        position: relative;
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

  @media(max-width: 485px){
    padding-top: 50px;

    .header{
      gap: 10px;
      margin-bottom: 20px;
      .header-title{
        h2{
          font-size: 1.5rem;
        }
      }
    }

    .content{
      display: flex;
      flex-direction: column;
      gap: 20px;
      
      .synopsis{
        h2{
          font-size: 1.5rem;
          margin-bottom: 20px;
        }
      }
    }
  }
`;