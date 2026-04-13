import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tdtlworld.com/db-shiksha-backend/'
  // baseURL: 'http://192.168.0.199:5000/'
});

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @param {Function} setLoading - State setter for loading status
 * @returns {Promise} - Axios response promise
 */
export const registerUser = async (userData, setLoading) => {
  try {
    if (setLoading) setLoading(true);
    const response = await api.post('api/users/register/', userData);
    return response.data;
  } catch (err) {
    console.error('Registration Error:', err);
    throw err;
  } finally {
    if (setLoading) setLoading(false);
  }
};

/**
 * Verify OTP
 * @param {Object} payload - { email, otp_type, code }
 * @returns {Promise}
 */
export const verifyOtp = async (payload) => {
  try {
    const response = await api.post('api/users/verify-otp/', payload);
    return response.data;
  } catch (err) {
    console.error('OTP Verification Error:', err);
    throw err;
  }
};

/**
 * Request OTP
 * @param {Object} payload - { email }
 * @returns {Promise}
 */
export const requestOtp = async (payload) => {
  try {
    const response = await api.post('api/users/send-otp/', payload);
    return response.data;
  } catch (err) {
    console.error('Send OTP Error:', err);
    throw err;
  }
};

/**
 * Fetch Recommended Courses
 * @param {Object} payload - User registration payload
 * @returns {Promise}
 */
export const fetchCourses = async (payload) => {
  try {
    const response = await api.get('api/courses/');
    return response.data;
  } catch (err) {
    console.error('Fetch Courses Error:', err);
    throw err;
  }
};

/**
 * Initiate Payment
 * @param {Object} payload - { course_id }
 * @returns {Promise}
 */
export const initiatePayment = async (payload) => {
  try {
    const token = localStorage.getItem('authToken');

    console.log(`[AUTH DEBUG] Initiating payment with Token: ${token ? 'FOUND' : 'MISSING'}`);

    const response = await api.post('api/payments/initiate/', payload, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Token ${token}` })
      }
    });
    return response.data;
  } catch (err) {
    console.error('Payment Initiation Error:', err.response?.data || err.message);
    throw err;
  }
};
