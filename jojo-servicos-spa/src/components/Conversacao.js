import React from 'react';

import Mensagem from '../components/Mensagem';

const Conversacao = () =>
  <div class="caixa_inicial--conversacao">
    <Mensagem emissor="bot">
      Olá, em que posso ajudar Olá, em que posso ajudar Olá, em que posso ajudar
    </Mensagem>

    <Mensagem emissor="usuario">
      Oi, sou o Pedro
    </Mensagem>

    <Mensagem emissor="bot">
      Em que posso ajudar
    </Mensagem>

    <Mensagem emissor="usuario">
      Eu preciso tirar a segunda via de meu RG
    </Mensagem>

    <Mensagem emissor="bot">
      Você tem a original?
    </Mensagem>
  </div>;

export default Conversacao;