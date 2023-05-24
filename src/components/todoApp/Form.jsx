import './form.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../features/todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Form = ()=>{
const dispatch =  useDispatch();
const [todovalue, setTodoValue]= useState('');

const addTodoHandler = ()=>{
  
   const todo = {
      id: uuidv4(),
      text: todovalue,
      completed: true,
   }
  
   dispatch(addTodo(todo));
  
   setTodoValue('')
}

   return(
      <section>
         <h2>Redux Toolkit App</h2>
         <input 
         value={todovalue}
         onChange={(e)=>{
            setTodoValue(e.target.value)
            
         }}
         placeholder='Todo Add'/>
         <button 
         onClick ={ addTodoHandler}
         type="button">Submit</button>
      </section>
   )
}

export default Form;