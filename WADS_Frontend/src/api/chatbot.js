const API_BASE_URL = "http://localhost:5000/api/chat";

/**
 * New message to AI
 * @param {Object} messageData - The message data
 * @returns {Promise<Object>} The 
 */

export const newMessage = async (token, messageData) => {
  const res = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(messageData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to send message");
  }

  return data;
};

/**
 * Get chat history with the AI
 * @param {Object} userData - The user registration data
 * @returns {Promise<Object>} The response JSON containing token and user info
*/

export const getMessageHistory = async (token) => {
  const res = await fetch(`${API_BASE_URL}/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch chat history for user");
  }

  return data;
};