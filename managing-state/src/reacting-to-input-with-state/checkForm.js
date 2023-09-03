import { useState } from "react";

export default function CheckForm(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');


    const fullName2 = firstName + ' ' + lastName;
    function handleFirstNameChange(e){
        setFirstName(e.target.value);
        // setFullName(firstName + ' ' + lastName); // firstName이 하나씩 밀려서 갱신됨.
        setFullName(e.target.value + ' ' + lastName)
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
        setFullName(firstName + ' ' + e.target.value);
    }

    return(
        <form>
            <h1>Let's check you in</h1>
            <label>First name: </label>
            <input
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <label>Last name: </label>
            <input
                value={lastName}
                onChange={e=>handleLastNameChange(e)}
            />
            <p>{fullName2}</p>
        </form>
    )
}