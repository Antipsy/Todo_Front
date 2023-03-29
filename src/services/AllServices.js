import axios from 'axios';


const User_BASE_URL = 'http://localhost:8080/Users';

class AllServices{
    //GET
    
    getAllUsers(){
        return axios.get(User_BASE_URL)
    }
    

    //CREATE
    
    createTodo(userId, todo){
        return axios.put(User_BASE_URL+ '/' + userId + '/todo/', todo)
    }
   
    //GET by ID
    
    getUserById(userId){
        return axios.get(User_BASE_URL + '/'+ userId)
    }
   
    
}
export default new AllServices();