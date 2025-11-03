export const generateSummary = async (text, length = "short") => {
    if (!text || text.trim() === "") return "Not Text Provided"
    try {
        const summary = length === "short" ? text.slice(0, 100) + "..." : text.slice(0, 200) + "..."
        return { summary, type: length }
    } catch (error) {
        console.error("Error generating summary:", error)
        return "Error generating summary"
    }
}