import React from 'react';

import '../App.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MensagemBoasVindas from '../components/MensagemBoasVindas';
import Mensagem from '../components/Mensagem';
import BotaoDeOpcao from '../components/BotaoDeOpcao';
import SenderBox from '../components/SenderBox';
import Conversacao from '../components/Conversacao';

storiesOf('Header', module)
  .add('Header', () => <Header />);

storiesOf('Footer', module)
  .add('Footer', () => <Footer />);

storiesOf('MensagemBoasVindas', module)
  .add('MensagemBoasVindas', () => <MensagemBoasVindas />);

storiesOf('Mensagem', module)
  .add('Mensagem do bot', () => 
  <Mensagem emissor="bot">
    Pedro, selecione o tipo de solução que busca encontrar:
  </Mensagem>)
  
  .add('Mensagem do usuário', () => 
  <Mensagem emissor="usuario">
    Oi, sou o Pedro
  </Mensagem>);

storiesOf('BotaoDeOpcao', module)
  .add('Emitir documentos', () => 
  <BotaoDeOpcao 
    title="Emitir documentos"
    descricao="Carteira de Trabalho, Carteira de identidade, Título de eleitor, Boletim de ocorrência e Alistamento militar"
    img="./rg.png" />)
  
  .add('Encontrar um emprego', () => 
  <BotaoDeOpcao 
    title="Encontrar um emprego"
    descricao="Currículos, indicações e encaminhamentos jovens aprendizes"
    img="./emprego.png" />)

  .add('Gerenciar meu negócio', () => 
  <BotaoDeOpcao 
    title="Gerenciar meu negócio"
    descricao="Abertura, encerramento e regularização de MEI"
    img="./negocios.png" />);

storiesOf('SenderBox', module)
  .add('SenderBox', () => 
  <SenderBox />);

storiesOf('Conversação', module)
  .add('Conversacao', () => 
  <Conversacao />);
