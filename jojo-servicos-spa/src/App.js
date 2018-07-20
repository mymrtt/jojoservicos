import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="caixa_topo">
          <img className="caixa_topo--logo" src="assets/logo-jojo.svg" />
          <p className="caixa_topo--texto">
            Resolver seus problemas nunca foi tão simples.
          </p>
        </section>
        <section className="caixa_inicial">
          <div className="caixa_inicial-boasvindas">
            <h1 className="caixa_inicial-titulo">Pode ficar tranquilo,<br/> você encontrou a Jojô</h1>
            <h1 className="caixa_inicial-tituloMobile">Fique tranquilo,<br/> você encontrou a Jojô</h1>
            <p className="caixa_inicial-descrição">A Jojô ajuda você a superar os contratempos burocráticos em poucos passos!</p>
            <p className="caixa_inicial-descriçãoMobile">Vou ajudar você a superar os seus problemas burocráticos!</p>			
          </div>
          <div className="caixa_inicial-boot">
            <div className="caixa_inicial-perfil">
              <img className="caixa_inicial-boot--img" src="assets/perfil.jpg" />
              <p className="caixa_inicial-boot--p">Fale com a Jojô!</p>
            </div>
            <div class="caixa_inicial--dialogo">
              <div class="caixa_inicial--conversacao">
                <div class="caixa_inicial--mensagem_">
                  <p class="caixa_inicial--dialogo1">Oi, sou o Pedro</p>
                </div>		
                <div class="caixa_inicial--mensagem">
                  <p class="caixa_inicial--dialogo2">
                    Pedro, selecione o tipo de solução que busca encontrar:
                  </p>
                </div>
              </div>
              <div className="caixa_inicial--selecionador">						
                <div className="caixa_inicial--opcao-rg">
                  <div className="caixa_inicial--Itens">
                    <button className="caixa_inicial--button">Emitir documentos</button>
                    <p className="caixa_inicial--info">Carteira de Trabalho, Carteira de identidade, Título de eleitor, Boletim de ocorrência e Alistamento militar</p>
                  </div>
                  <img className="caixa_inicial--icone" src="assets/rg.png" />
                </div>
                <div className="caixa_inicial--opcao-emprego">
                  <div className="caixa_inicial--Itens">
                    <button className="caixa_inicial--button">
                      Encontrar um emprego
                    </button>
                    <p className="caixa_inicial--info">
                      Currículos, indicações e encaminhamentos jovens aprendizes
                    </p>
                  </div>
                  <img className="caixa_inicial--iconeEmprego" src="assets/emprego.png" />
                </div>
                <div className="caixa_inicial--opcao-rg">
                  <div className="caixa_inicial--Itens">
                    <button className="caixa_inicial--button">
                      Gerenciar meu negócio
                    </button>
                    <p className="caixa_inicial--info">
                      Abertura, encerramento e regularização de MEI
                    </p>
                  </div>
                  <img className="caixa_inicial--iconeEmprego" src="assets/negocios.png" />
                </div>
              </div>
            </div>
            <div className="caixa_inicial--envio">
              <input  className="comentarios-input" 
                v-model="novoComentario"
                placeholder='Digite sua mensagem' />
              <input className="imput-img" type="image" src="assets/seta.png" value="ENVIAR" /> 
            </div>
          </div>
        </section>
        <footer className="caixa_rodape">
          <div className="caixa_rodape--Sobre">
            <p className="caixa_rodape--titulo">Sobre</p>
            <p className="caixa_rodape--descricao">Agendamento de seguro desemprego, inss, RG, CPF, título de eleitor, elaboração de currículos, indica advogados de todas as áreas, profissionais.</p>
          </div>
          <div className="caixa_rodape--informações">
            <p className="caixa_rodape--contato">
              Rua Nova Brasília nº 2 Bonsucesso 3º andar. (Associação dos Moradores da Nova Brasília)
            </p>
            <span className="caixa_rodape--fone">
              (21) 99209-3995<br/> 
              (21) 98718-2442
            </span>
          </div>
          <div className="caixa_rodape--icones">
            <a href="https://www.facebook.com/JojoServicos/" target="_blank" >
              <img className="caixa_rodape--img" src="assets/facebook_logo.svg" />
            </a>
            <img className="caixa_rodape--img" src="assets/whatsapp.svg" />		
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
