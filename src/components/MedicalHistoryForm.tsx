import {ChangeEvent, useState} from "react";

const pmh = ["ADHD", "Alcoholism", "Allergies", "Anemia", "Anxiety", "Arrhytmia", "Arthritis",
    "Asthma", "Bipolar", "Bladder Problems/Incontinence", "Bleeding Problems", "Cancer", "Headaches",
    "Chron's Disease", "COPD/Emphysema", "Dementia", "Depression", "Diabetes: 1 or 2", "Diverticulitis",
    "DVT", "GERD", "Glaucoma", "Heart Disease", "Heart Attack", "Hiatal Hernia", "High Blood Pressure", "Kidney Stones",
    "Kidney Disease", "High Cholesterol", "HIV", "Hepatitis", "IBS", "Lupus", "Liver Disease", "Macular Degeneration",
    "Neuropathy", "Osteopenia/Osteoporosis", "Parkinson's", "PVD", "Peptic Ulcer", "Psoriasis",
    "Pulmonary Embolism", "Rheumatoid Arthritis", "Seizure Disorder", "Sleep Apnea", "Stroke",
    "Thyroid Disorder", "Ulcerative Colitis"]

const Create = () => {
    
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [personalMedHist, setPersonalMedHist] = useState<string[]>([])

    function handleChange(event: ChangeEvent<HTMLInputElement>)
    {
        const {value, checked} = event.target

        if(checked)
        {
            setPersonalMedHist(pre => [...pre,value])
        }
        else
        {
            setPersonalMedHist(pre =>{
                return [...pre.filter(skill => skill != value)]
            })
        }
    }

    return (
        <div className = "create">
            <h2>Medical History</h2>
            <form>
                <label>First Name:</label>
                <input
                    type="text"
                    required
                    value = {firstName}
                    onChange = {(e) => setFirstName(e.target.value)}
                    />
                <label>Last Name:</label>
                <input
                    type="text"
                    required
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                    />
                {pmh.map((pmh, index) => (
                    <div>
                    <input
                        key={index}
                        type="checkbox"
                        required
                        value={pmh}
                        onChange = {handleChange}
                    />
                    {pmh}</div>
                ))}
            </form>
        </div>
    )
}

export default Create