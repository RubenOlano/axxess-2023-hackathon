import { type ChangeEvent, useState } from "react";

const pmh = [
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
];

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalMedHist, setPersonalMedHist] = useState<string[]>([]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;

    if (checked) {
      setPersonalMedHist((pre) => [...pre, value]);
    } else {
      setPersonalMedHist((pre) => {
        return [...pre.filter((skill) => skill != value)];
      });
    }
  }

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
            Personal Medical History:
          </label>
          {pmh.map((pmh, index) => (
            <div key={index} className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                required
                value={pmh}
                onChange={handleChange}
              />
              <span className="text-gray-700">{pmh}</span>
            </div>
          ))}
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
