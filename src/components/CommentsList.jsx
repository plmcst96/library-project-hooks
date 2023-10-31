import { Container, ListGroup, Row } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = ({ comments, refresh }) => {
  return (
    <Container>
      <Row>
        {/* <h2>Recensioni</h2> */}
        <ListGroup>
          {comments.map((comm) => (
            <SingleComment
              key={comm._id}
              comment={comm}
              id={comm._id}
              refresh={refresh}
            />
          ))}
        </ListGroup>
      </Row>
    </Container>
  )
}

export default CommentsList
