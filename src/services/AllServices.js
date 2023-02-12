import axios from 'axios';


const User_BASE_URL = 'http://localhost:8080/Users';
const Todo_BASE_URL = 'http://localhost:8080/Todos';
class AllServices{
    //GET
    
    getAllUsers(){
        return axios.get(User_BASE_URL)
    }
    
    
    getAllTodosbyIdUser(userId){
        return axios.get(Todo_BASE_URL + '/user/'+ userId)
    }

    //CREATE
    
    createTodo(userId, todo){
        return axios.put(User_BASE_URL+ '/' + userId + '/todo/', todo)
    }
    addTodo(userId,todoId){
        return axios.post(Todo_BASE_URL + userId +'/user/'+ todoId)
    }
    //GET with ID
    
    getUserById(userId){
        return axios.get(User_BASE_URL + '/'+ userId)
    }
    getTodoById(todoId){
        return axios.get(Todo_BASE_URL + '/'+ todoId)
    }

    //update
    
    
    updateTodo(todoId, todo){
        return axios.put(Todo_BASE_URL + '/' + todoId, todo);
    }
    //DELETE
    
    deleteTodo(todoId){
        return axios.delete(Todo_BASE_URL + '/' + todoId);
    }
}
export default new AllServices();