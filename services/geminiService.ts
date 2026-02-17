import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the client.
// Note: In a real production app, you might proxy this through a backend to hide the key,
// or use Firebase App Check. For this demo, we use the env variable directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the intelligent assistant for "SolarTherm AI", a clean-tech startup.
Your goal is to explain our technology to potential investors and users.

KEY FACTS:
- Product: AI-powered thermal management system for Electric Vehicles (EVs) and Hybrids.
- Core Tech: Uses IoT sensors, Solar Energy, and smart airflow control.
- Benefits: Prevents overheating, improves battery life, increases efficiency, reduces energy costs.
- Mission: Smarter vehicles, longer life, cleaner future.
- Target Audience: Investors, Hackathon judges, Tech enthusiasts.

TONE:
- Professional, futuristic, eco-friendly, and helpful.
- Keep answers concise (under 3 sentences where possible).
- Emphasize sustainability and AI innovation.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm sorry, I cannot connect to the AI service right now (Missing API Key).";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // We can use a chat session for context, or just a single generateContent if history is managed manually.
    // Here we use the chat helper for simplicity in state management if we were persisting the object,
    // but since we pass history in, we can just reconstruct the chat.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return result.text || "I'm silent right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my neural network. Please try again later.";
  }
};