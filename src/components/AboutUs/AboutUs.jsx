import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs'
import { useTranslation } from 'react-i18next'
export function AboutUs () {
  const { t, i18n } = useTranslation()
  return (
    <Container>
      <article className='text-start my-5'>
        <Row className='pt-5 px-3 fs-5'>
          <Col md={6} className='mx-auto my-auto'>
            <p className='fw-bold fs-1 home-text-color' style={{ color: '#288705' }}>ECOMONDO MÉXICO</p>
            <p style={{ textAlign: 'justify' }}>{t('aboutUs.description')}</p>
          </Col>
          <Col md={4} className='mx-auto my-auto'>
            <img src={i18n.language === 'es' ? '/ecomondo/eco_2024_es.webp' : '/ecomondo/eco_2024_en.webp'} alt='keyvisual-ecomondo2024' className='w-100 mb-5' />
          </Col>
        </Row>
      </article>
    </Container>
  )
}
