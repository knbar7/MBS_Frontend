import { useSubmission } from "./submissionProvider"

export const IntentionForm = () => {
    const { handleChange, handleClick, handleSubmitIntention } = useSubmission();

    return(
        <div className="daily-items-container">
            <div className="tab-selector">
                <div className="selection-box unclickable-left">
                    <h4>Intention</h4>
                </div>
                <div className="selection-box clickable" onClick={handleClick}>
                    <h4>Three-to-One</h4>
                </div>
            </div>
            <h2>Intention</h2>
            <br />
            <form onSubmit={handleSubmitIntention} className="input-form">
                <input type="text" name="intention" placeholder='Intention' onChange={(e) => handleChange(e, 'intention')} />
                <input type="text" name="cue1" placeholder='Cue 1' onChange={(e) => handleChange(e, 'cue1')} />
                <input type="text" name="cue2" placeholder='Cue 2' onChange={(e) => handleChange(e, 'cue2')} />
                <input type="text" name="cue3" placeholder='Cue 3' onChange={(e) => handleChange(e, 'cue3')} />
                <input type="submit" className='submit-button' />
            </form>
        </div>
    )
}