import './index.css'
import { useState } from 'react';
import { handleSubmitGeneric } from './api/genericFunctions';

export const ClientProfile = () => {
    const [formContent, setFormContent] = useState('intention');
    const [intention, setIntention] = useState('');
    const [cue1, setCue1] = useState('');
    const [cue2, setCue2] = useState('');
    const [cue3, setCue3] = useState('');
    const [worked1, setWorked1] = useState('');
    const [worked2, setWorked2] = useState('');
    const [worked3, setWorked3] = useState('');
    const [improve1, setImprove1] = useState('');


    const handleClick = () => {
        if (formContent === 'intention') {
            setFormContent('three-to-one');
        } else {
            setFormContent('intention');
        }
    }

    const handleSubmitIntention = (e) => {
        e.preventDefault();
        
        let keys = [];
        let formData = {};
    
        if (formContent === 'intention') {
            keys = ['intention', 'cue1', 'cue2', 'cue3'];
            formData = {
                intention,
                cue1,
                cue2,
                cue3,
            };
        }
    
        handleSubmitGeneric(formContent, keys, formData);
    }

    const handleSubmitThreeToOne = (e) => {
        e.preventDefault();
        
        let keys = [];
        let formData = {};
    
        if (formContent === 'three-to-one') {
            keys = ['worked1', 'worked2', 'worked3', 'improve1'];
            formData = {
                worked1,
                worked2,
                worked3,
                improve1,
            };
        }
    
        handleSubmitGeneric(formContent, keys, formData);
    }    

    const handleChange = (e, selection) => {
        const value = e.target.value;

        switch (selection) {
            case 'intention':
                setIntention(value);
                break;
            case 'cue1':
                setCue1(value);
                break;
            case 'cue2':
                setCue2(value);
                break;
            case 'cue3':
                setCue3(value);
                break;
            case 'worked1':
                setWorked1(value);
                break;
            case 'worked2':
                setWorked2(value);
                break;
            case 'worked3':
                setWorked3(value);
                break;
            case 'improve1':
                setImprove1(value);
                break;
            default:
                break;
        }
    }

    return(
        <div className="client-content">
            {
                formContent === 'intention' ?
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
                :
                <div className="daily-items-container">
                    <div className="tab-selector">
                        <div className="selection-box clickable" onClick={() => handleClick}>
                            <h4>Intention</h4>
                        </div>
                        <div className="selection-box unclickable-right">
                            <h4 className='hidden'>Three-to-One</h4>
                        </div>
                    </div>
                    <h2>Three to One</h2>
                    <br />
                    <form onSubmit={handleSubmitThreeToOne} className="input-form">
                        <input type="text" name="worked1" placeholder='Worked 1' onChange={(e) => handleChange(e, 'worked1')} />
                        <input type="text" name="worked2" placeholder='Worked 2' onChange={(e) => handleChange(e, 'worked2')} />
                        <input type="text" name="worked3" placeholder='Worked 3' onChange={(e) => handleChange(e, 'worked3')} />
                        <input type="text" name="improve1" placeholder='Improve 1' onChange={(e) => handleChange(e, 'improve1')} />
                        <input type="submit" className='submit-button' />
                    </form>
                </div>
            }
            {
                formContent === 'intention' ?
                <div className="daily-items-container">
                    <h2>Intention</h2>
                    <p className='description'>Intention is the focus for the day. This should be phrased as a cue itself and should be the overarching objective of the day</p>
                    <h2>Cues</h2>
                    <p className='description'>Cues are actionable 2 to 3 word phrases that you will use throughout the day to direct your actions in order to accomplish your intention. </p>
                </div>
                :
                <div className="daily-items-container">
                    <h2>Three-to-One</h2>
                    <h3>What worked?</h3>
                    <p className='description'>Find 3. Look through your day to find the outcomes that you liked. Think what went well? Then ask yourself what did I do that caused that</p>
                    <h3>To improve</h3>
                    <p className='description'>Find 1. Look through your day and pick one thing that you would like to improve. This should be a cue as well. Ask yourself, what would I like to do or try that I did not.</p>
                </div>
            }
        </div>
    )
}