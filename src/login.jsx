import { useState } from "react";
import { useAuth } from "./authProvider";
import { handleLogIn, handleSubmitGeneric, handleUserPost } from "./api/genericFunctions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInUp, setSignInUp] = useState("log-in");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setUser } = useAuth();

  const logInToApp = async (e) => {
    e.preventDefault();
    
    try {
      const user = await handleLogIn(email, password);
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleInputChange = (e, inputName) => {
    switch (inputName) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'newName':
        setNewName(e.target.value);
        break;
      case 'newEmail':
        setNewEmail(e.target.value);
        break;
      case 'newPassword':
        setNewPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      default:
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    let errors = [];

    if(newPassword !== confirmPassword){
      errors.push(' Passwords do not match');
    }

    if(!newName){
      errors.push(' Name is missing')
    }

    if(!newEmail){
      errors.push(' Email is missing')
    }

    if(!newPassword){
      errors.push(' Password is missing')
    }

    if(errors.length > 0){
      window.alert(`${errors}`)
      throw new Error(`${errors}`)
    }

    try {
      const user = await handleUserPost(newName, newEmail, newPassword);
      if (user) {
        setUser(user);
      }
      if(errors) {
        window.alert("There is already a user with that email");
        e.target.reset();
      }
    } catch (error) {
      window.alert('Login failed: ' + error.message);
    }

  }

  const handleSignInUp = (e) => {
    setSignInUp(e.target.id);
  }

  return (
    <div className="client-content">
      <div className="daily-items-container">
        <div className="sign-in-up-selection">
          <input 
            type="radio" 
            id="log-in" 
            name="signInUp" 
            defaultChecked 
            onChange={handleSignInUp}
          />
          <label htmlFor="log-in">Log-in</label>
          <input 
            type="radio" 
            id="create-new" 
            name="signInUp" 
            onChange={handleSignInUp}
          />
          <label htmlFor="create-new">Create Account</label>
        </div>
        {
          signInUp === 'log-in' ?
          <>
            <h1>Welcome! Log-in Below</h1>
            <form action="submit" className="input-form" onSubmit={logInToApp}>
              <input type="text" placeholder="email" onChange={(e) => handleInputChange(e, 'email')} />
              <input type="password" placeholder="password" onChange={(e) => handleInputChange(e, 'password')} />
              <input type="submit" value="Log In" />
            </form>
          </>
          :
          <>
            <h1>Welcome!</h1>
            <h1>Create Account Below</h1>
            <form action="submit" className="input-form" onSubmit={(e) => handleCreateAccount(e)}>
              <div className="form-item">
                <input type="text" placeholder="Name" onChange={(e) => handleInputChange(e, 'newName')} />
              </div>
              <div className="form-item">
                <input type="email" placeholder="Email" onChange={(e) => handleInputChange(e, 'newEmail')} />
              </div>
              <div className="form-item">
                <input type="password" placeholder="Password" onChange={(e) => handleInputChange(e, 'newPassword')} />
              </div>
              <div className="form-item">              
                <input type="password" placeholder="Confirm Password" onChange={(e) => handleInputChange(e, 'confirmPassword')} />
                <p className={newPassword === confirmPassword ? "hidden" : "error-message"}>Passwords do not match</p>
              </div>
              <div className="form-item">
                <input type="submit" value="Create Account" />
              </div>
            </form>
          </>
        }
      </div>
    </div>
  );
};
