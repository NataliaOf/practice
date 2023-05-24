import './user.css';
import {useSelector} from 'react-redux';

const FirstName= () =>{
const name = useSelector((state)=>state.user. firstName )
   return(
      <div className="firstName">
        <h3>First Name:</h3>
        <span>{name}</span>
     </div>
   )
}

export default FirstName;