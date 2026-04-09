import axios from 'axios';

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {Function} setLoading - State setter for loading status
 * @returns {Promise} - Axios response promise
 */
export const registerUser = async (userData, setLoading) => {
  try {
    if (setLoading) setLoading(true);
    const response = await axios.post('/api/users/register/', userData);
    return response.data;
  } catch (err) {
    console.error('Registration Error:', err);
    throw err;
  } finally {
    if (setLoading) setLoading(false);
  }
};
