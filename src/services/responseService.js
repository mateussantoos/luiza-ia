import comando1 from "../commands/comando1.js";
import comando2 from "../commands/comando2.js";
import defaultCommand from "../commands/default.js";

export const getResponse = async (content) => {
  switch (content) {
    case "1":
      return await comando1();
    case "2":
      return await comando2();
    default:
      return await defaultCommand();
  }
};
