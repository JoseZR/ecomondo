import { Col, Container, Dropdown, Row } from 'react-bootstrap'
import './AboutUs'
import { useTranslation } from 'react-i18next'
export function AboutUs() {
  const { t, i18n } = useTranslation()
  return (
    <Container>
      <article className='text-start my-5'>
        <p
          className='fw-bold fs-1 home-text-color'
          style={{ color: '#288705' }}
        >
          ECOMONDO MÉXICO
        </p>
        <p
          style={{ textAlign: 'justify' }}
          dangerouslySetInnerHTML={{ __html: t('aboutUs.description') }}
        ></p>
        <p className='text-center'>{t('aboutUs.welcome')}</p>
        <hr></hr>
        <p className='mt-5 fw-bold fs-4'>{t('aboutUs.network')}</p>
        <Row className='mt-5'>
          <Col md={4}>
            <img src='/ecomondo/ecomondo-china.webp' className='w-100'></img>
          </Col>
          <Col md={8}>
            <p className='fw-bold m-0'>ECOMONDO CHINA - CDEPE</p>
            <span className='fw-light'>{t('aboutUs.network_1_date')}</span>
            <p className='mt-3 mb-0'>{t('aboutUs.network_1_desc')}</p>
            <a
              style={{ color: '#288705' }}
              className='fw-bold'
              href='https://www.cdepe.com/eng/'
              target='_blank'
            >
              {t('aboutUs.read_more')}
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={4} className='my-auto'>
            <img src='/ecomondo/ecomondo-italy.webp' className='w-100'></img>
          </Col>
          <Col md={8}>
            <p className='mt-5 fw-bold m-0'>ECOMONDO ITALY</p>
            <span className='fw-light'>{t('aboutUs.network_2_date')}</span>
            <p className='mt-3 mb-0'>{t('aboutUs.network_2_desc')}</p>
            <a
              style={{ color: '#288705' }}
              className='fw-bold'
              href='https://en.ecomondo.com/ '
              target='_blank'
            >
              {t('aboutUs.read_more')}
            </a>
          </Col>
        </Row>
      </article>
    </Container>
  )
}
