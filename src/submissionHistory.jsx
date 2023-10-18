import { useEffect, useState } from "react";
import { getData } from "./api/genericFunctions";
import { useAuth } from "./authProvider";
import { useSubmission } from "./submissionProvider";
import { format } from "date-fns";

export const SubmissionHistory = () => {
    const { formContent } = useSubmission();
    const { user } = useAuth();
    const [intentionData, setIntentionData] = useState([]);
    const [threeToOneData, setThreeToOneData] = useState([]);

    useEffect(() => {
        // Fetch intention data when the component mounts and whenever user or formContent changes
        if (formContent === 'intention') {
            getData('intention', user.id).then((data) => {
                setIntentionData(data);
            });
        } else {
            getData('three-to-one', user.id).then((data) => {
                setThreeToOneData(data);
            });
        }
    }, [user.id, formContent]);

    return(
        <div className="data-container">
            <div className="headers">
                {formContent === 'intention' ? (
                    <>
                        <h4>Date</h4>
                        <h4>Intention</h4>
                        <h4>Cue 1</h4>
                        <h4>Cue 2</h4>
                        <h4>Cue 3</h4>
                    </>
                ) : (
                    <>
                        <h4>Date</h4>
                        <h4>Worked 1</h4>
                        <h4>Worked 2</h4>
                        <h4>Worked 3</h4>
                        <h4>Improve 1</h4>
                    </>
                )}
            </div>
            <div className="data-bits">
                {formContent === 'intention' ? (
                    intentionData.length > 0 ? (
                        intentionData.map((data) => (
                            <div className="data-byte" key={data.id}>
                                <p>{format(new Date(data.createdAt), 'MM/dd/yyyy')}</p>
                                <p>{data.intention}</p>
                                <p>{data.cue1}</p>
                                <p>{data.cue2}</p>
                                <p>{data.cue3}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available for intention.</p>
                    )
                ) : (
                    threeToOneData.length > 0 ? (
                        threeToOneData.map((data) => (
                            <div className="data-byte" key={data.id}>
                                <p>{format(new Date(data.createdAt), 'MM/dd/yyyy')}</p>
                                <p>{data.intention}</p>
                                <p>{data.cue1}</p>
                                <p>{data.cue2}</p>
                                <p>{data.cue3}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available for three-to-one.</p>
                    )
                )
                }
            </div>
        </div>
    );
};
