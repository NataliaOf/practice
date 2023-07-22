import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import { useLayoutEffect } from "react";

export const fetchTodos = createAsyncThunk(
   'todo/fetchTodos',
   async function(_,{rejectWithValue}){
      try{
         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
   
         if(!response.ok){
            throw new Error('Server Error!');
         }
         const data = await response.json();
         return data;

      }catch(error){
         return rejectWithValue(error.message);
      }
   }
);

export const deleteTodo = createAsyncThunk(
   'todo/deleteTodo',
   async function(id, {rejectWithValue, dispatch}){
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
         method: 'DELETE',
        })
        
        
        if(!response.ok){
         throw new Error('Can\'t delete task. Server error.')
        }
        dispatch(removeTodo(id));
      }catch(error){
        return rejectWithValue(error.message);
      }
   }
);

export const toggleStatus = createAsyncThunk(
   'todo/toggleStatus',
   async function(id,{rejectWithValue, dispatch, getState}){
      const todo = getState().todos.todos.find(todo => todo.id ===id);

      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method: 'PATCH',
            headers:{
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               completed: !todo.completed,
            })
         })
         if(!response.ok){
            throw new Error('Can\'t toggle status. Server error.')
           }
          dispatch(toggleTodoComplete(id))
           
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const addNewTodo = createAsyncThunk(
   'todo/addNewTodo',
   async function (text, rejectWithValue, dispatch){
      try {
         const todo = {
            title: text,
            userId: 1,
            completed: false,
         };

         const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'POST',
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
         })
         if(!response.ok){
            throw new Error('Can\'t add task. Server error.')
           }
           const data = await response.json();
           console.log(data)
           dispatch(addTodo(data))
      } catch (error) {
         return rejectWithValue(error.message)
         
      }
   }
)

const setError = (state, action)=>{
   state.status = 'rejected';
   state.error = action.payload
  };

const todo2Slice = createSlice({
   name: 'todo',
   initialState: {
      todos:[],
      status: null,
      error: null,
   },
   reducers:{
    addTodo (state, action){
      console.log('addTodo');
      // state.todos.push({
      //  id: new Date().toISOString(),
      //  title: "action.payload.text",
      //  completed:false,
      // })
      
      state.todos.push(action.payload)


    },
    removeTodo (state, action){
      state.todos = state.todos.filter(todo=> todo.id !==action.payload)
    },
    toggleTodoComplete(state, action){
      const toggletTodo = state.todos.find(todo => todo.id === action.payload)
      toggletTodo. completed = !toggletTodo. completed
    },
   },
   extraReducers: {
     [fetchTodos.pending] : (state)=>{
      state.status ='loading';
      state.error = null;
     },
     [fetchTodos.fulfilled] : (state, action)=>{
      state.status = 'resolved';
      state.todos = action.payload;
     },
     [fetchTodos.rejected] : setError,
     [deleteTodo.rejected]: setError,
     [toggleStatus.rejected]: setError,
   },
})

export const {addTodo, removeTodo, toggleTodoComplete}= todo2Slice.actions;

export default todo2Slice.reducer;