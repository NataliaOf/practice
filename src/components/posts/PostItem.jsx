import { deletePostById } from '../../features/post/postSlice';
import { useDispatch } from 'react-redux';
import './posts.css';

const PostItem = ({post})=>{
   const dispatch = useDispatch()

   return (
      <div className="posts">
         <p
          onClick={()=>dispatch(deletePostById(post.id))}
         >{post.title}</p>
      </div>
   )
}

export default PostItem;