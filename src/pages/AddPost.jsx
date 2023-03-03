import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function AddPost() {
  return (
    <div>
      <h1 className='m-3'>Add Post</h1>
      <hr />
      <div>
        <Form>
          <Form.Group className="m-3" controlId="title">
            <Form.Label>Post Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="m-3" controlId="url">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" placeholder="Image url" />
          </Form.Group>

          <Form.Group className='m-3' controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Button className='m-3' variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}