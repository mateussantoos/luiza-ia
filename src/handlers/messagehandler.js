export const handleMessage = async (message, client) => {
  const { from, body } = message;
  const content = body.trim();

  console.log(`📩 Mensagem recebida de ${from}: "${content}"`);

  switch (content) {
    case "1":
      await client.sendMessage(
        from,
        "Você escolheu a opção 1️⃣. Aqui está a resposta correspondente."
      );
      break;
    case "2":
      await client.sendMessage(
        from,
        "Você escolheu a opção 2️⃣. Aqui está outra resposta."
      );
      break;
    case "3":
      await client.sendMessage(
        from,
        "Você escolheu a opção 3️⃣. Resposta customizada."
      );
      break;
    default:
      await client.sendMessage(
        from,
        "Olá! Digite um número para continuar:\n\n" +
          "1 - Saber mais sobre nossos serviços\n" +
          "2 - Falar com um atendente\n" +
          "3 - Horários de atendimento"
      );
      break;
  }
};
