import { GoogleGenerativeAI } from '@google/generative-ai'
import { config } from '../config/config.js'

const API_KEY = config.API_KEY
const aiClient = new GoogleGenerativeAI(API_KEY)

export const generateSummary = async (text, length = "short") => {
    if (!text || text.trim() === "") return "Not Text Provided"
    try {
        const prompt = length === "short"
            ? `Provide a concise summary 25% of the following text in an academic tone:\n\n${text}`
            : length === "medium"
            ? `Provide a concise summary 40% of the following text in an academic tone with examples:\n\n${text}`
            : `Provide a detailed summary 60% with real-life examples, explanation, and demonstration in an academic tone:\n\n${text}`

        const model = aiClient.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: `Summarize the provided text in a clear academic tone with easier words with real-life examples. Include explanation, demonstration, and example. Don't include bold words, new line characters, italic, or any sort of formatting`
        })

        const result = await model.generateContent(prompt)    
        const summary = result.response.text()
        return { summary, type: length }
    } catch (error) {
        console.error("Error generating summary:", error)
        return "Error generating summary"
    }
}