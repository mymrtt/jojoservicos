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
    <div className="caixa_inicial-indicacao" id="botaoOpen" >
     {/* <img className="imgdeCompartilhar" src="share.png" /> */}
      <p>Indique para um amigo</p>
    </div>
    <div className="caixa_inicial--compartilhar" id="caixaIcones">
      <div className="compartilhar_icone">
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fjojo-servicos.firebaseapp.com%2F&layout=button&size=small&mobile_iframe=true&width=97&height=20&appId" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>      
      </div>
      <div className="compartilhar_icone">
        <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text=Hello%20world"
        data-size="large" target="_blank">
          <img className="icone-twitter" src="twitter-logo.svg" />      
        Tweetar</a>
      </div>
      <div className="compartilhar_icone"></div>
    </div>
  </div>;

  //  var botaoOpen = document.querySelector("#botaoOpen");  
  //  var caixaIcones = document.querySelector("#caixaIcones");  
  //  caixaIcones.style.display = "none";  
  //  botaoOpen.addEventListener("click", function(){  
  //      if(caixaIcones.style.display == "block") {  
  //          caixaIcones.style.display = "none";  
  //      } else {  
  //          caixaIcones.style.display = "block";  
  //      }  
  //  }, false);  
export default Mensagem;