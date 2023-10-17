import { useState } from "react";
import { useAuth } from "./authProvider";
import { handleLogIn } from "./api/genericFunctions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();

  const logInToApp = async (e) => {
    e.preventDefault();
    
    try {
      const user = await handleLogIn(email, password);
      if (user) {
        setUser(user);
      }
    } catch (error) {
      // Handle any login errors here
      console.error('Login failed:', error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="client-content">
      <div className="daily-items-container">
        <h1>Welcome! Log-in Below</h1>
        <form action="submit" className="input-form" onSubmit={logInToApp}>
          <input type="text" placeholder="email" onChange={handleEmailChange} />
          <input type="password" placeholder="password" onChange={handlePasswordChange} />
          <input type="submit" value="Log In" />
        </form>
      </div>
    </div>
  );
};
