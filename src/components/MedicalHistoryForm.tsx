import { type ChangeEvent, useState } from "react";
import { number } from "zod";

/*const pmh = [
  "ADHD",
  "Alcoholism",
  "Allergies",
  "Anemia",
  "Anxiety",
  "Arrhytmia",
  "Arthritis",
  "Asthma",
  "Bipolar",
  "Bladder Problems/Incontinence",
  "Bleeding Problems",
  "Cancer",
  "Headaches",
  "Chron's Disease",
  "COPD/Emphysema",
  "Dementia",
  "Depression",
  "Diabetes: 1 or 2",
  "Diverticulitis",
  "DVT",
  "GERD",
  "Glaucoma",
  "Heart Disease",
  "Heart Attack",
  "Hiatal Hernia",
  "High Blood Pressure",
  "Kidney Stones",
  "Kidney Disease",
  "High Cholesterol",
  "HIV",
  "Hepatitis",
  "IBS",
  "Lupus",
  "Liver Disease",
  "Macular Degeneration",
  "Neuropathy",
  "Osteopenia/Osteoporosis",
  "Parkinson's",
  "PVD",
  "Peptic Ulcer",
  "Psoriasis",
  "Pulmonary Embolism",
  "Rheumatoid Arthritis",
  "Seizure Disorder",
  "Sleep Apnea",
  "Stroke",
  "Thyroid Disorder",
  "Ulcerative Colitis",
];*/

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [singleMed, setSingleMed] = useState("")
  const [personalMedHist, setPersonalMedHist] = useState<string[]>([]);

  const addField = () =>{
    setPersonalMedHist([...personalMedHist, singleMed])
    setSingleMed("")
  }
  const removeField = (index: number) =>{
    const list = [...personalMedHist]
    list.splice(index,1);
    setPersonalMedHist(list);
  }

//   function handleChange(event: ChangeEvent<HTMLInputElement>) {
//     const { value, checked } = event.target;

//     if (checked) {
//       setPersonalMedHist((pre) => [...pre, value]);
//     } else {
//       setPersonalMedHist((pre) => {
//         return [...pre.filter((skill) => skill != value)];
//       });
//     }
//   }

  return (
    <div className="create">
      <h2 className="mb-4 text-2xl font-bold">Medical History</h2>
      <form className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            type="text"
            required
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
            type="text"
            required
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700">
            Personal Medical History (Any surgeries, complications, diseases):
          </label>
          <input
                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                    type="text"
                    id="singleMed"
                    value={singleMed}
                    onChange={(e) => setSingleMed(e.target.value)} />
                    <button type="button" onClick ={addField}>Add</button>

          {personalMedHist.map((x,i) => {
            return(
                <div className = "flex">
                    <p>{x}</p>
                    <button onClick={() => removeField(i)}>Remove</button>
                </div>
          )
          })}


        </div>
        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="button"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Create;
