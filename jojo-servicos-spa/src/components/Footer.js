import React from 'react';

const Footer = () =>
  <footer className="caixa_rodape">
    <div className="caixa_rodape--Sobre">
      <p className="caixa_rodape--titulo">
        Sobre
      </p>
      <p className="caixa_rodape--descricao">
      Nossa missão é  ajudar as pessoas a resgatarem  a sua cidadania,  em relação a diversos documentos. </p>
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
    <a href="https://www.facebook.com/JojoServicos/" target="_blank" rel="noopener noreferrer" >
      <img className="caixa_rodape--img" src="facebook_logo.svg" alt='facebook logo' />
    </a>
    </div>
  </footer>;

export default Footer;