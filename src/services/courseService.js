import axios from 'axios';

/**
 * Example service following the mandatory API call format:
 * try {
 *   setLoading(true);
 *   const res = await axios.get("/api");
 *   setData(res.data);
 * } catch (err) {
 *   console.error(err);
 * } finally {
 *   setLoading(false);
 * }
 */

export const fetchCourses = async (setLoading, setData, setError) => {
  try {
    setLoading(true);
    // Simulating API call
    const res = await axios.get('https://tdtlworld.com/db-shiksha-backend/api/courses/'); 
    setData(res.data);
  } catch (err) {
    console.error(err);
    if (setError) setError(err.message);
  } finally {
    setLoading(false);
  }
};

export const enrollInCourse = async (courseId, payload, setLoading) => {
  try {
    setLoading(true);
    const res = await axios.post(`/api/courses/${courseId}/enroll`, payload);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    setLoading(false);
  }
};
