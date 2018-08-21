import React from 'react';

const Footer = () =>
  <footer className="caixa_rodape">
    <div className="caixa_rodape--Sobre">
      <p className="caixa_rodape--titulo">
        Sobre
      </p>
      <p className="caixa_rodape--descricao">
      Quem hoje em dia não encontra dificuldades para resolver suas documentações? Fazer um currículo atrativo para o mercado de trabalho, ou tornar-se um empreendedor através do MEI? Caso você precise dessas respostas, entre em contato conosco e conheça os nossos serviços. </p>
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
    <div className="caixa_rodape--creditos">
      <p className="creditos--vencedor">Jojô Serviços - vencedora do StartupIN Favela 2018</p>
      <p className="creditos--desenvolvido">Desenvolvido por 1STi e Estúdio Vai na Web</p>
      
    </div>
  </footer>;

export default Footer;