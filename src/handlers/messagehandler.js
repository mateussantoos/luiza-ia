import { getResponse } from "../services/responseService";

export const handleMessage = async (message, client) => {
  const { from, body } = message;
  const content = body.trim();

  console.log(`📩 Mensagem recebida de ${from}: "${content}"`);

  const response = getResponse(content);
  await client.sendMessage(from, response);
};
