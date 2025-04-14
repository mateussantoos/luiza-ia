import { getResponse } from "../services/responseService.js";

export const handleMessage = async (message, client) => {
  const { from, body, isGroupMsg, isStatus } = message;
  const content = body.trim();

  if (message.from.includes("@g.us")) {
    console.log(`👥 Ignorando mensagem de grupo de ${from}`);
    return;
  }

  if (isStatus) return;

  console.log(`📩 Mensagem recebida de ${from}: "${content}"`);

  const response = await getResponse(content, client, from);
  if (typeof response === "string") {
    await client.sendMessage(from, response);
  }
};
