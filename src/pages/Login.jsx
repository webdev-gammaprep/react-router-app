import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'
import baseUrl from '../common'

export default function Login() {
  const navigate = useNavigate();
  var [username, setUsername] = useState();
  var [password, setPassword] = useState();

  function updateUsername(event) {
    setUsername(event.target.value);
  }
  function updatePassword(event) {
    setPassword(event.target.value);
  }

  function login(event) {
    event.preventDefault();
    fetch(baseUrl + '/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: bcrypt.hashSync(password)
      })
    }).then(res => {
      res.text().then(token => {
        if (token != 'Auth failed') {
          localStorage.setItem('srt', token);
          navigate('/');
        } else {
          window.alert(token);
          console.log(token)
        }

      })
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1 className='m-3'>Login</h1>
      <hr />
      <div>
        <Form>
          <Form.Group className="m-3" controlId="title">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={updateUsername} type="text" placeholder="anirudh" required />
          </Form.Group>

          <Form.Group className="m-3" controlId="url">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={updatePassword} type="password" required />
          </Form.Group>

          <Button className='m-3' variant="primary" type="submit" onClick={login}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}