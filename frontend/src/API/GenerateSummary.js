import apiClient from './apiClient.js'

export const generateSummary = async(Text, length) => {
    try {
      const response = await apiClient.post('/summary', {
        text: Text,
        length: length
      }) 
      console.log("Summary API: ", response.data)
      return response.data.summary
    } catch (error) {
        console.error("Error Generating SUmmary: ", error.message);
        return Error("Service Unavailable for Now")
    }
}