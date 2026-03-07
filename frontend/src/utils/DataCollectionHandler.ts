const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const submitLoginData = async (userId: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        password,
      }),
    });

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
