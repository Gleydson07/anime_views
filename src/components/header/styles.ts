import styled from "styled-components";

export const HeaderContainer = styled.header`
position: fixed;
top: 0;
z-index: 10;
width: 100%;
height: 120px;

.header-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.2); */
  border: 1px solid red;

  figure{
    width: 150px;
    height: auto;
    border: 1px solid red;

  img{
    width: 100%;
    height: auto;
  }
}

  .input-wrapper{
    width: 50%;
  }
}






`