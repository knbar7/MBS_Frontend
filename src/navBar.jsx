import { useAuth } from './authProvider'
import './index.css'

export const NavBar = () => {
    const { user } = useAuth();
    const name = user.name;
    return(
        <div className="nav-bar">
            <p>Welcome, {name}!</p>
        </div>
    )
}