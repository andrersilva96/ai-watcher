import { askGemini } from './models/gemini.js';

document.getElementById('ask').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value.trim();

    if (!prompt) return alert("Digite uma pergunta!");

    try {
        const response = await askGemini(prompt);
        alert(response);
    } catch (error) {
        alert("Erro ao processar: " + error.message);
    }
});
