import { Col, Container, Row } from 'react-bootstrap'
// import { useTranslation } from 'react-i18next'
import { ContactForm } from './ContactForm'
import './Contact.css'

export function Contact () {
  // const { t } = useTranslation()
  return (
    <>
      <Container>
        <Row className='my-5'>
          <Col xs={12} lg={6}><div className='div-con-fondo h-100' loading='lazy' /></Col>
          <Col xs={12} lg={6}><ContactForm /></Col>
        </Row>
        <Row className='py-5'>
          <Col>
            <p className='text-center mt-5'>
              <strong>Deutsche Messe</strong><br />
              Messegelände<br />
              30521 Hannover<br />
              Alemania<br />
              Tel. +49 511 89-0<br />
              <a href='mailto:info@messe.de' target='_blank' rel='noreferrer'> info@messe.de </a>|
              <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'> www.messe.de</a>
            </p>
          </Col>
          <Col>
            <p className='text-center mt-5'>
              <strong>IGECO</strong><br />
              Blvd. Francisco Villa 102, piso 14<br />
              Col. Oriental 37510<br />
              León Guanajuato, México<br />
              Tel. +49 511 89-0<br />
              <a href='mailto:info@igeco.mx' target='_blank' rel='noreferrer'> info@igeco.mx </a>|
              <a href='https://www.igeco.mx' target='_blank' rel='noreferrer'> www.igeco.mx </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
