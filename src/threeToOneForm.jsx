import { useAuth } from "./authProvider";
import { useSubmission } from "./submissionProvider"

export const ThreeToOneForm = () => {
    const { handleChange, handleClick, handleSubmitThreeToOne } = useSubmission();
    const { user } = useAuth();

    return(
        <div className="daily-items-container">
                    <div className="tab-selector">
                        <div className="selection-box clickable" onClick={handleClick}>
                            <h4>Intention</h4>
                        </div>
                        <div className="selection-box unclickable-right">
                            <h4 className='hidden'>Three-to-One</h4>
                        </div>
                    </div>
                    <h2>Three to One</h2>
                    <br />
                    <form onSubmit={(e) => handleSubmitThreeToOne(e, user.id)} className="input-form">
                        <input type="text" name="worked1" placeholder='Worked 1' onChange={(e) => handleChange(e, 'worked1')} />
                        <input type="text" name="worked2" placeholder='Worked 2' onChange={(e) => handleChange(e, 'worked2')} />
                        <input type="text" name="worked3" placeholder='Worked 3' onChange={(e) => handleChange(e, 'worked3')} />
                        <input type="text" name="improve1" placeholder='Improve 1' onChange={(e) => handleChange(e, 'improve1')} />
                        <input type="submit" className='submit-button' />
                    </form>
                </div>
    )
}