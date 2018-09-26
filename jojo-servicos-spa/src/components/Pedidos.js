import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Status from './Status';
import Pendencias from './Pendencias';
import Cliente from './Cliente';
import Entrada from './Entrada';
import Categoria from './Categoria';
import Tema from './Tema';
import Tipo from './Tipo';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  border-top: 3px solid #69B42E;
  border-bottom: 3px solid #69B42E;
  background: linear-gradient(#2E7BB4,#306BAD, #3260A8, #3358A4);
  @media(max-width: 640px){
    width: 100%;
    height: 100vh;
    border-top: 4px solid #69B42E;
    border-bottom: 4px solid #69B42E;
  }
`;

const Pedidos = () =>
  <Container>
    <Header />
    <Section>
      <h1>Pedidos:</h1>
      <div>
        <div>
          <p><Status /></p>
          <p>Tema</p>
          <p>Categoria</p>
          <p>Tipo</p>
          <p>Cliente</p>
          <p>Entrada</p>
          <p>Pendências</p>
          <p>Mensagens</p>
        </div>
      </div>
      <div>
        <div>
          <Tema />
        </div>
        <div> 
          <Categoria />
        </div>
        <div>
          <Tipo />
        </div>
        <div>
          <Cliente />
        </div>
        <div>
          <Entrada />
        </div>
        <div>
          <Pendencias />
        </div>
      </div>
    </Section>
    <Footer />
  </Container>

export default Pedidos;