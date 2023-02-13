import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AllService from '../services/AllServices'

const EventAdmin = (props: { id:string}) => {
    const [idu, setIdu] = useState(props.id)
    const [todos, setTodos] = useState([])
    const [user, setUser] = useState([])

    const navigate = useNavigate();
    useEffect(() => {
        
        getAllTodosbyIdUser();
        getUserbyId();
    }, [])
    
       
    const getAllTodosbyIdUser = () => {
        const a=props.id;
        AllService.getAllTodosbyIdUser(a).then((response: { data: React.SetStateAction<never[]> }) => {
            setTodos(response.data)
            console.log(response.data);
        }).catch((error: any) =>{
            console.log(error);
        })
    }
    const getUserbyId = () => {
        const a=props.id;
        AllService.getUserById(a).then((response: { data: React.SetStateAction<never[]> }) => {
            setUser(response.data)
            console.log(response.data);
        }).catch((error: any) =>{
            console.log(error);
        })
    }
    const deleteTodo = (todoId: any) => {
        AllService.deleteTodo(todoId).then((response: any) =>{
            
       }).catch((error: any) =>{

           
       })
       navigate('/')
    }
    
    return (
        <div className='auth-wrapper'>
        <div className="auth-inner">
        <div className = "container">
            <h2 className = "text-center"> List des Todos </h2>
            <Link to = "/addtodo" className = "btn btn-success mb-2" > créer Todo </Link>
            <table className="table table-bordered ">
                <thead>
                    <tr>
                    
                    <th> Title </th>
                    <th> Description </th>
                    <th> Statue </th>
                    <th> Actions </th></tr>
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo =>
                            <tr key = {todo['id']}> 
                                
                                <td> {todo['title']} </td>
                                <td> {todo['description']} </td>
                                <td> {todo['statue']} </td>
                                <td>
                            
                                    <Link className="btn btn-info" to={`/edit-todo/${todo['id']}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteTodo(todo['id'])} style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
}

export default EventAdmin