import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './VisitorProfile.css'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS

export function VisitorProfile () {
  const { t } = useTranslation()
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div className='exhibitor-back'>
        <div className='content-visitor'>
          <div className='pt-5' style={{ color: '#fff' }}>
            <i>Ecomondo México</i>
            <p className='fw-bold fs-1'>{t('visitorProfile.title')}</p>
          </div>
          <Container className='w-100'>
            <Row>
              <Col className='py-3'>

                <div
                  data-aos='fade-right'
                  data-aos-offset='300'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='1000'
                >
                  <ul className='lista-visitor'>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_1')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_2')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_3')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_4')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_5')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_6')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_7')}</span>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col className='py-3 '>
                <div
                  data-aos='fade-right'
                  data-aos-offset='300'
                  data-aos-easing='ease-in-sine'
                  data-aos-duration='1000'
                >
                  <ul className='lista-visitor'>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_8')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_9')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_10')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_11')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_12')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_13')}</span>
                    </li>
                    <li className='item-res'>
                      <svg className='item-icon-visitor' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'>
                        <path stroke-linecap='round' stroke-linejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      <span className='item-text-visitor'>{t('visitorProfile.item_14')}</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </>
  )
}
