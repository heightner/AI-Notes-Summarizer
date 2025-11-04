import apiClient from './apiClient.js'

export const generateSummary = async (Text, length) => {
  try {
    const response = await apiClient.post('/summary', {
      text: Text,
      length: length
    })
    return response.data.summary
  } catch (error) {
    if (error.response) {
      throw new Error(err.response.data.error || "Server error occurred");
    } else if (err.request) {
      throw new Error("No response from the server. Check your connection.");
    } else {
      throw new Error("Unexpected error: " + err.message);
    }
  }
}