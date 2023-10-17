import { useAuth } from "./authProvider";
import { Login } from "./login";
import { ProfilePage } from "./profilePage";
import { SubmissionProvider } from "./submissionProvider";


export const Structure = () => {
    const { user } = useAuth();
    return(
        <>
        {
            user ?
            <SubmissionProvider>
                <ProfilePage />
            </SubmissionProvider>
            :
            <Login />
        }
        </>
    )
}