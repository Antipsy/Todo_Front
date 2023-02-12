import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from 'react-router-dom';

const Register = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
    
        await fetch('http://localhost:8080/registration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nom,
                prenom,
                email,
                password
            })
        });

        setRedirect(true);
    }
    if (redirect) {
        return <Navigate to="/login"/>;
    }
       

    return (
        <div className= "sides">
            <div className='left-side'>
                <div className='imag-side'></div>
            </div>
            <div className="right-side">
        <form onSubmit={submit}>
                <h3>Sign Up</h3>

                <div className="form-groupe">
                    <label>Nom</label>
                    <input type="text" className="form-control" placeholder="Nom" 
                     onChange={e => setNom(e.target.value)}/>

                </div>
                <div className="form-groupe">
                    <label>Prenom</label>
                    <input type="text" className="form-control" placeholder="Prenom" 
                    onChange={e => setPrenom(e.target.value)}/>

                </div>
                <div className="form-groupe">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" 
                    onChange={e => setEmail(e.target.value)}/>

                </div>
                
                <div className="form-groupe">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="*******" 
                    onChange={e => setPassword(e.target.value)}/>

                </div>
                
                <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up</button>
            </form>
            </div>
            </div>
    );
};

export default Register;