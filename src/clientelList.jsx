import { useEffect } from "react";
import { getClientel } from "./api/genericFunctions";
import { useAuth } from "./authProvider";
import { useCoach } from "./coachProvider";
import { format } from "date-fns";

export const ClientelList = () => {
    const { clientel, setClientel } = useCoach();
    const { user } = useAuth();
    
    useEffect(() => {
        getClientel(user.role, user.id).then((data) => {
            setClientel(data);
        })
    }, [clientel, setClientel, user.id, user.role])

    return(
        <div className="data-container">
            <div className="headers">
                <h4>Name</h4>
                <h4>Creation Date</h4>
                <h4>See Profile</h4>
            </div>
            <div className="data-bits">
                {
                    clientel.length > 0 ? (
                    clientel.map((data) => {
                        <div className="data-byte">
                            <p>{data.name}</p>
                            <p>{format(new Date(data.createdAt),"MM/dd/yyyy")}</p>
                            <button>See Profile</button>
                        </div>
                    })
                    ) : (
                        <p>No data available</p>
                    )
                }
            </div>
        </div>
    )
}