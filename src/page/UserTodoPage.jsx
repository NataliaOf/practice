import '../App.css';
import User from '../components/user/User';
import Form from '../components/todoApp/Form';
import TodoItem from '../components/todoApp/TodoItem';
import { useSelector } from 'react-redux';
import Posts from '../components/posts/Posts';

const UserTodo = ()=>{
   const todos = useSelector((state)=>state.todo.todos)

   return(
   <div className="user_todo">
      <h2>UserTodo</h2>
      <div className='todo_box'>
      <User/>
     <div>
       <Form/>
       {todos===[]? ''
        : todos.map(todo=>(
           <TodoItem key={todo.id} todo={todo}/>
         ))
       }
     </div>
     <Posts/>

      </div>
      
      

   </div>
   )
}
export default UserTodo;