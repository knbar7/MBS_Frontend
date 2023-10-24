import { useAuth } from "./authProvider";
import { Login } from "./login";
import { ProfilePage } from "./profilePage";
import { SubmissionProvider } from "./submissionProvider";
import { useEffect } from "react";
import axios from "axios";
import { API_CONFIG } from "./api/config";

export const Structure = () => {
  const { user, setUser } = useAuth();

  useEffect(() => {
    // Check for a JWT token in local storage
    const token = localStorage.getItem("token");

    if (token) {
      // If a token is found, make a request to your backend to get user data using Axios
      axios
        .get(API_CONFIG.baseUrl + "/api/getUser", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else {
            throw new Error("Failed to fetch user data");
          }
        })
        .then((userData) => {
          // Set the user using setUser
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [setUser]);

  return (
    <>
      {user ? (
        <SubmissionProvider>
          <ProfilePage />
        </SubmissionProvider>
      ) : (
        <Login />
      )}
    </>
  );
};
