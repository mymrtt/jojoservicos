import axios from 'axios';

const sendUserSays = (text) => {

  let url = `https://api.dialogflow.com/v1/query?v=20170712&query=${text}&lang=pt-br&sessionId=75001012-2923-4cf1-a296-0070685d9dd7&timezone=America/Bahia`;
  let header = { 
    headers: { 
      Authorization: 'Bearer 71b0446678d54bbd9ae612e59e4fc023' 
    } 
  };
  return axios.get(url, header);
};

export default sendUserSays;
