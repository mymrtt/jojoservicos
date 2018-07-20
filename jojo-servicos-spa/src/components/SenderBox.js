import React from 'react';

const SenderBox = (props) =>
  <div className="caixa_inicial--envio">
    <input  className="comentarios-input" 
      placeholder='Digite sua mensagem' />
    <input className="imput-img" type="image" src="./seta.png" value="ENVIAR" /> 
  </div>;

export default SenderBox;