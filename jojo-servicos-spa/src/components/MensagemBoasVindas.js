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
    <div className="caixa_inicial-indicacao">
     <img className="imgdeCompartilhar" src="share.png" />
      <p>Indique para um amigo</p>
    </div>		
  </div>;

export default Mensagem;