import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";

const Login = (props: { setNom: (nom: string) => void ,setId: (id: string) => void ,setRole: (role: string) => void,setPrenom: (prenom: string) => void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        setNavigate(true);
        props.setNom(content.nom);
        props.setId(content.id);
        props.setRole(content.role);
        props.setPrenom(content.prenom);
    }

    if (navigate) {
        return <Navigate to="/"/>;
    }

    return (
        <div className= "sides">
            <div className='left-side'>
                <div className='imag-side'></div>
            </div>
            <div className="right-side">
        <form onSubmit={submit}>
            <h3>Login</h3>
            <label> Email </label>
            <input type="email" className="form-control" placeholder="Email" required
                   onChange={e => setEmail(e.target.value)}
            />
            <label> Password </label>
            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />
            <br></br>
            <button className="w-100 btn btn-lg btn-success colorB" type="submit">Sign in</button>
        </form>
        </div>
        </div>
    );
};

export default Login;