import { SubmissionHistory } from "./submissionHistory";

export const ClientSubmissions = (clientId) => {
  return (
    <div className="client-content">
      <SubmissionHistory user={clientId} formContent={"intention"} />
      <SubmissionHistory user={clientId} formContent={"three-to-one"} />
    </div>
  );
};
