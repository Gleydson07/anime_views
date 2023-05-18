import styled from 'styled-components';

export const Container = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 450px;
  z-index: -1;

  &::after{
    content: '';
    position: absolute;
    top: 350px;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0,0,0,0) 0%, #110920 50%);
  }

  img{
    width: 100%;
    height: 450px;
    object-fit: cover;
    opacity: 0.3;
  }
`;