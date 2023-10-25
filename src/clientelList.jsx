import { useEffect, useState } from "react";
import { getClientel } from "./api/genericFunctions";
import { useAuth } from "./authProvider";
import { useCoach } from "./coachProvider";
import { format } from "date-fns";

export const ClientelList = () => {
  const { clientel, setClientel, selectedClient, setSelectedClient } =
    useCoach();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getClientel(user.role, user.id)
      .then((data) => {
        setClientel(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setClientel, user.id, user.role]);

  const handleSelectClient = (user) => {
    setSelectedClient(user.id);
    console.log(selectedClient);
  };

  return (
    <div className="data-container">
      <div className="headers">
        <h4>Creation Date</h4>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Role</h4>
        <h4>See Profile</h4>
      </div>
      <div className="data-bits">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : clientel && clientel.length > 0 ? (
          clientel.map((client) => (
            <div className="data-byte" key={client.id}>
              <p>{format(new Date(client.createdAt), "MM/dd/yyyy")}</p>
              <p>{client.name}</p>
              <p>{client.email}</p>
              <p>{client.role}</p>
              <button onClick={() => handleSelectClient(client)}>
                See Profile
              </button>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
