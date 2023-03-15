import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './ViewPost.css'
import baseUrl from '../common'

export default function ViewPost() {
  var navigate = useNavigate()
  var { postId } = useParams();
  var [post, setPost] = useState();

  useEffect(() => {
    async function getPost() {
      let authToken = localStorage.getItem('srt');
      if (!authToken) {
        navigate('/login');
      }
      var res = await fetch(`${baseUrl}/posts/${postId}`, { headers: { 'Authorization': `Bearer ${authToken}` } });
      var data = await res.json();
      setPost(data);
    }

    getPost();
  }, [])

  return (
    <div className='container'>
      <h1 className='post-title m-3 p-3'>{post?.title}</h1>
      <hr />
      <div className='post-body m-3'>
        <div className='post-img-div m-3 p-3'>
          <img className='post-img' src={post?.image} alt="" />
        </div>
        <div className='post-content m-3 p-3'>
          {post?.content}
        </div>
      </div>
    </div>
  )
}