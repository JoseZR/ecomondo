import { Col, Container, Row } from 'react-bootstrap'
import './HomeNew.css'

export function HomeNew() {
    return (
        <section class="background-image d-flex justify-content-center align-items-center">
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={10} sm={10} md={8} lg={5}><img src="/ecomondo/ecomondo_logo_2025.webp" alt="ecomondo 2025" className="img-fluid" /></Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col xxl={6}><h1 className='date-title mt-5'>5-7 marzo, 2025</h1></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={6} sm={3} md={3} lg={2}>  <img src="/ecomondo/igeco_bn.webp" alt="" className="img-fluid"/> </Col>
                    <Col xs={6} sm={3} md={3} lg={2}>  <img src="/ecomondo/deutsche_messe_bn.webp" alt="" className="img-fluid"/> </Col>
                </Row>
            </Container>
        </section>
    )
}
