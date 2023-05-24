import { useDispatch, useSelector } from 'react-redux';
import './form.css';
import {toggleCompletedTodo, removeTodo} from '../../features/todo/todoSlice'

const TodoItem = ({todo})=>{

const dispatch = useDispatch();

const toggleTodoHendler = (id)=>{
   dispatch(toggleCompletedTodo(id))
}

const removeTodoItem = (id)=>{
dispatch(removeTodo(id))
}
   return(
      <div className="todoItem">
        
            <button
            onClick={()=> toggleTodoHendler(todo.id) } type='button'>Complete</button>
            <p className={ todo.completed? '' :'completed' } >
               {todo.text}
            </p>
            <button onClick={()=>removeTodoItem(todo.id)} className="delete" type='button'>Delete</button>
        
        
        
        
       
      </div>
   )
}

export default TodoItem;