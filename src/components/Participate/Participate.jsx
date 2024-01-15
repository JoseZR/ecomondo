import { Col, Container, Row } from 'react-bootstrap'
import './Participate.css'
import { useTranslation } from 'react-i18next'
import { Schedule } from '../Schedule/Schedule'

export function Participate() {
  const { t } = useTranslation()
  return (
    <>
      <Container className='my-5'>
        <h2 className='fw-font title-conferencias'>
          <strong>{t('participate.title')}</strong>
        </h2>
        <br />
        <br />
        <Row>
          <Col xs={12} md={4} className='h-100 p-3'>
            <div className='container-plant'>
              <h4 className='py-2'>{t('participate.sustainable')}</h4>
              <p>{t('participate.area')}</p>
              <p>
                <span className='text-decoration-line-through'>
                  USD 1,800 + IVA
                </span>
                <span className='bg-danger fw-bold ms-2 rounded p-1 text-white'>
                  50% desc
                </span>
              </p>
              <p className='fw-bold'>USD 900 + IVA</p>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img
                    src='./alfombra_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item05')}
                </Col>
                <Col className='m-3'>
                  <img src='./rotulo.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item11')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img
                    src='./mobiliarip_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item09')}
                </Col>
                <Col className='m-3'>
                  <img
                    src='./contacto_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item10')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img src='./badge.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item12')}
                </Col>
                <Col className='m-3'>
                  <img src='./phone-book.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item03')}
                </Col>
              </Row>
              <br />
              <button className='btn-price'>
                <a href='mailto:laura.padilla@igeco.mx'>
                  <span className='text-white'>
                    {t('participate.rate_button')}
                  </span>
                </a>
              </button>
            </div>
          </Col>
          <Col xs={12} md={4} className='h-100 p-3'>
            <div className='container-plant'>
              <h4 className='py-2'>{t('participate.equipped')}</h4>
              <p>9m² {t('participate.item01')}</p>
              <p className='fw-bold'>USD 3,330 + IVA</p>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img
                    src='./alfombra_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item05')}
                </Col>
                <Col className='m-3'>
                  <img
                    src='./mamparas_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item06')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img
                    src='./antepecho_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item07')}
                </Col>
                <Col className='m-3'>
                  <img
                    src='./iluminacion_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item08')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img
                    src='./mobiliarip_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item09')}
                </Col>
                <Col className='m-3'>
                  <img
                    src='./contacto_gris.webp'
                    alt=''
                    className='icon-price'
                  />
                  <br />
                  {t('participate.item10')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img src='./badge.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item02')}
                </Col>
                <Col className='m-3'>
                  <img src='./phone-book.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item03')}
                </Col>
              </Row>
              <br />
              <button className='btn-price'>
                <a href='mailto:laura.padilla@igeco.mx'>
                  <span className='text-white'>
                    {t('participate.rate_button')}
                  </span>
                </a>
              </button>
            </div>
          </Col>
          <Col xs={12} md={4} className='h-100 p-3'>
            <div className='container-plant'>
              <h4 className='py-2'>{t('participate.free')}</h4>
              <p>18m² {t('participate.item01')}</p>
              <p className='fw-bold'>USD 320 / m² + IVA</p>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img src='./phone-book.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item03')}
                </Col>
                <Col className='m-3'>
                  <img src='./badge.webp' alt='' className='icon-price' />
                  <br />
                  {t('participate.item02')}
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col className='m-3'>
                  <img src='./stall.webp' alt='' className='icon-price' />
                  <br />
                  Stand
                </Col>
              </Row>
              <br />
              <strong>
                <p>{t('participate.item04')}</p>
              </strong>
              <br />
              <button className='btn-price'>
                {' '}
                <a href='mailto:laura.padilla@igeco.mx'>
                  <span className='text-white'>
                    {t('participate.rate_button')}
                  </span>
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Schedule />
    </>
  )
}
