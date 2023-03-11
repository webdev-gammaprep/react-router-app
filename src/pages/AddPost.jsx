import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPost() {
  const navigate = useNavigate();
  var [title, setTitle] = useState();
  var [image, setImage] = useState();
  var [content, setContent] = useState();
  var [token, setToken] = useState()

  useEffect(() => {
    let authToken = localStorage.getItem('srt');
    if (!authToken) {
      navigate('/login');
    }
    setToken(authToken)
  }, [])

  function updateTitle(event) {
    setTitle(event.target.value);
  }
  function updateImage(event) {
    setImage(event.target.value);
  }
  function updateContent(event) {
    setContent(event.target.value);
  }

  function createPost(event) {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/posts/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization":  `Bearer ${token}`
      },
      body: JSON.stringify({
        title: title,
        image: image,
        content: content
      })
    }).then(res => {
      console.log(res);
      navigate('/');
    });
  }

  return (
    token ? (
      <div>
        <h1 className='m-3'>Add Post</h1>
        <hr />
        <div>
          <Form>
            <Form.Group className="m-3" controlId="title">
              <Form.Label>Post Title</Form.Label>
              <Form.Control onChange={updateTitle} type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group className="m-3" controlId="url">
              <Form.Label>Image URL</Form.Label>
              <Form.Control onChange={updateImage} type="text" placeholder="Image url" />
            </Form.Group>

            <Form.Group className='m-3' controlId='content'>
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" onChange={updateContent} />
            </Form.Group>
            <Button className='m-3' variant="primary" type="submit" onClick={createPost}>
              Submit
            </Button>
          </Form>
        </div>
      </div>) : <></>
  )
}