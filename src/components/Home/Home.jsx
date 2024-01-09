import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import Aos from 'aos'
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS
import { Link } from 'react-router-dom'
import { GalleryYear } from '../GalleryPage/GalleryYear'
import { gallery2023, gallery2022 } from '../GalleryPage/constans_gallery'

export function Home() {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Container>
        <header>
          <nav className='my-5 py-3 home-eco-submenu'>
            <a
              className='sub-menu-doc'
              href={
                i18n.language === 'es'
                  ? '/ecomondo/files/Factsheet_Ecomondo_Mexico_2024_es_v80124.pdf'
                  : '/ecomondo/files/Factsheet-Ecomondo-Mexico-2024-EN-61223.pdf'
              }
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                width={30}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
                />
              </svg>
              {t('home.factsheet')}
            </a>
            <a
              href='/ecomondo/files/ECOMONDO-Y-SSM-PLANO-2024-v6_061223.pdf'
              target='_blank'
              rel='noreferrer'
              className='sub-menu-doc'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                width={30}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z'
                />
              </svg>{' '}
              {t('home.floorplan')}
            </a>
            <Link className='sub-menu-doc' to='program'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                width={28}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
                />
              </svg>
              {t('home.program')}
            </Link>
            <a
              href='/ecomondo/files/Directorio_ECOMONDO_2023.pdf'
              target='_blank'
              rel='noreferrer'
              className='sub-menu-doc'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                width={30}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
                />
              </svg>
              {t('home.exhibitor_directory')}
            </a>
            <Link className='sub-menu-doc' to='/hotels'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                width={40}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
                />
              </svg>

              {t('home.hotels')}
            </Link>
            <a
              href='https://www.hfmexico.mx/solarpowermexico/'
              style={{ padding: 0, background: 'none' }}
              target='_blank'
              rel='noreferrer'
            >
              <img
                width={150}
                src={
                  i18n.language === 'es'
                    ? '/ecomondo/SSM-boton-ES.webp'
                    : '/ecomondo/SSM-boton-EN.webp'
                }
              />
            </a>
          </nav>
        </header>
      </Container>
      <img
        src={
          i18n.language === 'es'
            ? '/ecomondo/KEVISUAL_ECOMONDO_2024_ES.webp'
            : '/ecomondo/KEVISUAL_ECOMONDO_2024_EN.webp'
        }
        loading='lazy'
        alt='keyvisual-ecomondo2024'
        className='w-100 mb-5'
      />
      <section className='my-5'>
        <Container fluid>
          <p className='fw-bold fs-3 text-secondary text-center text-uppercase'>
            {t('home.sponsor_1')}
          </p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a
                href='https://www.aspiria.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/aspiria.webp'
                  width={250}
                  loading='lazy'
                  alt='aspiria'
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <article className='text-start my-5'>
          <Row className='pt-5 px-3 fs-5'>
            <Col md={4} className='px-3'>
              <p
                className='fw-bold fs-2 home-text-color'
                style={{ color: '#288705' }}
              >
                ECOMONDO MÉXICO
              </p>
              <p className='fs-3'>{t('home.presentation')}</p>
              <br />
              <p className='fs-3'>
                {t('home.date')} <br /> Expo Guadalajara{' '}
              </p>
              <br />
            </Col>
            <Col md={8} className='my-auto'>
              {i18n.language === 'es' ? (
                <video
                  className='w-100'
                  controls
                  src='/ecomondo/Ecomondo_2024_ESV1.mp4'
                  poster='/ecomondo/posterVideoEco2023.webp'
                  loading='lazy'
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              ) : (
                <video
                  className='w-100'
                  controls
                  src='/ecomondo/Ecomondo_2024_ENV1.mp4'
                  poster='/ecomondo/posterVideoEco2023.webp'
                  loading='lazy'
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              )}
            </Col>
          </Row>
          <Row className='pt-5 px-3 fs-5'>
            <Col>
              <p style={{ textAlign: 'justify' }}>{t('home.text_1')}</p>
              <p style={{ textAlign: 'justify' }}>{t('home.text_2')}</p>
            </Col>
          </Row>
        </article>
      </Container>
      <Container fluid>
        <p
          className='fw-bold fs-3 pb-4 home-text-color text-uppercase'
          style={{ color: '#288705' }}
        >
          {t('home.zone')}
        </p>
        <div className='section-evento'>
          <Row className='justify-content-md-center  '>
            <Col xs={12} md={6} lg={3} className='text-center py-3'>
              <div className='card-container'>
                <div className='card'>
                  <div className='front-content'>
                    <img
                      className='top-image'
                      src='/ecomondo/eco_control-residuos.webp'
                      alt=''
                    />
                    <br />
                    <br />
                    <p className='title fs-5 circle-1'>
                      {t('home.zone_1.title')}
                    </p>
                  </div>
                  <div className='content'>
                    <p className='heading'>{t('home.zone_1.title')}</p>
                    <ul className='text-start'>
                      <li>{t('home.zone_1.item_1')}</li>
                      <li>{t('home.zone_1.item_2')}</li>
                      <li>{t('home.zone_1.item_3')}</li>
                      <li>{t('home.zone_1.item_4')}</li>
                      <li>{t('home.zone_1.item_5')}</li>
                      <li>{t('home.zone_1.item_6')}</li>
                      <li>{t('home.zone_1.item_7')}</li>
                      <li>{t('home.zone_1.item_8')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className='text-center py-3'>
              <div className='card-container'>
                <div className='card'>
                  <div className='front-content'>
                    <img
                      className='top-image'
                      src='/ecomondo/eco_bioenergia.webp'
                      alt='Imagen superior'
                    />
                    <br />
                    <br />
                    <p className='title fs-5 circle-2'>
                      {t('home.zone_2.title')}
                    </p>
                  </div>
                  <div className='content'>
                    <p className='heading'>{t('home.zone_2.title')}</p>
                    <ul className='text-start'>
                      <li>{t('home.zone_2.item_1')}</li>
                      <li>{t('home.zone_2.item_2')}</li>
                      <li>{t('home.zone_2.item_3')}</li>
                      <li>{t('home.zone_2.item_4')}</li>
                      <li>{t('home.zone_2.item_5')}</li>
                      <li>{t('home.zone_2.item_6')}</li>
                      <li>{t('home.zone_2.item_7')}</li>
                      <li>{t('home.zone_2.item_8')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className='text-center py-3'>
              <div className='card-container'>
                <div className='card'>
                  <div className='front-content'>
                    <img
                      className='top-image'
                      src='/ecomondo/tratado-agua_eco.webp'
                      alt='Imagen superior'
                    />
                    <br />
                    <br />
                    <p className='title fs-5 circle-3'>
                      {t('home.zone_3.title')}
                    </p>
                  </div>
                  <div className='content'>
                    <p className='heading'>{t('home.zone_3.title')}</p>
                    <ul className='text-start'>
                      <li>{t('home.zone_3.item_1')}</li>
                      <li>{t('home.zone_3.item_2')}</li>
                      <li>{t('home.zone_3.item_3')}</li>
                      <li>{t('home.zone_3.item_4')}</li>
                      <li>{t('home.zone_3.item_5')}</li>
                      <li>{t('home.zone_3.item_6')}</li>
                      <li>{t('home.zone_3.item_7')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            {/* <Col xs={12} md={6} lg={3} className='text-center py-3'>
              <div className='card-container'>
                <div className='card'>
                  <div className='front-content'>
                    <div className='circle circle-4' /><br />
                    <p className='title fs-5 circle-4'>{t('home.zone_4.title')}</p>
                  </div>
                  <div className='content'>
                    <p className='heading'>{t('home.zone_4.title')}</p>
                    <ul className='text-start'>
                      <li>{t('home.zone_4.item_1')}</li>
                      <li>{t('home.zone_4.item_2')}</li>
                      <li>{t('home.zone_4.item_3')}</li>
                      <li>{t('home.zone_4.item_4')}</li>
                      <li>{t('home.zone_4.item_5')}</li>
                      <li>{t('home.zone_4.item_6')}</li>
                      <li>{t('home.zone_4.item_7')}</li>
                      <li>{t('home.zone_4.item_8')}</li>
                      <li>{t('home.zone_4.item_9')}</li>
                      <li>{t('home.zone_4.item_10')}</li>
                      <li>{t('home.zone_4.item_11')}</li>
                      <li>{t('home.zone_4.item_12')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col> */}
          </Row>
        </div>
      </Container>
      <section className='mt-5 home-whyexhibit'>
        <p className='fw-bold fs-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={80}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>{' '}
          {t('home.why_exhibit.title')}
        </p>
        <Container>
          <Row>
            <Col
              xs={12}
              md={4}
              lg={4}
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img
                src='/ecomondo/item01-1.webp'
                width={128}
                height={128}
                alt='ecomondo'
                loading='lazy'
              />
              <p className='d-flex align-items-center gap-3 pt-4'>
                {t('home.why_exhibit.item_1')}
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/ecomondo/item02.webp' alt='ecomondo' loading='lazy' />
              <p className='d-flex align-items-center gap-3 pt-4'>
                {t('home.why_exhibit.item_2')}
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              lg={4}
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/ecomondo/item03.webp' alt='ecomondo' loading='lazy' />
              <p className='d-flex align-items-center gap-3 pt-4'>
                {t('home.why_exhibit.item_3')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className='mt-5 py-5'>
        <Row>
          <Col md className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={60}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
              />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_select')}</p>
            <p className='px-5'>{t('home.why_exhibit_select_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={60}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_visit')}</p>
            <p className='px-5'>{t('home.why_exhibit_visit_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={60}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25'
              />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_general')}</p>
            <p className='px-5'>{t('home.why_exhibit_general_desc')}</p>
          </Col>
        </Row>
      </Container>
      <Container className='galleryPage mt-5'>
        <h1 className='gallery-title pt-5'>
          {t('menu.media_hub_1')} - Ecomondo 2023
        </h1>
        <GalleryYear year={gallery2023} />
      </Container>
      <section className='pb-5'>
        <Container className=''>
          <p className='fw-bold fs-2 text-center' style={{ color: '#288705' }}>
            {t('home.strategies_allies')}
          </p>
          <Marquee gradient direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://aeej.jalisco.gob.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/aeej.webp'
                  width={250}
                  height={108}
                  loading='lazy'
                  alt='aeej'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://sedeco.jalisco.gob.mx/inicio'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/sedeco_jalisco.webp'
                  width={160}
                  height={50}
                  loading='lazy'
                  alt='desarrollo-economico-jalisco'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://alianzaempresarial.jalisco.gob.mx/deinteres.html'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/alianza_empresarial.webp'
                  width={180}
                  height={160}
                  loading='lazy'
                  alt='alianza-empresarial'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.jalisco.gob.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/gob_jalisco.webp'
                  width={160}
                  height={160}
                  loading='lazy'
                  alt='jalisco-gob-estado'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://alinvest-verde.eu/es_es/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/ai_invest.webp'
                  width={200}
                  height={50}
                  loading='lazy'
                  alt='al-invest'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://mexiko.ahk.de/ueber-uns/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/ahk.webp'
                  width={250}
                  height={50}
                  loading='lazy'
                  alt='ahk-mexico'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.canchammx.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/cancham.webp'
                  width={200}
                  height={80}
                  loading='lazy'
                  alt='cancham-mx'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.giz.de/en/worldwide/33041.html'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/giz.webp'
                  width={250}
                  height={108}
                  loading='lazy'
                  alt='giz'
                />
              </a>
            </div>
          </Marquee>
          <Marquee gradient className='mt-3'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://ambcittadelmessico.esteri.it/it/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/maeci_italia.webp'
                  width={200}
                  height={130}
                  loading='lazy'
                  alt='ambasciata-d-italia-messico'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://amh.org.mx/' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/amh.webp'
                  width={120}
                  height={120}
                  loading='lazy'
                  alt='asociacion-mexicana-de-hidraulica'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://rivieramayasostenible.org/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/rm_sostenible.webp'
                  width={120}
                  height={120}
                  loading='lazy'
                  alt='rivera-maya-sostenible'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.greendestinations.org/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/green.webp'
                  width={200}
                  height={120}
                  loading='lazy'
                  alt='green-destinations'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/pmrj.webp'
                  width={120}
                  height={120}
                  loading='lazy'
                  alt='pmrj-manejo-residuos-jalisco'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://amrre.org.mx/' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/amrre.webp'
                  width={120}
                  height={120}
                  loading='lazy'
                  alt='recicladores-residuos-electronicos'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/sello_rms.webp'
                  width={200}
                  height={60}
                  loading='lazy'
                  alt='sello-rms'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://eventossustentables.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/es_eventos.webp'
                  width={190}
                  height={80}
                  loading='lazy'
                  alt='es-eventos-sustentables'
                />
              </a>
            </div>
          </Marquee>
          <p
            className='fw-bold fs-2 text-center pt-5'
            style={{ color: '#288705' }}
          >
            {t('home.broadcasting_media_partners')}
          </p>
          <Row className='text-center py-5'>
            <Col md={3} className='mx-auto my-auto'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/el_heraldo_mexico.webp'
                  width={250}
                  height={40}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </Col>
          </Row>
          <p
            className='fw-bold fs-2 text-center pt-5'
            style={{ color: '#288705' }}
          >
            {t('home.platinum_media_partners')}
          </p>
          <Row className='text-center py-5'>
            <Col xs={12} md={6} lg={3} className='mx-auto my-auto py-3'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/economista.webp'
                  width={250}
                  height={20}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='mx-auto my-auto py-3'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/global-energy.webp'
                  width={200}
                  height={80}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='mx-auto my-auto py-3'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/mexico-industry.webp'
                  width={200}
                  height={70}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </Col>
            <Col xs={12} md={6} lg={3} className='mx-auto my-auto py-3'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/pv-magazine-group.webp'
                  width={250}
                  height={70}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </Col>
          </Row>
          <p
            className='fw-bold fs-2 text-center pt-5'
            style={{ color: '#288705' }}
          >
            {t('home.gold_media_partners')}
          </p>
          <Marquee gradient className='mt-3'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.cosmos.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/cosmos.webp'
                  width={200}
                  height={90}
                  loading='lazy'
                  alt='cosmos'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://energyandcommerce.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/energy-commerce.webp'
                  width={150}
                  height={60}
                  loading='lazy'
                  alt='energy-&-commerce'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://energiahoy.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/energia-hoy.webp'
                  width={200}
                  height={50}
                  loading='lazy'
                  alt='energia-hoy'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://energy21.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/energy-21.webp'
                  width={200}
                  height={40}
                  loading='lazy'
                  alt='energy-21'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://dplnews.com/' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/dpl.webp'
                  width={180}
                  height={70}
                  loading='lazy'
                  alt='dpl-news'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://energiaadebate.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/energiadebate.webp'
                  width={180}
                  height={90}
                  loading='lazy'
                  alt='energia-debate'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/global-industries.webp'
                  width={200}
                  height={70}
                  loading='lazy'
                  alt=''
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://greentology.life/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/GreentologyV2.webp'
                  width={250}
                  height={162}
                  loading='lazy'
                  alt='greentology'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://revistaconsultoria.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/consultoria.webp'
                  width={250}
                  height={50}
                  loading='lazy'
                  alt='consultoria-revista'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://www.vanguardia-industrial.net/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/vanguardia-industrial.webp'
                  width={200}
                  height={100}
                  loading='lazy'
                  alt='vanguardia-industrial'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://worldconstruccion.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/construccion.webp'
                  width={200}
                  height={40}
                  loading='lazy'
                  alt='world-construccion'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.retema.es/' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/retema.webp'
                  width={250}
                  height={63}
                  loading='lazy'
                  alt='Retema'
                />
              </a>
            </div>
          </Marquee>
          <p
            className='fw-bold fs-2 text-center mt-5 pt-5'
            style={{ color: '#288705' }}
          >
            {t('home.silverm_media_partners')}
          </p>
          <Marquee gradient className='mt-3' direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://plastico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/gap.webp'
                  width={180}
                  height={70}
                  loading='lazy'
                  alt='ap'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/biosfera.webp'
                  width={180}
                  height={90}
                  loading='lazy'
                  alt='biosfera'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://discovercleantech.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/clean-tech.webp'
                  width={200}
                  height={50}
                  loading='lazy'
                  alt=''
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='http://www.revistadp.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/preferencia.webp'
                  width={200}
                  height={60}
                  loading='lazy'
                  alt='de-preferencia'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://metropolimid.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/metropoli-min.webp'
                  width={180}
                  height={50}
                  loading='lazy'
                  alt='metropoli-mind'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://petroleoenergia.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/petroleo-energia.webp'
                  width={190}
                  height={110}
                  loading='lazy'
                  alt='petroleoenergia'
                />
              </a>
            </div>
          </Marquee>
        </Container>
      </section>
      <div className='container-market'>
        <div className='content-market text-start'>
          <div
            className='content-market-hijo'
            data-aos='fade-right'
            data-aos-easing='ease-in-sine'
            data-aos-duration='1500'
          >
            <p className='fw-bold fs-1'>{t('home.mexican_market')}</p>
            <p className='fs-5' style={{ textAlign: 'justify' }}>
              {t('home.mexican_market_desc')}
            </p>
            <br />
            <br />
            <p className='fw-bold fs-1'>{t('home.become_sponsor')}</p>
            <p className='fs-5' style={{ textAlign: 'justify' }}>
              {t('home.become_sponsor_desc')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
