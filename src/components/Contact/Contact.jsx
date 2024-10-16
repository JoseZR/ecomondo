import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ContactForm } from './ContactForm'
import './Contact.css'
import { PersonContact } from './PersonContact'

export function Contact() {
  const { t } = useTranslation()
  return (
    <>
      <PersonContact />
      <Container className=' my-5'>
      <p className='fs-1 py-5 fw-bold' dangerouslySetInnerHTML={{__html: t('contact.subtitle') }}></p>
        <Row className='gap-6 px-5'>
          <Col md className='text-center pt-3'>
            <img
              src='/alessandra-astolfi.webp'
              alt='Sandra Elias'
              height={150}
              loading='lazy'
              className='rounded-circle'
            />
            <p className='fw-bold fs-5'>Alessandra Astolfi<br /> {t("contact.position1")} </p>
          </Col>
          <Col md className='text-center pt-3'>
            <img
              src='/laura-ponzoni.webp'
              alt='Sergio López'
              width={150}
              loading='lazy'
              className='rounded-circle'
            />
            <p className='fw-bold fs-5'>
            Laura Ponzoni
              <br />
              {t("contact.position2")}
            </p>
          </Col>
          <Col md className='text-center pt-3'>
            <Image
              src='/fabio-filipponi.webp'
              alt='Marissa Franco Zermeño'
              width={150}
              loading='lazy'
              className='rounded-circle'
            />
            <p className='fw-bold fs-5'>
              Fabio Filipponi
              <br />
              {t("contact.position3")}
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className='background-contact'>
        <ContactForm />
        {/*<p className='mt-5 text-start fs-3'>
          <strong>{t('footer.foreign_contact')}</strong>
        </p>
       <Row className='foreign-contact'>
          <Col md>
            <p>
              <strong>GERMANY</strong>
              <br />
              <i>ITALIAN EXHIBITION GROUP Deutschland GmbH</i>
              <br />
              <strong>Thomas Grenot</strong>
              <br />
              <a href='mailto:thomas.grenot@iegexpo.de'>
                thomas.grenot@iegexpo.de
              </a>
              <br />
              <a href='https://www.iegexpo.it/de' target='_blank'>
                www.iegexpo.it/de
              </a>
            </p>
            <p>
              <strong>FRANCE, BELGIUM</strong>
              <br />
              <i>Promo Intex </i>
              <br />
              <strong>Léa Maroc</strong>
              <br />
              <a href='mailto:l.maroc@promo-intex.com'>
                l.maroc@promo-intex.com
              </a>
              <br />
              <a href='https://www.promo-intex.com' target='_blank'>
                www.promo-intex.com
              </a>
            </p>
          </Col>
          <Col md>
            <p>
              <strong>UK, IRELAND</strong>
              <br />
              <i>Alsea Business Media</i>
              <br />
              <strong>Tony Lambert</strong>
              <br />
              <a href='mailto:tonylambert@alseabusinessmedia.co.uk'>
                tonylambert@alseabusinessmedia.co.uk
              </a>
              <br />
              <a href='https://www.alseabusinessmedia.co.uk' target='_blank'>
                www.alseabusinessmedia.co.uk
              </a>
            </p>
            <p>
              <strong>CHINA</strong>
              <br />
              <i>IEG CHINA</i>
              <br />
              <strong>Sky Hong</strong>
              <br />
              <a href='mailto:sky.hong@iegchina.com'>sky.hong@iegchina.com</a>
              <br />
              <a href='https://www.iegexpo.it/it/worldwide' target='_blank'>
                www.iegexpo.it/it/worldwide
              </a>
            </p>
          </Col>
          <Col md>
            <p>
              <strong>USA & CANADA</strong>
              <br />
              <i>Atlas Marketing International</i>
              <br />
              <strong>Boris Murray</strong>
              <br />
              <a href='mailto:bmurray@atlas.marketing'>
                bmurray@atlas.marketing
              </a>
              <br />
              <a href='https://www.atlas.marketing' target='_blank'>
                www.atlas.marketing
              </a>
            </p>
            <p>
              <strong>SPAGNA & PORTOGALLO</strong>
              <br />
              <i>Proa Latam</i>
              <br />
              <strong>Antonino Di Marco</strong>
              <br />
              <a href='mailto:adimarco@proalatam.com'>adimarco@proalatam.com</a>
              <br />
              <a href='https://www.proalatam.com' target='_blank'>
                www.proalatam.com
              </a>
            </p>
          </Col>
        </Row>*/}
      </Container>
      <Container>
        <Row className='py-5 justify-content-md-center'>
          <Col lg={3} className=' d-flex justify-content-center align-items-center border-end border-black'>
            <img src="/igeco_logo_negro.webp" alt="italian exhibition group" width='200' />
          </Col>
          <Col lg={3} className=''>
            <p className='text-center mt-5'>
              <strong>IGECO</strong>
              <br />
              Blvd. Francisco Villa 102, piso 14
              <br />
              Col. Oriental 37510
              <br />
              León Guanajuato, México
              <br />
              Tel. +49 511 89-0
              <br />
              <a href='mailto:info@igeco.mx' target='_blank' rel='noreferrer'>
                {' '}
                info@igeco.mx{' '}
              </a>
              |
              <a href='https://www.igeco.mx' target='_blank' rel='noreferrer'>
                {' '}
                www.igeco.mx{' '}
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
