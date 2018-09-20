import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 20vh;
  background: deepSkyBlue;
`;

const Admjojo = () =>
  <Container className="Admjojo">
    <Header />
    <section className="">
      <h1>Central de visualização de pedidos da Jojô</h1>
      <div>
        <img src="./logo-jojo.svg" alt="logo jojo" />
        <div>
          <input type="text" placeholder="Login"  />
          <input type="text" placeholder="Senha" />
        </div>
        <div>
          <a href=" ">Esqueceu a senha?</a>
          <button>Entrar</button>
        </div>
      </div>
    </section>
    <Footer />
  </Container>









export default Admjojo;