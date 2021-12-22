import { useState, createContext } from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ password, setPassword ] = useState('');

    const state = {
        nameState: [ name, setName ],
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