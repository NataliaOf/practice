import PostItem from './PostItem';
import './posts.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../features/post/postSlice';

const Posts = ()=>{
const dispatch = useDispatch();
const posts = useSelector((state) => state.posts.posts)
// console.log(posts)
   return(
      <section>
         <h2>Redux Toolkit Async Thunk</h2>
         <button
          onClick = {()=> dispatch(getPosts())}
         >Get post</button>
         {posts?.map((post) => (
            <PostItem key={post.title} post={post} />
         ))}
      
      </section>
   )
}

export default Posts;