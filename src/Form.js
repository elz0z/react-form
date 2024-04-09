import { useState } from "react";
import "./form.css";
import Alert from "./Alert";
function Form() {
    const [person, setPerson] = useState({
        name: "",
        phone: "",
        age: "",
        isEmplyee: false,
        salary: "1000"
    });
    const [showModal, setShowModal] = useState(false);

    const [errorMsg, setErrorMsg] = useState(null);

    function handleNameInput(event) {
        setPerson({
            ...person,
            name: event.target.value
        });
    }
    function handlePhoneInput(event) {
        setPerson({
            ...person,
            phone: event.target.value
        });
    }
    function handleAgeInput(event) {
        setPerson({
            ...person,
            age: event.target.value
        });
    }
    function handleWorkInput(event) {
        setPerson({ ...person, isEmplyee: event.target.checked });
    }
    function handleSalaryInput(event) {
        setPerson({ ...person, salary: event.target.value });
    }
    /* 
** if we want to ignore alert and modal msg just dlt this comment and replace false in line 143 by isSubmitDisabled
** then remove all conditions in handleSubmit function 


    const isSubmitDisabled =
        person.name.trim() === "" ||
        person.phone.length > 12 ||
        person.phone.length < 10 ||
        person.age < 18 ||
        person.age > 100;
        
*/
    function handleSubmit(event) {
        setErrorMsg(null);
        event.preventDefault();
        if (person.name.trim() == "") {
            setErrorMsg("Missing Name");
        } else if (person.phone.length < 10 || person.phone.length > 15) {
            setErrorMsg("Phone Number Is Not Allowed");
        } else if (person.age < 18 || person.age > 100) {
            setErrorMsg("Age Is Not Allowed");
        }
        setShowModal(true);
    }

    function handleHideModal() {
        showModal && setShowModal(false);
    }

    return (
        <div
            onClick={handleHideModal}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%"
            }}
        >
            <div className="form-container">
                <h1>Requeating a loan</h1>
                <hr />
                <form>
                    <ul>
                        <label for="name">Name</label>
                        <li>
                            <input
                                onChange={handleNameInput}
                                value={person.name}
                                id="name"
                                type="text"
                            />
                        </li>

                        <label for="phone">Phone Number</label>
                        <li>
                            <input
                                onChange={handlePhoneInput}
                                value={person.phone}
                                id="phone"
                                type="text"
                            />
                        </li>

                        <label for="age">Age</label>
                        <li>
                            <input
                                onChange={handleAgeInput}
                                value={person.age}
                                id="age"
                                type="number"
                            />
                        </li>

                        <label for="isEmplyee">Are You Emplyee ? </label>
                        <li>
                            <input
                                onClick={handleWorkInput}
                                checked={person.isEmplyee}
                                id="isEmplyee"
                                type="checkbox"
                            />
                        </li>

                        <label for="salary">Salary</label>
                        <li>
                            <select
                                onChange={handleSalaryInput}
                                id="salary"
                                type="text"
                            >
                                <option value="500">less than $500</option>
                                <option selected value="1000">
                                    Between $500 and $2000
                                </option>
                                <option value="3000">Above $2000</option>
                            </select>
                        </li>

                        <li>
                            <input
                                onClick={handleSubmit}
                                type="submit"
                                value="Submit"
                                disabled={false}
                            />
                        </li>
                    </ul>

                    <Alert show={showModal} errorMsg={errorMsg} />
                </form>
            </div>
        </div>
    );
}

export default Form;
