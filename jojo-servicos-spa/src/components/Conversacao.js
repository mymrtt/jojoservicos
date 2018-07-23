import React from 'react';

import Mensagem from '../components/Mensagem';

const Conversacao = (props) =>
  <div className="caixa_inicial--conversacao">
    {
      props.mensagensBot.map((item) => 
        <Mensagem emissor={item.emissor === "bot" ? "bot" : "usuario"} key={item.textId}>
          {item.text}
        </Mensagem>)
    }
  </div>;

export default Conversacao;