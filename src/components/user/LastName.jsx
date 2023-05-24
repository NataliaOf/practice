import './user.css';
import { useSelector } from 'react-redux';

const LastName= () =>{
const name = useSelector((state)=> state.user.lastName)
   return(
      <div className="lastName">
        <h3>Last Name:</h3>
        <span>{name}</span>
     </div>
   )
}

export default LastName;