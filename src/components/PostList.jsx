import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import './PostList.css';
import baseUrl from '../common';

export default function PostList() {

  var [posts, setPosts] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('srt')
    async function getPosts() {
      var res = await fetch(baseUrl + '/posts/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      var data = await res.json();
      setPosts(data);
    }
    getPosts();
  }, [])


  return (
    <div className='post-list-container'>
      {posts && posts.map(p => <PostCard key={p._id} post={p} />)}
    </div>
  )
}