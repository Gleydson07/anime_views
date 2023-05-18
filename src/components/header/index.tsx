import { Container } from "@/styles/grid";
import { HeaderContainer } from "./styles";
import { Input } from 'antd';

export default function Header() {

  return (
    <HeaderContainer>
      <Container>
        <figure>
          <img src="" alt="" />
        </figure>

        <Input size="large" placeholder="Digite o nome do anime" />
      </Container>
    </HeaderContainer>
  )
}
