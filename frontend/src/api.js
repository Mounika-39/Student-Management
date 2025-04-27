const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000/api'
    : 'https://student-management-s9mm.onrender.com/api'
});
