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
          <div>
            <div className="caixa_inicial-indicacao-mobile">
              <img className="imgdeCompartilhar" src="share.png" />
              <p>Indique para um amigo</p>
            </div>
              <div className="caixa_inicial--compartilhar">
                <div className="compartilhar_icone">
                  <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fjojo-servicos.firebaseapp.com%2F&layout=button&size=small&mobile_iframe=true&width=97&height=20&appId" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>      
                </div>
                <div className="compartilhar_icone">
                  <a class="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=Venha%20acessar%20a%20Jojo%20Servicos%20ela%20pode%20te ajudar%20a%20superar%20os%20seus%20problemas%20burocráticos%20!%20https://jojo-servicos.firebaseapp.com"
                  data-size="large" target="_blank">
                    <img className="icone-twitter" src="twitter-logo.svg" />      
                  Tweetar</a>
                </div>
              </div>
            </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
