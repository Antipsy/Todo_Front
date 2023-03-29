import React from 'react';

const Home = (props: { nom: string ,prenom:string,id:string}) => {
    
    return (
        <div className= "sides">
            <div className='left-side'>
                <div className='imag-side'></div>
            </div>
            <div className="right-side" style={{textAlign:'center'}}>
            <div className='cdg-img' style={{height:'300px'}}></div>
            <h2>
            {props.id? 'Welcome ' + props.prenom+' '+props.nom  : 'Bienvenu sur notre site 4D'}
            
            </h2>
            <p>
            {props.id? '': 'Veuillez vous remplir la formulaire'}</p>
            </div>
        </div>
        
    );
};

export default Home;