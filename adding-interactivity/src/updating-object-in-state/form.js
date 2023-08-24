import {useState} from 'react';

export default function Form(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'gg@naver.com'
    });

    function handleFirstNameChange(e){
        
        /*
        person.firstName = e.target.value;
        와 다른 handleOtherChange과 사용할 경우,
        " 가장 마지막에 firstName input에 입력된 문자 1개가 추가된다. "
        
        이유는 firstName에 저장되는 값이 e.target.value이기 때문이다.

        ex)
        abc에 de를 연속해서 입력할 경우,
        abc + 'de' -> abc + 'd' + 'e'가 된다.
        실제 수행은
        person.firtName = e.target.value(=== abc + 'd');
        person.firsName = e.target.value(=== abc + 'e');
        를 차례로 수행한 것과 같다.
        이후 setPerson을 통해 rendering을 하면, 가장 마지막 person.firstName의 값으로 저장되기 때문에,
        가장 마지막에 firstName input에 입력된 문자 1개가 추가된 형태로 출력된다.

        */

        setPerson({
            ...person,
            firstName: e.target.value,
            // lastName: person.lastName,
            // email: person.email
        });
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value,
        });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    function handlePerson(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

    return(
        <>
            <label>
                First name: 
                <input
                    name = 'firstName'
                    value={person.firstName}
                    onChange={handlePerson}
                    />
            </label>
            <label>
                Last name:
                <input
                    name = 'lastName'
                    value={person.lastName}
                    onChange={handlePerson}
                />
            </label>
            <label>
                Email:
                <input
                    name = 'email'
                    value={person.email}
                    onChange={handlePerson}
                />
            </label>
            <p>
                {person.firstName} {person.lastName} ({person.email})
            </p>
        </>
    )
}