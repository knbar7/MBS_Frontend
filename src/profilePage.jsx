import { useAuth } from "./authProvider";
import { ClientProfile } from "./clientProfile";
import "./index.css";
import { NavBar } from "./navBar";

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      {user.role === "client" ? <ClientProfile /> : <CoachProfile />}
    </>
  );
};
