import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from 'react-router-dom';

const Register = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [dateN,setDate] = useState('');
    const [genre,setGenre] = useState('');
    const [photo, setPhoto] = useState('');
    const [cv, setCv] = useState('');
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
                dateN,
                genre,
                password,
                photo,
                cv
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
                <div className="form-group">
					<label> Date de naissance </label> 
                    <input type="date" className="form-control" 
                    onChange={e => setDate(e.target.value)}/>
				</div>
                <div className="form-groupe">
                    <label> Genre </label>
                    <select className="form-control" onChange={e => setGenre(e.target.value)}> 
                    <option value="">--Veuillez choisir--</option>  
                    <option value="Homme">Homme</option>
                    <option value="Femme">Femme</option>
                    </select>
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
                
                <div className="form-groupe">
                    <label>Photo</label><br></br>
                    <input type="file" value={photo}
                    accept="image/png, image/jpeg"
                    onChange={(e) => setPhoto(e.target.value)}/>

                </div>

                <div className="form-groupe">
                    <label>CV</label><br></br>
                    <input type="file" value={cv}
                    accept="image/png, image/jpeg" 
                    onChange={(e) => setCv(e.target.value)}/>
    

                </div>
                <br></br>
                <button className="w-100 btn btn-lg btn-success colorB" type="submit">Sign Up</button>
            </form>
            </div>
            </div>
    );
};

export default Register;