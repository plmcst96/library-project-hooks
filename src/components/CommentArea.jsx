import { useEffect, useState } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const CommentArea = ({ bookId }) => {
  // state = {
  //     comments: [],
  //     isLoadin: true,
  //     isError: false,
  // }
  const [comments, setComments] = useState([])
  const [isLoadin, setIsLoadin] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (bookId) {
      getComments()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookId])

  const getComments = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + bookId,
        {
          headers: {
            Authorization: keyApi,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log("data", data)

        // this.setState({
        //     comments: data,
        //     isLoadin: false,
        // })
        setComments(data)
        setIsLoadin(false)
      } else {
        throw new Error("Fetch non conclusa!")
      }
    } catch (error) {
      console.log("errore nel caricamneto commenti", error)
      // this.setState({
      //     isLoadin: false,
      //     isError: true,
      // })
      setIsLoadin(false)
      setIsError(true)
    }
  }

  // componentDidMount(){
  //     if(this.props.bookId){

  //         this.getComments()
  //     }
  //  }

  //  componentDidUpdate(prevProps, prevState){
  //     if(prevProps.bookId !== this.props.bookId){
  //         this.getComments()
  //   }
  // }

  return (
    <Container>
      <Row className="flex-column">
        {isLoadin && (
          <div className="d-flex justify-content-center">
            <Spinner animation="grow" variant="info" />
          </div>
        )}
        {isError && (
          <Alert variant="danger">Ritenta sarai più fortunato!</Alert>
        )}
        <Col>
          <CommentsList comments={comments} refresh={getComments} />
        </Col>
        <Col>
          <AddComment bookId={bookId} />
        </Col>
      </Row>
    </Container>
  )
}

export default CommentArea
