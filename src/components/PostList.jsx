import PostCard from './PostCard';
import './PostList.css';

export default function PostList() {
  return (
    <div className='post-list-container'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}