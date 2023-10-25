import { ClientelList } from "./clientelList";
import { useCoach } from "./coachProvider";
import { SubmissionHistory } from "./submissionHistory";

export const CoachProfile = () => {
  const { selectedClient, loading } = useCoach();
  console.log(selectedClient);

  return (
    <div className="coach-content">
      <div className="half-screen">
        <ClientelList />
      </div>
      <div className="half-screen">
        {loading ? (
          <p>Loading...</p>
        ) : selectedClient ? (
          <div className="client-content">
            <SubmissionHistory
              userId={selectedClient}
              formContent="intention"
              key={selectedClient + 1}
            />
            <SubmissionHistory
              userId={selectedClient}
              formContent="three-to-one"
              key={selectedClient}
            />
          </div>
        ) : (
          <p>Select a client to view submission history</p>
        )}
      </div>
    </div>
  );
};
