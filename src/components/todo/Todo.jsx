
import { useSelector } from 'react-redux';

import '../../App.css'
import ImputField from './ImputField';
import TodoItem from './TodoItem';
// import { addTodo } from '../../store/todo2Slice';

const Todo = ()=>{

   const todos =  useSelector(state => state.todos.todos);
  
   return(
      <div className="todo_component">
          <ImputField/>
         { todos.map(todo=>(
          <TodoItem key={todo.id} todos={todo}/>
         ))}
        
        
      </div>
   )
}

export default Todo ;