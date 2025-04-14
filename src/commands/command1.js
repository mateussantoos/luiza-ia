import pkg from "whatsapp-web.js";
const { Buttons } = pkg;

export const command1 = async (client, chatId) => {
  const button = new Buttons(
    "👋 Você escolheu o Comando 1!\nEscolha uma opção abaixo:",
    [
      { body: "Ver produtos" },
      { body: "Falar com atendente" },
      { body: "Horários" },
    ],
    "Menu Interativo",
    "Clique em uma opção"
  );
  await client.sendMessage(chatId, button);
};
