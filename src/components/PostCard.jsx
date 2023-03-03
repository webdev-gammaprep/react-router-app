import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './PostCard.css'

export default function PostCard({ post }) {
  var shortContent = post.content.slice(0, 50) + '...';
  return (
    <Card className='card'>
      <Card.Img variant="top" src={post.image} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {shortContent}
        </Card.Text>
        <Link to= {`/post/${post.id}`} >
          <Button variant="primary">View more</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}