
import './App.css';
import User from './components/user/User';
import Posts from './components/posts/Posts';
import Form from './components/todoApp/Form';
import TodoItem from './components/todoApp/TodoItem';
import { useSelector } from 'react-redux';


function App() {
   const todos = useSelector((state)=>state.todo. todos)

  return (
    <div className="App">
     
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
  );
}

export default App;
