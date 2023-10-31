import { Card } from "react-bootstrap"
import { useState } from "react"
// import CommentArea from "./CommentArea"
// import books from '../data/books/romance.json'


const SingleBook = ({book, selectedAsin, changeAsin}) => {

    // state = {
    //      selected: null,
    //  }

    const [selected, setSelected] = useState(null)
    return(
      <>
          
        <Card style={{height:'100%'}}
        className={book.asin === selectedAsin ? 'border-2 border-danger' : 'border-1'}>
            <Card.Img variant="top" src={book.img} style={{height: '280px'}}  onClick={() =>{
            setSelected(!selected)
            changeAsin(book.asin)
        }} />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title>{book.title}</Card.Title>
              <div>
              <Card.Text className='m-0'>
                {book.category}  
              </Card.Text>
              <Card.Text>
                {book.price}$
              </Card.Text>
              </div>
            </Card.Body> 
            {/* {
              this.state.selected && <CommentArea bookId ={this.props.book.asin}/>
            } */}
            </Card>
            </>
    )}

export default SingleBook