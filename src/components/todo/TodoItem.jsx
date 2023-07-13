import { useDispatch } from 'react-redux';
import { removeTodo,toggleTodoComplete } from '../../store/todo2Slice';
import './todo.css';
import '../../App.css'

const TodoItem = ({todos})=>{
  
 const dispatch = useDispatch()

   return(
      <div className="todo_item">
        <input
         type="checkbox"
         checked={todos. completed}
         onChange={()=>dispatch(toggleTodoComplete(todos.id))}
         />
        <p>{todos.text}</p>
        <button type="button" onClick={()=>dispatch(removeTodo(todos.id))}>remove</button>
      </div>
   )
}

export default TodoItem ;