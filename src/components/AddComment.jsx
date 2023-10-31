import { useEffect, useState } from "react"
import { Button, Form, FormGroup } from "react-bootstrap"

const keyApi =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

const AddComent = ({ bookId }) => {
  // state = {
  //     allCommenta:{
  //         comment: '',
  //         rate: '1',
  //         elementId: this.props.bookId,}
  // }

  const [allCommenta, setAllCommenta] = useState({
    comment: "",
    rate: "1",
    elementId: bookId,
  })

  //     componentDidUpdate(prevProps){
  //         if(prevProps.bookId !== this.props.bookId){
  //             this.setState({
  //                 allCommenta:{
  //                     ...this.allCommenta,
  //                     elementId:this.props.bookId,
  //                 }
  //             })
  //     }
  // }

  useEffect(() => {
    setAllCommenta({
      ...allCommenta,
      elementId: bookId,
    })
  }, [bookId])

  const postComment = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(allCommenta),
          headers: {
            Authorization: keyApi,
            "Content-Type": "application/json",
          },
        }
      )
      if (res.ok) {
        alert("commento salvato!")
      } else {
        throw new Error("C'è stato un errore nel salvataggio del commento")
      }
    } catch (error) {
      console.log("errore nel submit del commento", error)
    }
  }

  return (
    <Form onSubmit={postComment} className="mt-3">
      <FormGroup className="mb-3">
        <Form.Label>Lascia qui un tuo commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={allCommenta.comment}
          onChange={(e) => {
            // this.setState({
            //     allCommenta:{
            //     ...this.state.allCommenta,
            //     comment: e.target.value}
            // })
            setAllCommenta({
              ...allCommenta,
              comment: e.target.value,
            })
          }}
        />
      </FormGroup>
      <FormGroup>
        <Form.Select
          aria-label="Rating"
          value={allCommenta.rate}
          onChange={(e) => {
            setAllCommenta({
              ...allCommenta,
              rate: e.target.value,
            })
          }}
        >
          <option>Lascia un voto</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </FormGroup>
      <Button variant="warning" type="submit" className="my-2">
        Invia!
      </Button>
    </Form>
  )
}

export default AddComent
