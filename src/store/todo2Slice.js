import { createSlice} from "@reduxjs/toolkit";

const todo2Slice = createSlice({
   name: 'todo',
   initialState: {
      todos:[]
   },
   reducers:{
    addTodo: (state, action)=>{
     
      state.todos.push({
       id: new Date().toISOString(),
       text: action.payload.text,
       completed:false,
      })
     
    },
    removeTodo: (state, action)=>{
      state.todos = state.todos.filter(todo=> todo.id !==action.payload)
    },
    toggleTodoComplete: (state, action)=>{
      const toggletTodo = state.todos.find(todo => todo.id === action.payload)
      toggletTodo. completed = !toggletTodo. completed
    },
   },
})

export const {addTodo, removeTodo, toggleTodoComplete}= todo2Slice.actions;

export default todo2Slice.reducer;