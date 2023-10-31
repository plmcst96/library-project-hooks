import { Button, Container, ListGroupItem, Row } from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const SingleComment = ({ comment, id, refresh }) => {
  return (
    <Container>
      <Row>
        <ListGroupItem>
          <p>
            <strong>Testo:</strong> {comment.comment}
          </p>
          <p>
            <strong>Voto:</strong> {comment.rate}
          </p>
          <Button
            variant="danger"
            onClick={async () => {
              try {
                const res = await fetch(
                  "https://striveschool-api.herokuapp.com/api/comments/" + id,
                  {
                    method: "DELETE",
                    headers: {
                      Authorization: keyApi,
                    },
                  }
                )
                if (res.ok) {
                  console.log("eliminato")
                  refresh()
                } else {
                  throw new Error("Eliminazione non riuscita!")
                }
              } catch (error) {
                console.log("errore", error)
              }
            }}
          >
            <Trash3Fill />
          </Button>
        </ListGroupItem>
      </Row>
    </Container>
  )
}
export default SingleComment
