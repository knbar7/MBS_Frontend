import axios from "axios";
import { API_CONFIG } from "./config";

// Generic post function
export const handleSubmitGeneric = async (endpoint, keys, formData) => {
    const data = {};

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
