import { generateSummary } from "../services/generateSummary.js";

export const getSummary = async (req, res, next) => {
    const { text, length } = req.body;
    if (!text || text.trim() === "") {
        return res.status(400).json({ success: false, message: "Text is required" })
    }
    try {
        const summary = await generateSummary(text, length);
        res.json({ success: true, summary })
    } catch (error) {
        next(error)
    }
}   