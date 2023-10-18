import axios from "axios";
import { API_CONFIG } from "./config";

// Arrow function to handle login
export const handleLogIn = async (email, password) => {
    try {
      const response = await axios.post(API_CONFIG.baseUrl + "/auth/login", {
        email: email,
        password: password,
      });
  
      if (response.status === 200) {
        const token = response.data.token; // Assuming your backend responds with a 'token' field
  
        // Store the token in local storage
        localStorage.setItem('token', token);
  
        // Assuming your user data is available in the response
        const user = response.data.user; // Replace 'user' with the actual key
  
        return user;
      } else {
        // Handle login failure (e.g., incorrect credentials)
        console.error('Login failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };
  
// Function to handle data fetches for specific users
export const getData = async (dataType, userId) => {
    try {
      const response = await axios.get(API_CONFIG.baseUrl + `/${dataType}/author/${userId}`);
  
      if (response.status === 200) {
        const submissions = response.data;

        return submissions;
      } else {
        console.error('Fetch failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred:', error);
    }
  };


// Generic post function
export const handleSubmitGeneric = async (endpoint, keys, formData) => {
    const data = {};

    console.log(formData)

    for (let key of keys) {
        // Set the value from formData for each key
        data[key] = formData[key];
    }

    try {
        const response = await axios.post(API_CONFIG.baseUrl + "/" + endpoint, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Form submitted successfully', response.data);
        // You can add any success handling specific to this form
    } catch (error) {
        console.error('Form submission failed', error);
        // Handle errors specific to this form
    }
};


