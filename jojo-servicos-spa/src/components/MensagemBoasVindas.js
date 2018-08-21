import React from 'react';

const Mensagem = () =>
  <div className="caixa_inicial-boasvindas-1">
    <div className="caixa_inicial--bloco1">
      <h1 className="caixa_inicial-titulo">
        Fique tranquilo,<br /> 
        você encontrou a Jojô
      </h1>
      <h1 className="caixa_inicial-tituloMobile">
        Fique tranquilo,<br /> 
        você encontrou a Jojô
      </h1>
      <p className="caixa_inicial-descrição">
      Vou ajudar você a superar os seus problemas burocráticos!

      </p>
      <p className="caixa_inicial-descriçãoMobile">
        Vou ajudar você a superar os seus problemas burocráticos!
      </p>
    </div>	
    <button className="caixa_inicial-indicacao">
     <img className="imgdeCompartilhar" src="share.png" />
      <p>Indique para um amigo</p>
      <ul>
          <li>
            <a href="http://twitter.com/share" class="twitter-share-button" 
data-url="www.devmedia.com.br" data-text="Teste" data-count="horizontal" data-via="aqui-seu-nome-de-usuario-do-twitter" data-lang="pt">Tweetar</a>
<script type="text/javascript" src="http://platform.twitter.com/widgets.js">
</script>
          </li>
        <li></li>
        <li></li>
      </ul>
    </button>		
  </div>;

export default Mensagem;