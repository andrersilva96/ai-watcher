import { askGemini } from './src/models/gemini.js';

document.getElementById('ask').addEventListener('click', async () => {
    const prompt = document.getElementById('prompt').value.trim();
    if (!prompt) return alert("Digite algo!");
    try {
        const response = await askGemini(prompt);
        alert(response);
    } catch (err) {
        alert("Erro: " + err.message);
    }
});
