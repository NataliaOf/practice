import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import '../../App.css'
import ImputField from './ImputField';
import TodoItem from './TodoItem';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../store/todo2Slice';
// import { addTodo } from '../../store/todo2Slice';

const Todo = ()=>{
   const dispatch = useDispatch();
   const todos =  useSelector(state => state.todos.todos);
   const {status, error} = useSelector(state => state.todos);
  

   useEffect(()=>{
      dispatch(fetchTodos());
   },[dispatch]);
   return(
      <div className="todo_component">
          <ImputField/>
         
         {status === 'loading' && <h2>loading...</h2>}
         {error && <h2>An error occerd: {error}</h2>}

         { todos.map(todo=>(
          <TodoItem key={todo.id} todos={todo}/>
         ))}
        
        
      </div>
   )
}

export default Todo ;