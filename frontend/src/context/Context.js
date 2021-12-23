import { useState, createContext } from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [ firstName, setFirstName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');

    const state = {
        firstNameState: [ firstName, setFirstName ],
        emailState: [ email, setEmail ],
        lastNameState: [ lastName, setLastName],
        passwordState: [ password, setPassword ]
    }

    return (
        <Context.Provider value={state} >
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }