import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;

  .tag{
    background: grey;
    padding: 0.5rem;
    border-radius: 0.3rem;

    strong{
      color: white;
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`