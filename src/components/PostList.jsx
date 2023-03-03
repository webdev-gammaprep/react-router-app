import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './PostList.css';

export default function PostList() {

  var [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      var res = await fetch('http://localhost:3000/api/v1/post/all');
      var data = await res.json();
      setPosts(data);
    }
    getPosts();
  }, [])


  return (
    <div className='post-list-container'>
      { posts && posts.map(p => <PostCard key={p.id} post={p}/>)}
    </div>
  )
}