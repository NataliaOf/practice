import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo2Slice';

const ImputField = ()=>{
   const [text, setText] = useState('');
   const dispatch =  useDispatch();
  
   const addTask =()=>{
      dispatch(addTodo({text}))
      setText('')
   }

   return(
      <>
      <label>
            <input value={text} onChange={e=>{setText(e.target.value)}} />
         </label>
         <button type="button"
          onClick={()=> addTask()}
           >add</button></>
   )
}
export default ImputField;