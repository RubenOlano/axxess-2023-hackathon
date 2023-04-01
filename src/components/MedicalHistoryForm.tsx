import {useState} from "react";

const Create = () => {
    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');


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
            </form>
        </div>
    )
}

export default Create