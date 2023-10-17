import { useState, useContext, createContext } from "react"
import { handleSubmitGeneric } from "./api/genericFunctions";

const SubmissionContext = createContext({});

export const SubmissionProvider = ({children}) => {
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
        <SubmissionContext.Provider value={{
            formContent,
            setFormContent,
            intention,
            setIntention,
            cue1,
            setCue1,
            cue2,
            setCue2,
            cue3,
            setCue3,
            worked1,
            setWorked1,
            worked2,
            setWorked2,
            worked3,
            setWorked3,
            improve1,
            setImprove1,
            handleClick,
            handleSubmitIntention,
            handleSubmitThreeToOne,
            handleChange,
        }}>
        {children}
        </SubmissionContext.Provider>
    )
}

export const useSubmission = () => {
    const context = useContext(SubmissionContext);
    return{
        formContent: context.formContent,
        setFormContent: context.setFormContent,
        intention: context.intention,
        setIntention: context.setIntention,
        cue1: context.cue1,
        setCue1: context.setCue1,
        cue2: context.cue2,
        setCue2: context.setCue2,
        cue3: context.cue3,
        setCue3: context.setCue3,
        worked1: context.worked1,
        setWorked1: context.setWorked1,
        worked2: context.worked2,
        setWorked2: context.setWorked2,
        worked3: context.worked3,
        setWorked3: context.setWorked3,
        improve1: context.improve1,
        setImprove1: context.setImprove1,
        handleClick: context.handleClick,
        handleSubmitIntention: context.handleSubmitIntention,
        handleSubmitThreeToOne: context.handleSubmitThreeToOne,
        handleChange: context.handleChange,
    }
}