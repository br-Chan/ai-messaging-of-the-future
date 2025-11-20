import { aiModel } from "../config/firebase";

export const sendPrompt = async (prompt: string): Promise<string> => {
  const result = await aiModel.generateContent(prompt);

  const response = result.response;
  const text = response.text();
  console.log(text);

  return text;
};
