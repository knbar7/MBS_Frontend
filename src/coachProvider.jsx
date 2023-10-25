import { createContext, useContext, useState } from "react";

const CoachContext = createContext({});

export const CoachProvider = ({ children }) => {
  const [clientel, setClientel] = useState([]);
  const [selectedClient, setSelectedClient] = useState(66);

  return (
    <CoachContext.Provider
      value={{
        clientel,
        setClientel,
        selectedClient,
        setSelectedClient,
      }}
    >
      {children}
    </CoachContext.Provider>
  );
};

export const useCoach = () => {
  const context = useContext(CoachContext);
  return {
    clientel: context.clientel,
    setClientel: context.setClientel,
    selectedClient: context.selectedClient,
    setSelectedClient: context.setSelectedClient,
  };
};
