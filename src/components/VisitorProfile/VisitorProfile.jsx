import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './VisitorProfile.css'
import { useTranslation } from 'react-i18next'
import Aos from 'aos'
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS

export function VisitorProfile() {
  const { t } = useTranslation()
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div className='exhibitor-back'>
        <div className='content-visitor'>
          <div className='pt-5' style={{ color: '#fff' }}>
            <Container className='text-start'>
              <i>Ecomondo Mexico</i>
              <h1>{t('why-visit.title')}</h1>
              <p
                className='mt-5 text-start'
                dangerouslySetInnerHTML={{ __html: t('why-visit.description') }}
              ></p>
              <Row className='mt-5'>
                <Col>
                  <ul style={{ listStyle: 'none' }}>
                    <li>
                      <img
                        src='/whyvisit_3.png'
                        alt='digital transformation'
                        width={85}
                      />
                      {t('why-visit.item_1')}
                    </li>
                    <li>
                      <img
                        src='/whyvisit_2.png'
                        alt='digital transformation'
                        width={85}
                      />
                      {t('why-visit.item_2')}
                    </li>
                    <li>
                      <svg
                        width='85'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='white'
                      >
                        <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        ></g>
                        <g id='SVGRepo_iconCarrier'>
                          <path d='M2.898 12.581a2.467 2.467 0 0 1 2.073-.538 2.38 2.38 0 0 1 1.42.871l.419-1.023a3.39 3.39 0 0 0-.707-.489 2.5 2.5 0 1 0-3.215-.006 3.454 3.454 0 0 0-.631.418A3.491 3.491 0 0 0 1 14.5V16h1v-1.5a2.492 2.492 0 0 1 .898-1.919zM3 9.5A1.5 1.5 0 1 1 4.5 11 1.502 1.502 0 0 1 3 9.5zm18.103 1.902a2.5 2.5 0 1 0-3.215-.007 3.448 3.448 0 0 0-.631.419c-.026.021-.044.05-.07.072l.412 1.006a2.407 2.407 0 0 1 2.372-.849A2.608 2.608 0 0 1 22 14.646V16h1v-1.354a3.647 3.647 0 0 0-1.897-3.244zM18 9.5a1.5 1.5 0 1 1 1.5 1.5A1.502 1.502 0 0 1 18 9.5zM10 9V8a1.99 1.99 0 0 1 .764-1.572 2.02 2.02 0 0 1 1.739-.367A2.08 2.08 0 0 1 14 8.119V9h1v-.88a3.173 3.173 0 0 0-1.445-2.678 2.5 2.5 0 1 0-3.1.009 2.956 2.956 0 0 0-.31.192A2.984 2.984 0 0 0 9 8v1zm.5-5.5A1.5 1.5 0 1 1 12 5a1.502 1.502 0 0 1-1.5-1.5zm9.463 17.81l-.926.38L14.664 11H9.336L4.963 21.69l-.926-.38L8.41 10.622A.997.997 0 0 1 9.336 10h5.328a.996.996 0 0 1 .925.62z'></path>
                          <path fill='none' d='M0 0h24v24H0z'></path>
                        </g>
                      </svg>
                      {t('why-visit.item_3')}
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
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
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_1')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_2')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_3')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_4')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_5')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_6')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_7')}
                      </span>
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
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_8')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_9')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_10')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_11')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_12')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_13')}
                      </span>
                    </li>
                    <li className='item-res'>
                      <svg
                        className='item-icon-visitor'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                      <span className='item-text-visitor'>
                        {t('visitorProfile.item_14')}
                      </span>
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
