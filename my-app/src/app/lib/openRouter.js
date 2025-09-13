import axios from "axios";

// OpenRouter API configuration
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function queryOpenRouter(message) {
  try {
    // Check if API key is configured
    if (!process.env.OPENROUTER_API_KEY) {
      console.error("OPENROUTER_API_KEY environment variable is not set");
      return { 
        error: "OpenRouter API key not configured. Please set OPENROUTER_API_KEY in .env.local" 
      };
    }

    const response = await axios.post(
      OPENROUTER_API_URL,
      {
        model: "meta-llama/llama-3.2-3b-instruct:free", // Free model from OpenRouter
        messages: [
          {
            role: "system",
            content: "You are a helpful and empathetic AI assistant. Provide supportive and helpful responses to users."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
        top_p: 0.9
      },
      {
        headers: { 
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000", // Optional: for tracking
          "X-Title": "SIH-2025 Chat App" // Optional: for tracking
        },
        timeout: 30000 // 30 second timeout
      }
    );

    // Handle the response format properly
    if (response.data && response.data.choices && response.data.choices.length > 0) {
      return {
        success: true,
        message: response.data.choices[0].message.content || "No response generated"
      };
    } else {
      return {
        success: false,
        error: "No response generated from the model"
      };
    }
  } catch (error) {
    console.error("OpenRouter API error:", error.response?.data || error.message);
    
    // Handle specific error cases
    if (error.response?.status === 401) {
      return { 
        error: "Invalid OpenRouter API key. Please check your OPENROUTER_API_KEY in .env.local" 
      };
    } else if (error.response?.status === 429) {
      return { 
        error: "Rate limit exceeded. Please try again in a moment." 
      };
    } else if (error.response?.status === 402) {
      return { 
        error: "Insufficient credits. Please check your OpenRouter account balance." 
      };
    } else if (error.code === 'ECONNABORTED') {
      return { 
        error: "Request timeout. The model might be taking too long to respond." 
      };
    }
    
    return { 
      error: `Failed to fetch from OpenRouter: ${error.response?.data?.error?.message || error.message}` 
    };
  }
}