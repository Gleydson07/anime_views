import { KeyboardEvent, useState } from "react";
import { Container } from "@/styles/grid";
import { HeaderContainer } from "./styles";
import { Input, Button } from 'antd';
import Image from 'next/image';

import logo from '../../assets/header/logo.svg';

interface HeaderProps {
  onClick: (value: string) => void;
}

export default function Header({onClick}: HeaderProps) {
  const [search, setSearch] = useState('');

  const handleMouseClick = () => {
    onClick(search);
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter') {
      onClick(search);
    }
  }
  
  return (
    <HeaderContainer>
      <Container>
        <div className="header-wrapper">
          <figure>
            <Image src={logo} height={400} quality={100} priority alt='imagem da logo do site' />
          </figure>

          <div className="input-wrapper">
            <Input
              size="large"
              placeholder="Digite o nome do anime"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button type="default" size="large" onClick={handleMouseClick}>Buscar</Button>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}
