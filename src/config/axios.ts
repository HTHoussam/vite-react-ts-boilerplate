import axios from "axios";
import { toast } from "sonner";

// Create a new instance of axios with custom config
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Make sure VITE_API_URL is properly set in your environment variables
  timeout: 6000,
});

// Add response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response, // Return the response directly if no error
  (error) => {
    // Check for 404 errors
    if (error.response && error.response.status === 404) {
      toast.error("Not Found");
    }
    // Rethrow the error so it can be handled elsewhere
    throw error;
  }
);

// Export the customized Axios instance as the default export
export default axiosInstance;
