import FirstName from './FirstName';
import LastName from './LastName';
import './user.css';
import { useDispatch } from 'react-redux';
import {setFirstName, setLastName} from '../../features/user/userSlice'

const User = () => {

   const dispatch = useDispatch();
   return ( 
      <section>
      <h2>Redux Toolkit State Change </h2>

      <div className="inputGrup">
         <input 
         
         onChange={(e)=>{
         
            dispatch(setFirstName(e.target.value))
         }}
         placeholder="First Name"/>
         <input 
         onChange={(e)=>{
            dispatch(setLastName(e.target.value))
         }}
         placeholder="Last Name"/>
      </div>
      <div className="textOutput">
         <FirstName/>
        <LastName/>
      </div>
      
      </section>
   )
}

export default User;