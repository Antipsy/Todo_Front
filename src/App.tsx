import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AddTodos from './pages/AddTodos';
import Todo from './pages/Todo';

function App() {
    const [nom, setNom] = useState('');
    const [id, setId] = useState('');
    const [role,setRole] = useState('');
    const [prenom,setPrenom] = useState('');
    useEffect(() => {
        (
            async () => {
                /*const response = await fetch('http://localhost:8080/Users/', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });
                
                const content = await response.json();
*/
                setNom(nom);
                setId(id);
                setRole(role);
                setPrenom(prenom);
            }
        )();
    });


    return (
        
          
            <BrowserRouter>
            
            <div className="App">
                <Nav nom={nom} setNom={setNom} id={id} setId={setId} role={role} setRole={setRole} prenom={prenom} setPrenom={setPrenom}/>
                
                <Routes>

                    <Route path = "/userTodo" element={<Todo id={id}/>}></Route>
                    <Route path = "/addtodo" element={<AddTodos idu={id}/>}></Route>
                    <Route path = "/edit-todo/:id" element={<AddTodos idu={id}/>}></Route>
                    <Route path = "/" element={<Home nom={nom} prenom={prenom} id={id}/>}></Route>
                    <Route path = "/login" element={<Login setNom={setNom} setId={setId} setRole={setRole} setPrenom={setPrenom}/>}></Route>
                    <Route path = "/register" element={<Register/>}></Route>
                    </Routes> 
                
               
               
                
                
                </div>
            </BrowserRouter>
        
    );
}

export default App;