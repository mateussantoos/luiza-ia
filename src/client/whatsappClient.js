import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;

import puppeteer from "puppeteer";
const chromePath = puppeteer.executablePath();

import dotenv from "dotenv";
import { handleMessage } from "../handlers/messageHandler.js";

dotenv.config();

export const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: false,
    args: ["--no-sandbox"],
    executablePath: chromePath,
  },
});

client.on("ready", () => {
  console.log("✅ WhatsApp Web está pronto!");
});

client.on("auth_failure", (msg) => {
  console.error("❌ Falha na autenticação", msg);
});

client.on("disconnected", (reason) => {
  console.log("🔴 Cliente desconectado:", reason);
});

client.on("message", async (message) => {
  await handleMessage(message, client);
});
