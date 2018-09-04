import React, { Component } from 'react';
import './App.css';


import sendUserSays from './services/api.js';

import Header from './components/Header';
import Footer from './components/Footer';
import MensagemBoasVindas from './components/MensagemBoasVindas';
import SenderBox from './components/SenderBox';
import Conversacao from './components/Conversacao';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      mensagens: [
        {
          emissor: "bot",
          text: "Olá, sou a Jojo",
          textId: 1
        },
        { 
          emissor: "bot",
          text: "Como você se chama?",
          textId: 2
        }
      ]
    };
    this.enviarMensagemUsr = this.enviarMensagemUsr.bind(this);
  }
  enviarMensagemUsr(text){
    console.log(text);
    sendUserSays(text, this.props.sessionId)
    .then(res => {
      console.log(res);
      console.log(res.data.result);
      let novasMensagens = res.data.result.fulfillment.messages.map(
        (item, index) => {
          return {
          text: item.speech, 
          textId: new Date().getTime() + '+' + index, 
          emissor:"bot" }
      });
      let newState = {
        mensagens: [...this.state.mensagens, ...novasMensagens]
      };
      this.setState( newState );
    });
    
    this.setState(
      {
        mensagens: [...this.state.mensagens, {text: text, textId: new Date().getTime(), emissor:"usuario"}]
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Header />
        <section className="caixa_inicial">
          <div className="caixa_inicial-boasvindas">
            <MensagemBoasVindas />
          </div>
          <div className="caixa_inicial-boot">
            <div className="caixa_inicial-perfil">
              <img className="caixa_inicial-boot--img" src="./JOJO-ilst.png" alt="perfil" />
            </div>
            <div className="caixa_inicial--dialogo">
              <Conversacao mensagensBot={this.state.mensagens} />
            </div>
            <SenderBox funcaoEnviar={this.enviarMensagemUsr} />
          </div>
          <div className="caixa_inicial-indicacao-mobile">
            <img className="imgdeCompartilhar" src="share.png" />
            <p>Indique para um amigo</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
