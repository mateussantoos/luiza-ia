import { command1 } from "../commands/command1.js";
import { command2 } from "../commands/command2.js";
import { defaultCommand } from "../commands/defaultComand.js";

export const getResponse = async (content, client, chatId) => {
  switch (content) {
    case "1":
      return await command1(client, chatId);
    case "2":
      return await command2();
    default:
      return await defaultCommand();
  }
};
