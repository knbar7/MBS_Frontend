import { useAuth } from "./authProvider";
import { ClientProfile } from "./clientProfile";
import { CoachProfile } from "./coachProfile";
import { CoachProvider } from "./coachProvider";
import "./index.css";
import { NavBar } from "./navBar";

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <NavBar />
      {user.role === "client" ? (
        <ClientProfile />
      ) : (
        <CoachProvider>
          <CoachProfile />
        </CoachProvider>
      )}
    </>
  );
};
