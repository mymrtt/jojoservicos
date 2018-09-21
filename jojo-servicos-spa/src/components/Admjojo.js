import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 3px solid #69B42E;
  border-bottom: 3px solid #69B42E;
  background: linear-gradient(#2E7BB4,#306BAD, #3260A8, #3358A4);
`;

const Titulo_topo = styled.h1`
  width: 500px;
  text-align: center;
  color: #fff;
  font-size: 40px;
  font-family: Helvetica, Bold;
`;

const Container_content = styled.div`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: row;
  background: #F7F7F7;
  border-radius: 55px;
`;

const Container_content_items = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo_jojo = styled.img`
  width: 170px;
  height: 100px;
`;

const Container_input = styled.div`
  width: 300px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const LoginFormInput = styled.input`
  width: 290px;
  height: 35px;
  color: #7F7F7F;
  font-size: 15px;
  padding-left: 15px;
  border: 1px solid #3358A4;
  border-radius: 22px;
  outline: none;
  opacity: 0.7;
`;

const Container_entrar = styled.div`
  width: 325px;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-family: Museo;
  font-size: 15px;
`;

const Container_entrar_items = styled.div`
  width: 285px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button_entrar = styled.button`
  width: 130px;
  height: 35px;
  color: #fff;
  border: #000;
  border-radius: 18px;
  outline: none;
  background: linear-gradient(0deg,#69B42E,#569A21);
`;

const Admjojo = () =>
  <Container>
    <Header />
    <Section>
      <Titulo_topo>Central de visualização de pedidos da Jojô</Titulo_topo>
      <Container_content>
        <Container_content_items>
          <Logo_jojo src="./logo-jojo.svg" alt="logo jojo" />
          <Container_input>
            <LoginFormInput type="email" name="email" placeholder="Log in" />
            <LoginFormInput type="password" name="password" placeholder="Senha" />
          </Container_input>
          <Container_entrar>
            <Container_entrar_items>
              <a href=" ">Esqueceu a senha?</a>
              <Button_entrar>Entrar</Button_entrar>
            </Container_entrar_items>
          </Container_entrar>
        </Container_content_items>
      </Container_content>
    </Section>
    <Footer />
  </Container>









export default Admjojo;