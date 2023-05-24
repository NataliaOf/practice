import PostItem from './PostItem';
import './posts.css';

const Posts = ()=>{

   return(
      <section>
         <h2>Redux Toolkit Async Thunk</h2>
         <button>Get post</button>
         <PostItem/>
      </section>
   )
}

export default Posts;