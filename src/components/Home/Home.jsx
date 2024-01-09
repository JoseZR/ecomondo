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
                ECOMONDO MÉXICO 2024
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
        <p className='gallery-title fw-bold fs-2'>
          {t('home.why_exhibit.title')}
        </p>
        <Container>
          <p>{t('home.why_exhibit.description')}</p>
          <Row>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/icon1.webp' width='70' alt='crecimiento sostenible' />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_1')}
              </p>
            </Col>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/icon2.webp' width='70' alt='negocios sostenibles' />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_2')}
              </p>
            </Col>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/icon3.webp' width='80' alt='economía circular' />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_3')}
              </p>
            </Col>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img src='/icon4.webp' width='90' alt='alianza estrategica' />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_4')}
              </p>
            </Col>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img
                src='/icon5.webp'
                width='60'
                alt='conocimiento para la sostenibilidad de las industrias'
              />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_5')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

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
