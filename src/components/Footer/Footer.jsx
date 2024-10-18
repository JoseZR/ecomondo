import { Col, Container, Row, Image, Button } from 'react-bootstrap'
import './Footer.css'
import { useTranslation } from 'react-i18next'
import { LanguageButton } from '../Menu/LanguageButton'
import { Subscribe } from '../Suscribe/Suscribe'
export function Footer() {
  const { t } = useTranslation()
  return (
    <>
      <div
        className='d-flex justify-content-end pe-5 p-3'
        style={{ backgroundColor: '#393939' }}
      >
        <div className='' style={{ width: '200px' }}>
          <img
            src='/igeco_bn.webp'
            alt='igeco'
            className='w-100'
            loading='lazy'
          />
        </div>
        <div className='' style={{ width: '200px' }}>
          <img
            src='/deutsche_messe_bn.webp'
            alt='igeco'
            className='w-100'
            loading='lazy'
          />
        </div>
      </div>
      <footer className='container-footer-padre'>
        <Container>
          <Row className='mt-5'>
            <Col md>
              {/* Redes Sociales */}
              <p className='fs-5 fw-bold'>{t("home.social_networks.title")}</p>
              <div className='footer-socialmedia mb-5'>
                <a
                  href='https://www.facebook.com/EcomondoMexico'
                  target='_blank'
                  rel='noreferrer'
                  className='container-flex'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Facebook</title>
                    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                  </svg>
                  EcomondoMexico
                </a>
                <a
                  href='https://www.linkedin.com/company/ecomondo-m%C3%A9xico/'
                  target='_blank'
                  rel='noreferrer'
                  className='container-flex'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>LinkedIn</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>Ecomondo Mexico
                </a>
                <a
                  href='https://www.instagram.com/ecomondomx?igsh=YzljYTk1ODg3Zg=='
                  target='_blank'
                  rel='noreferrer'
                  className='container-flex'
                >
                  <svg
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Instagram</title>
                    <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
                  </svg>@Ecomondomx
                </a>
              </div>
              <p className='fs-5 fw-bold'>ECOMONDO 2025</p>
              <p>
                {t("footer.event-date")}
                <br />
                Expo Guadalajara,
                <br />
                Guadalajara, Jalisco, México
              </p>
            </Col>
            <Col md>
              <p className='fs-5 fw-bold up mb-3 text-uppercase'>{t('footer.contact_us')}</p>
              <Row className='mb-5'>
                <Col xs={4} md={12} lg={3}>
                  <Image src="/laura-amaro.webp" roundedCircle width='85' />
                </Col>
                <Col xs={8} md={12} lg={8}>
                  <strong>Laura Amaro</strong><br />
                  {t("footer.project_manager")}<br />
                  <a href='mailto:laura.amaro@igeco.mx'>laura.amaro@igeco.mx</a>
                  <a href='mailto:laura.amaro@igeco.mx' ><Button variant="success" size="sm"> {t('footer.message_button')}</Button></a>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={4} md={12} lg={3}>
                  <Image src="/brenda-reyes.webp" roundedCircle width='85' />
                </Col>
                <Col xs={8} md={12} lg={8}>
                  <strong>Brenda Reyes</strong><br />
                  {t('footer.sales_executive')}<br />
                  <a href='mailto:brenda.reyes@igeco.mx'>brenda.reyes@igeco.mx</a>
                  <a href='mailto:brenda.reyes@igeco.mx'><Button variant="success" size="sm"> {t('footer.message_button')}</Button></a>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={4} md={12} lg={3}>
                  <Image src="/rafael_ramirez.webp" roundedCircle width='85' />
                </Col>
                <Col xs={8} md={12} lg={8}>
                  <strong>Rafael Ramírez</strong><br />
                  {t('footer.sales_executive')}<br />
                  <a href='mailto:rafael.ramirez@igeco.mx'>rafael.ramirez@igeco.mx</a>
                  <a href='mailto:rafael.ramirez@igeco.mx'><Button variant="success" size="sm"> {t('footer.message_button')}</Button></a>
                </Col>
              </Row>
            </Col>
            <Col md>
              <Subscribe />
            </Col>
          </Row>
          <p className='mt-5'>
            <strong>{t('footer.foreign_contact')}</strong>
          </p>
          <Row className='contactos-info'>
            <Col md>
              <p>
                <strong className='txt-title-footer'>GERMANY</strong>
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
              {/* <p>
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
              </p> */}
            </Col>
            <Col md>
              <p>
                <strong className='txt-title-footer'>UK, IRELAND</strong>
                <br />
                <i>Alsea Business Media</i>
                <br />
                <strong>David Aitken</strong>
                <br />
                <a href='mailto:david@alseabusinessmedia.co.uk'>david@alseabusinessmedia.co.uk</a>
                <br />
                <a href='https://www.alseabusinessmedia.co.uk/' target='_blank'>www.alseabusinessmedia.co.uk</a>
              </p>
            </Col>
            <Col md>
              {/* <p>
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
              </p> */}
              <p>
                <strong className='txt-title-footer'>SPAGNA & PORTOGALLO</strong>
                <br />
                <i>Iberian Trade Fairs SL</i>
                <br />
                <strong>Jaime de la Figuera</strong>
                <br />
                <a href='mailto:Jaime.delafiguera@iberiantradefairs.com'>Jaime.delafiguera@iberiantradefairs.com</a>
                <br />
                <a href='https://www.iberiantradefairs.com/' target='_blank'>www.iberiantradefairs.com</a>
              </p>
            </Col>
          </Row>

          <Row className='contactos-info justify-content-md-center'>
            <Col>
              <p>
                <strong className='txt-title-footer'>LATINOAMÉRICA</strong>
                <br />
                <i>Proa Latam</i>
                <br />
                <strong>Antonino Di Marco</strong>
                <br />
                <a href='mailto:adimarco@proalatam.com'>adimarco@proalatam.com</a>
                <br />
                <a href='https://proalatam.com/' target='_blank'>www.proalatam.com</a>
              </p>
            </Col>
            <Col>
              <p>
                <strong className='txt-title-footer'>CHINA</strong>
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
          </Row>

          <div className='mt-5 footer-language d-flex'>
            <a href='https://igeco.mx' target='_blank'>
              <strong>Italian German Exhibition Company</strong>
            </a>
            <div className='ms-auto'>
              <LanguageButton />
            </div>
          </div>
          <div className='pt-4 pb-4'>
            <a
              href='https://hfmexico.mx/aviso-de-privacidad/'
              target='_blank'
              rel='noreferrer'
            >
              {t('footer.privacy_policy')}
            </a>{' '}
            | <a href='/contact'>{t('footer.contact')}</a>
          </div>
        </Container>
      </footer>
    </>
  )
}
