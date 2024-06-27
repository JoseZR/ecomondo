import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './Contact.css'

export function PersonContact() {
  const { t } = useTranslation()
  return (
    <>
      <Container fluid className='background-contact py-5'>
        <p className='fs-1'>
          <strong>{t('menu.exhibitors_1')}</strong>
        </p>
        <section className='ecomondo-bloq-1'>
          <Container>
            <Row className='justify-content-md-center'>
              <Col sm={12} md={4} lg={4} xl={4} xx={4} className='text-center pt-3'>
                <img
                  src='/brenda-reyes.webp'
                  alt='Sergio López'
                  width={150}
                  loading='lazy'
                  className='rounded-circle '
                />
                <p className='fw-bold fs-5'>
                  Brenda Reyes
                  <br />
                  {t("footer.sales_executive")}
                </p>
                <a
                  href='mailto:brenda.reyes@igeco.mx'
                  className='text-white fw-bold'
                >
                  brenda.reyes@igeco.mx
                </a><br /><br />
                <a href='mailto:brenda.reyes@igeco.mx'><Button variant="outline-light" size="lg"> {t('footer.message_button')}</Button></a>
              </Col>
              <Col md className='text-center pt-3'>
                <img
                  src='/laura-amaro.webp'
                  alt='Sandra Elias'
                  height={150}
                  loading='lazy'
                  className='rounded-circle'
                />
                <p className='fw-bold fs-5'>Laura Amaro<br />{t("footer.sales_executive")}</p>
                <a href='mailto:laura.amaro@igeco.mx' className='text-white fw-bold'> laura.amaro@igeco.mx</a><br /><br />
                <a href='mailto:laura.amaro@igeco.mx'><Button variant="outline-light" size="lg"> {t('footer.message_button')}</Button></a>
              </Col>
              <Col md className='text-center pt-3'>
                <img
                  src='/janai-medina.webp'
                  alt='Sandra Elias'
                  height={150}
                  loading='lazy'
                  className='rounded-circle'
                />
                <p className='fw-bold fs-5'>Janai Medina<br />{t("footer.sales_executive")}</p>
                <a href='mailto:janai.medina@igeco.mx' className='text-white fw-bold'>janai.medina@igeco.mx</a><br /><br />
                <a href='mailto:janai.medina@igeco.mx'><Button variant="outline-light" size="lg"> {t('footer.message_button')}</Button></a>
              </Col>
            </Row>
            {/* <Row className='gap-6 mt-5 justify-content-md-center'><Col sm={12} md={4} lg={4} xl={4} xx={4} className='text-center pt-3'>
                <img
                  src='/marissa.jpg'
                  alt='Marissa Franco Zermeño'
                  width={150}
                  loading='lazy'
                  className='rounded-circle'
                />
                <p className='fw-bold fs-5'>
                  Marissa Franco Zermeño
                  <br />
                  {t("footer.sales_executive")}
                </p>
                <a
                  href='mailto:marissa.franco@igeco.mx'
                  className='text-white fw-bold'
                >
                  marissa.franco@igeco.mx
                </a><br /><br />
                <a href='mailto:marissa.franco@igeco.mx'><Button variant="outline-light" size="lg"> {t('footer.message_button')}</Button></a>
              </Col>
              <Col sm={12} md={4} lg={4} xl={4} xx={4} className='text-center pt-3'>
                <img
                  src='/nayeli-rivera.webp'
                  alt='Marissa Franco Zermeño'
                  width={150}
                  loading='lazy'
                  className='rounded-circle'
                />
                <p className='fw-bold fs-5'>
                  Nayeli Rivera
                  <br />
                  {t("footer.sales_executive")}
                </p>
                <a
                  href='mailto:nayeli.rivera@igeco.mx'
                  className='text-white fw-bold'
                >
                  nayeli.rivera@igeco.mx
                </a><br /><br />
                <a href='mailto:nayeli.rivera@igeco.mx'><Button variant="outline-light" size="lg"> {t('footer.message_button')}</Button></a>
              </Col>
            </Row> */}
          </Container>
        </section>
      </Container>
    </>
  )
}
