import { useState } from 'react'
import './form.css';
import Alert from './Alert'
function Form() {
  const [person, setPerson] = useState(
    {
      name: "",
      phone: "",
      age: "",
      isEmplyee: false,
      salary: "1000",
    })

  function handleNameInput(event) {
    setPerson({
      ...person,
      name: event.target.value,
    });
  }


  function handlePhoneInput(event) {

    setPerson({
      ...person,
      phone: event.target.value,
    })
  }

  function handleAgeInput(event) {
    setPerson({
      ...person,
      age: event.target.value
    });

  }
  function handleWorkInput(event) {
    setPerson({ ...person, isEmplyee: event.target.checked })
  }
  function handleSalaryInput(event) {
    setPerson({ ...person, salary: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  let isSubmitDisabled = (person.name.trim() == "" ||
    person.phone.length > 12 ||
    (person.age < 18 || person.age > 100)
  )
  return (

    <form>
      <ul>
        <label for="name">Name</label>
        <li><input onChange={handleNameInput} value={person.name} id="name" type="text" /></li>

        <label for="phone">Phone Number</label>
        <li><input onChange={handlePhoneInput} value={person.phone} id="phone" type="text" /></li>

        <label for="age">Age</label>
        <li><input onChange={handleAgeInput} value={person.age} id="age" type="number" /></li>

        <label for="isEmplyee">Are you Emplyee? </label>
        <li><input onClick={handleWorkInput} checked={person.isEmplyee} id="isEmplyee" type="checkbox" /></li>

        <label for="salary">Salary{person.salary}</label>
        <li>
          <select onChange={handleSalaryInput} id="salary" type="text" >
            <option value="500">less than $500</option>
            <option selected value="1000">Between $500 and $2000</option>
            <option value="3000">Above $2000</option>
          </select>
        </li>

        <li><input onClick={handleSubmit} type="submit" value="Submit" disabled={isSubmitDisabled} /></li>
      </ul>
      <Alert />
    </form >
  )
}

export default Form;