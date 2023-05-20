import { Container } from "@/styles/grid";
import { HeaderContainer } from "./styles";
import { Input } from 'antd';
import Image from 'next/image';

import logo from '../../assets/header/logo.svg';

export default function Header() {

  return (
    <HeaderContainer>
      <Container>
        <div className="header-wrapper">
          <figure>
            <Image src={logo} height={400} quality={100} priority alt='imagem da logo do site' />
          </figure>

          <div className="input-wrapper">
            <Input size="large" placeholder="Digite o nome do anime" />
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}
