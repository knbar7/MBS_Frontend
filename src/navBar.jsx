import { useAuth } from "./authProvider";
import "./index.css";

export const NavBar = () => {
  const { user, setUser } = useAuth();
  const name = user.name;

  const handleLogOut = () => {
    setUser();
    localStorage.removeItem("token");
  };

  return (
    <div className="nav-bar">
      <p>Welcome, {name}!</p>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};
