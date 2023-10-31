import { Container, Row, Col } from "react-bootstrap"


const MyFooter = ()=>{
    return (
        <Container fluid className="bg-dark mt-4">
        <Row className="py-3">
          <Col className='d-flex justify-content-center align-items-center'>
          <p>
            <span className='me-3 text-white'>Register for free</span>
            </p>
            <button type='button' className="btn text-white border-1 rounded-5 border-white">
              Sign up!
            </button>
          </Col>
        </Row>
        <Row>
        <div className='text-center text-white p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright - MyLibrary.com
      </div>
        </Row>
      </Container>
    )
}

export default MyFooter