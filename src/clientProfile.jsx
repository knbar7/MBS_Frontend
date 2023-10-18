import './index.css'
import { IntentionForm } from './intentionForm';
import { ThreeToOneForm } from './threeToOneForm';
import { useSubmission } from './submissionProvider';
import { SubmissionHistory } from './submissionHistory';

export const ClientProfile = () => {
    const { formContent, infoContent } = useSubmission(); // Declare infoContent

    return (
        <div className="client-content">
            {formContent === 'intention' ? (
                <IntentionForm />
            ) : (
                <ThreeToOneForm />
            )}
            <div className="daily-items-container">
                <div className="tab-selector">
                    <div className="selection-box unclickable-left">
                        <h4>Descriptions</h4>
                    </div>
                    <div className="selection-box clickable">
                        <h4>Previous Submissions</h4>
                    </div>
                </div>
                {infoContent === 'descriptions' ? (
                    formContent === 'intention' ? (
                        <>
                            <h2>Intention</h2>
                            <p className='description'>Intention is the focus for the day. This should be phrased as a cue itself and should be the overarching objective of the day</p>
                            <h2>Cues</h2>
                            <p className='description'>Cues are actionable 2 to 3 word phrases that you will use throughout the day to direct your actions in order to accomplish your intention. </p>
                        </>
                    ) : (
                        <>
                            <h2>Three-to-One</h2>
                            <h3>What worked?</h3>
                            <p className='description'>Find 3. Look through your day to find the outcomes that you liked. Think what went well? Then ask yourself what did I do that caused that</p>
                            <h3>To improve</h3>
                            <p className='description'>Find 1. Look through your day and pick one thing that you would like to improve. This should be a cue as well. Ask yourself, what would I like to do or try that I did not.</p>
                        </>
                    )
                ) : (
                    <SubmissionHistory />
                )}
            </div>
        </div>
    )
};
