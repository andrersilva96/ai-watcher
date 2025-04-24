import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

export async function askGemini(prompt) {
    const model = new ChatGoogleGenerativeAI(
        {
            model: 'models/gemini-2.0-flash',
            apiKey: import.meta.env.VITE_GEMINI_API_KEY, // process.env.VITE_GEMINI_API_KEY,
        },
    );

    const response = await model.invoke(prompt);
    return response.content;
}
