// import books from '../data/books/romance.json'
import { useState } from "react"
import SingleBook from "./SingleBook"
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"
import { Search } from "react-bootstrap-icons"
import CommentArea from "./CommentArea"
// import fantasy from "../data/books/fantasy.json"
// import romance from "../data/books/romance.json"
// import horror from "../data/books/horror.json"
// import scifi from "../data/books/scifi.json"
// import history from "../data/books/history.json"

const BookList = ({ books }) => {
  //  state = {
  //     searchValue: "",
  //     selectedAsin: null,
  //  };

  const [searchValue, setSearchValue] = useState("")
  const [selectedAsin, setSelectedAsin] = useState(null)
  // const [selectedGenre, setSelectedGenre] = useState("")

  const changeAsin = (newAsin) => {
    // this.setState({
    //     selectedAsin: newAsin,
    // })
    setSelectedAsin(newAsin)
  }

  return (
    <Container fluid>
      <Row className="justify-content-center my-2">
        <Col sm={4}>
          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text className="bg-white">
                <Search />
              </InputGroup.Text>
              <FormControl
                type="search"
                className="me-2"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => {
                  // this.setState({
                  //     searchValue: e.target.value
                  // })
                  setSearchValue(e.target.value)
                }}
              />
            </InputGroup>
            {/* <Form.Select
              aria-label="Default select example"
              placeholder="scegli il tuo genere"
              value={selectedGenre}
              onChange={(e) => {
                // this.setState({
                //     searchValue: e.target.value
                // })
                setSelectedGenre(e.target.value)
              }}
            >
              <option>{fantasy}</option>
              <option>{romance}</option>
              <option>{history}</option>
              <option>{scifi}</option>
              <option>{horror}</option>
            </Form.Select> */}
          </Form>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col md={8}>
          <Row>
            {books
              .filter((book) =>
                book.title.toLowerCase().includes(searchValue.toLowerCase())
              )

              .map((book) => {
                return (
                  <Col xs={6} md={4} lg={3} key={book.asin} className="my-2">
                    <SingleBook
                      book={book}
                      changeAsin={changeAsin}
                      selectedAsin={selectedAsin}
                    />
                  </Col>
                )
              })}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea bookId={selectedAsin} />
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
