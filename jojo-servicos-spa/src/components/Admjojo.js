import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 20vh;
  background: deepSkyBlue;
`;

const Section = styled.section`

`;

const Titulo_topo = styled.h1`
  color: #fff;
  font-size: 40px;
  font-family: Helvetica, Bold;

`;

const Container_conteudo = styled.div`
  width: 400px;
  height: 300px;
  background: #F7F7F7;
  border-radius: 55px;
`;

const Logo_jojo = styled.img`

`;

const Container_input = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid #3358A4;
  border-radius: 22px;
`;

const Input_login = styled.input`

`;

const Input_senha = styled.input`

`;

const Container_entrar = styled.div`

`;

const Button_entrar = styled.button`
  color: #fff;
  background: linear-gradient(0deg,#69B42E,#569A21);
`;

const Admjojo = () =>
  <Container>
    <Header />
    <Section>
      <Titulo_topo>Central de visualização de pedidos da Jojô</Titulo_topo>
      <Container_conteudo>
        <Logo_jojo src="./logo-jojo.svg" alt="logo jojo" />
        <Container_input>
          <Input_login type="text" placeholder="Login" />
          <Input_senha type="text" placeholder="Senha" />
        </Container_input>
        <Container_entrar>
          <a href=" ">Esqueceu a senha?</a>
          <Button_entrar>Entrar</Button_entrar>
        </Container_entrar>
      </Container_conteudo>
    </Section>
    <Footer />
  </Container>









export default Admjojo;