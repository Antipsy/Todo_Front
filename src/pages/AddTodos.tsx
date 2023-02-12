import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import AllService from '../services/AllServices'

const AddTodos = (props: { idu:string}) => {
    const [idu, setIdu] = useState(props.idu)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [statue, setStatue] = useState('')
    const [user, setUser] = useState(props.idu)
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const todo = {title,description,statue,user}

        if(id){
            AllService.updateTodo(id, todo).then((response) => {
                navigate('/userTodo')
            }).catch(error => {
                console.log(error)
            })

        }else{
            AllService.createTodo(idu, todo).then((response) =>{

                console.log(response.data)
    
                navigate('/userTodo');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        AllService.getTodoById(id).then((response) =>{
            setTitle(response.data.title)
            setDescription(response.data.description)
            setStatue(response.data.statue)
            setUser(response.data.user)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const titl = () => {

        if(id){
            return <h2 className = "text-center">Update Todo</h2>
        }else{
            return <h2 className = "text-center">Add Todo</h2>
        }
    }

    return (
        <div className='auth-wrapper'>
        <div className="auth-inner">
           <div className = "container">
                
                       {
                           titl()
                       }
                        
                            <form>
                                <div className = "form-group">
                                <label className = "form-label">  Todo :</label>
                                
                                    <label className = "form-label">  Title :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Title"
                                        name = "title"
                                        className = "form-control"
                                        value = {title}
                                        onChange = {(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                    <label className = "form-label">  Description  :</label>
                                    <textarea
                                         
                                        placeholder = "Description"
                                        name = "description"
                                        className = "form-control"
                                        value = {description}
                                        onChange = {(e) => setDescription(e.target.value)}
                                    >
                                    </textarea>
                                    <label className = "form-label">  Statue :</label>
                                        <select className="form-control" onChange={(e) => setStatue(e.target.value)}> 
                                        <option value="" >choose :</option>
                                        <option value="Completed" >Completed</option>
                                        <option value="Uncompleted">Uncompleted</option>
                                        
                                        </select>
                                    
                                </div>

                                

                                

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEvent(e)} >Submit </button>
                                <Link to="/userTodo" className="btn btn-danger"> Cancel </Link>
                            </form>

                        
                

           </div>

        </div>
        </div>
    )
}

export default AddTodos