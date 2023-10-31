
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import books from '../data/books/fantasy.json'
import { Component } from 'react'

class AllTheBooks  extends Component {
    render(){ 
    return(
        <Container fluid>
            <Row className='d-flex'>    
      
            {
                books.map((fantasy)=>{
                    return(    
                        <Col xs={6} md={4} lg={2} key={fantasy.asin} className='my-2'> 
                <Card className='h-100'>
                    <Card.Img variant="top" src={fantasy.img} style={{height: '280px'}} />
                    <Card.Body className='d-flex flex-column justify-content-between'>
                      <Card.Title>{fantasy.title}</Card.Title>
                      <div>
                      <Card.Text className='m-0'>
                        {fantasy.category}  
                      </Card.Text>
                      <Card.Text>
                        {fantasy.price}$
                      </Card.Text>
                      </div>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body> 
                    </Card>
                    </Col>
                    )
                })
            }   
      </Row>
      </Container>
    )
}
}
export default AllTheBooks