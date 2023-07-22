import { useDispatch } from 'react-redux';
import { deleteTodo,toggleStatus } from '../../store/todo2Slice';
import './todo.css';
import '../../App.css'

const TodoItem = ({todos})=>{
 const dispatch = useDispatch()

   return(
      <div className="todo_item">
        <input className="todo_checked"
         type="checkbox"
         checked={todos. completed}
         onChange={()=> dispatch(toggleStatus(todos.id))}
       />
      
        <p>{todos.title}</p>
        <button type="button" onClick={()=>dispatch(deleteTodo(todos.id))}>remove</button>
      </div>
   )
}

export default TodoItem ;