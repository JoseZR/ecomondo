import { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import Aos from 'aos'
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS
import { Link } from 'react-router-dom'
import { GalleryYear } from '../GalleryPage/GalleryYear'
import { gallery2023, gallery2022 } from '../GalleryPage/constans_gallery'
import { Bullets } from './Bullets'
import { useNearScreen } from '../hooks/useNearScreen'
import { Testimonials } from './Testimonials'
import { Program } from '../Program/Program'
import {
  exhibitors1,
  exhibitors2,
  exhibitors3,
  exhibitorsItaly1,
  exhibitorsItaly2,
  exhibitorsChihuahua1,
  exhibitorsChihuahua2,
} from '../../constans_logos'

export function Home() {
  const { t, i18n } = useTranslation()
  const [show, ref] = useNearScreen()
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <section
        className='position-relative w-100 vh-100 d-flex align-items-center justify-content-center'
        style={{ textShadow: '4px 4px 4px black' }}
      >
        <video
          src='/ecomondo/background-ecomondo-2024.mp4'
          autoPlay
          muted
          loop
          poster='/ecomondo/background-video-ecomondo.webp'
          className='video-bg-ecomondo'
        />
        <Container>
          <Row className='text-center'>
            <Col
              lg={12}
              sm={12}
              md={12}
              className='text-start my-auto text-center'
            >
              <p
                className='text-white fw-bold fs-3 text-uppercase'
                dangerouslySetInnerHTML={{ __html: t('home.slogan') }}
              />
              <p className='fw-bold text-white fs-5'>
                {t('home.date')} <br /> Expo Guadalajara
              </p>
              <div className='d-flex gap-5 align-items-center justify-content-center mb-4'>
                {/* <p className='fw-bold text-white'>
                  {t('home.date')} <br /> Expo Guadalajara
                </p> */}
                <p
                  className='text-light text-f fs-6'
                  dangerouslySetInnerHTML={{
                    __html: t('home.ecomondo_date_hours'),
                  }}
                />
              </div>
              <Container>
                <Row className='justify-content-md-center'>
                  <Col
                    lg={4}
                    className='d-flex align-items-center justify-content-center py-2'
                  >
                    <a
                      href='https://ecomondo.ahmreg.com/'
                      target='_blank'
                      className='fw-bold px-3 py-4 rounded-3 button-cover'
                      rel='noreferrer'
                    >
                      {t('menu.banner')}
                    </a>
                  </Col>
                  <Col
                    lg={4}
                    className='d-flex align-items-center justify-content-center py-2'
                  >
                    <a
                      href='https://hfmexico.mx/ecomondo/program'
                      className='fw-bold px-3 py-4 rounded-3 button-cover'
                    >
                      {t('home.program_button')}
                    </a>
                  </Col>
                  <Col
                    lg={4}
                    className='d-flex align-items-center justify-content-center py-2'
                  >
                    <a
                      href='/ecomondo/files/DIRECTORIO_ECO_2024_v3_16042024.pdf'
                      target='_blank'
                      className='fw-bold px-3 py-4 rounded-3 button-cover'
                    >
                      {t('menu.directory')}
                    </a>
                  </Col>
                </Row>
                <Row className='justify-content-md-center pt-5'>
                  <p className='text-white fw-bold fs-4'>
                    {t('home.title-organizers')}
                  </p>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      className='img-fluid'
                      src='/ecomondo/igeco_bn.webp'
                      alt='Expo de Sustentabilidad en Mexico'
                      width='220'
                    />
                  </Col>
                  <Col xs={6} md={3} lg={3}>
                    <img
                      className='img-fluid'
                      src='/ecomondo/deutsche_messe_bn.webp'
                      alt='Expo de Sustentabilidad en Mexico'
                      width='220'
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Row />
          </Row>
        </Container>
      </section>
      <Container>
        <article className='text-start pb-5'>
          <Row className='pt-5 px-3 fs-5'>
            <Col md={6} className='px-5'>
              <p
                className='fw-bold fs-2 home-text-color'
                style={{ color: '#288705' }}
              >
                ECOMONDO MÉXICO 2024
              </p>
              <p className='fs-4' style={{ textAlign: 'justify' }}>
                {t('home.general_description')}
              </p>
              <br />
            </Col>
            <Col md={6} className='my-auto'>
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
        </article>
      </Container>
      <Container className='pb-5'>
        <p
          className='fw-bold fs-3 pb-4 home-text-color text-uppercase'
          style={{ color: '#288705' }}
        >
          {t('home.sponsor_1')}
        </p>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={4}>
            <a
              href='https://www.mase.gov.it/'
              target='_blank'
              className='d-flex  align-items-baseline'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logo_mase.webp'
                alt='mase-org'
                className='img-fluid my-3'
                style={{ maxHeight: '110px' }}
              />
            </a>
            <a href='https://www.mase.gov.it/' target='_blank' rel='noreferrer'>
              <Button variant='link' className='fs-5'>
                {t('home.btn_moreInformation')}
              </Button>
            </a>
          </Col>
        </Row>
        <p
          className='fw-bold mt-5 fs-3 home-text-color text-uppercase'
          style={{ color: '#288705' }}
        >
          {t('home.sponsor_2')}
        </p>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={12} lg={3}>
            <a
              href='https://www.longi.com/mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/longi_logo.webp'
                alt='longi'
                className='img-fluid'
                style={{ maxHeight: '90px' }}
              />
            </a>
          </Col>
          <Col xs={12} md={12} lg={3}>
            <a href='https://www.cpm.coop/' target='_blank' rel='noreferrer'>
              <img
                src='/ecomondo/logos/caja-popular.webp'
                alt='caja popular mexicana'
                className='img-fluid'
                style={{ maxHeight: '120px' }}
              />
            </a>
          </Col>
        </Row>
      </Container>

      {/* INVITACION A SER PATROCINADOR */}
      {/* <Container fluid className="background-sponsors d-flex justify-content-center my-5 h-auto">
        <div data-aos="zoom-out" data-aos-duration="2000" className=" text-center py-5 my-5 d-flex flex-column justify-content-center align-items-center ">
          <p className="text-white text-uppercase w-75 fs-3 fw-bolder mb-5"> {t("home.sponsorships_des")} </p>
          <div>
            <a
              href={
                i18n.language === 'es'
                  ? '/ecomondo/files/patrocionios_es_200324.pdf'
                  : '/ecomondo/files/sponsorships_en_200324.pdf'
              }
              target='_blank'
              className="fw-bold px-3 py-4 rounded-3 button-cover fs-4"
            >
              {t("home.btn-sponsorships")}
            </a>
          </div>
        </div>
      </Container>
       */}

      {/* EJES DEL EVENTO */}

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
            <Col xs={12} md={6} lg={3} className='text-center py-3'>
              <div className='card-container'>
                <div className='card'>
                  <div className='front-content'>
                    <img
                      className='top-image'
                      src='/ecomondo/sustainable_cities.webp'
                      alt='Imagen superior'
                    />
                    <br />
                    <br />
                    <p className='title fs-5 circle-4'>
                      {t('home.zone_4.title')}
                    </p>
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
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        fluid
        className='program-wrapper d-flex justify-content-center my-5 h-auto'
      >
        <Program />
      </Container>

      {/* <section className="mt-5 home-whyexhibit">
        <p className="gallery-title fw-bold fs-2">
          {t("home.why_exhibit.title")}
        </p>
        <Container>
          <p className="fs-4">{t("home.why_exhibit.description")}</p>
          <Row className="text-center fs-6 fw-semibold fst-italic">
            <Col
              md
              className="p-5"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <img
                src="/ecomondo/icon1.webp"
                width="70"
                alt="crecimiento sostenible"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-bold">
                {t("home.why_exhibit.item_1")}
              </p>
            </Col>
            <Col
              md
              className="p-5"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <img
                src="/ecomondo/icon2.webp"
                width="70"
                alt="negocios sostenibles"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-bold">
                {t("home.why_exhibit.item_2")}
              </p>
            </Col>
            <Col
              md
              className="p-5"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <img
                src="/ecomondo/icon3.webp"
                width="80"
                alt="economía circular"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-bold">
                {t("home.why_exhibit.item_3")}
              </p>
            </Col>
            <Col
              md
              className="p-5"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <img
                src="/ecomondo/icon4.webp"
                width="90"
                alt="alianza estrategica"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-bold">
                {t("home.why_exhibit.item_4")}
              </p>
            </Col>
            <Col
              md
              className="p-5"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="2500"
            >
              <img
                src="/ecomondo/icon5.webp"
                width="60"
                alt="conocimiento para la sostenibilidad de las industrias"
                loading="lazy"
              />
              <p className="mt-3 text-center text-sm font-bold">
                {t("home.why_exhibit.item_5")}
              </p>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <Container>
        <h2
          className="fw-bold fs-2 pb-4 home-text-color text-uppercase"
          style={{ color: "#288705" }}
        >
          ECOMONDO MEXICO {t("home.rates.title")} 2024
        </h2>
        <p className="fst-italic fs-5 mb-5">{t("home.rates.sub-title")}</p>
        <Row>
          <Col lg={4} md={4} sm={12} className="column-with-border p-4 relative">
            <div className="position-relative">
              <img src="/ecomondo/sold-outl.webp" alt="sold out" className="position-absolute top-0 start-50 translate-middle-x rounded-circle z-1 mt-4 pt-5" width='190' />
              <div className="z-0">
                <h4 className="fw-bolder mt-20">{t("home.rates.item1.title1")}</h4>
                <p className="text-decoration-line-through fs-4 text fw-semibold">{" "}{t("home.rates.item1.price1")}{" "}</p>
                <p className="fs-3 text fw-bolder text-danger"> {t("home.rates.item1.priece2")}{" "} </p>
                <p className="fs-4 text fw-semibold"> {t("home.rates.item1.title2")}{" "} </p>
                <ul className="list-group-flush p-0 m-0">
                  <li className="list-group-item"> {t("home.rates.item1.topic1")} </li>
                  <li className="list-group-item"> {t("home.rates.item1.topic2")} </li>
                  <li className="list-group-item"> {t("home.rates.item1.topic3")} </li>
                  <li className="list-group-item"> {t("home.rates.item1.topic4")} </li>
                  <li className="list-group-item"> {t("home.rates.item1.topic5")} </li>
                  <li className="list-group-item"> {t("home.rates.item1.topic6")} </li>
                </ul>
              </div>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12} className="column-with-border p-4">
            <h4 className="fw-bolder">{t("home.rates.item2.title1")}</h4>
            <p className="fs-3 text  fw-bolder">
              {" "}
              {t("home.rates.item2.price1")}{" "}
            </p>
            <p className="fs-4 text fw-semibold">
              {t("home.rates.item1.title2")}{" "}
            </p>
            <ul class="list-group-flush p-0 m-0">
              <li class="list-group-item"> {t("home.rates.item2.topic1")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic2")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic3")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic4")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic5")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic6")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic7")} </li>
              <li class="list-group-item"> {t("home.rates.item2.topic8")} </li>
            </ul>
          </Col>
          <Col lg={4} md={4} sm={12} className="p-4">
            <h4 className="fw-bolder">{t("home.rates.item3.title1")}</h4>
            <p className="fs-3 text fw-bolder">
              {t("home.rates.item3.price1")}{" "}
            </p>
            <p className="fs-4 text fw-semibold">
              {t("home.rates.item1.title2")}{" "}
            </p>
            <ul class="list-group-flush p-0 m-0">
              <li class="list-group-item"> {t("home.rates.item3.topic1")} </li>
              <li class="list-group-item"> {t("home.rates.item3.topic2")} </li>
              <li class="list-group-item"> {t("home.rates.item3.topic3")} </li>
              <br />
              <li class="list-group-item fw-semibold">
                {" "}
                {t("home.rates.item3.topic4")}{" "}
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}

      <div ref={ref}>
        {/* <Container fluid className="mt-5">
          {show && (
            <Row className="text-light">
              <Col md className="background_num1">
                <div className="position-num">
                  <Bullets number="7500" duration="4" simbol_1="+" />
                  <div className="text-center fw-bold text-light">
                    <i className="fs-5">{t("home.bullet_1")}</i>
                  </div>
                </div>
              </Col>
              <Col md className="background_num2">
                <div className="position-num">
                  <Bullets
                    number="13000"
                    duration="4"
                    simbol_2={t("home.bullet_6")}
                  />
                  <div className="text-center fw-bold text-light">
                    <i className="fs-5">{t("home.bullet_2")}</i>
                  </div>
                </div>
              </Col>
              <Col md className="background_num3">
                <div className="position-num">
                  <Bullets number="80" duration="4" simbol_1="+" />
                  <div className="text-center fw-bold text-light">
                    <i className="fs-5">{t("home.bullet_3")}</i>
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
              <Col md className="background_num4">
                <div className="position-num">
                  <Bullets
                    number="462"
                    duration="4"
                    simbol_1="+"
                    simbol_2={t("home.bullet_7")}
                  />
                  <div className="text-center fw-bold text-light">
                    <i className="fs-5">{t("home.bullet_4")}</i>
                    <br />
                    <i>(2023)</i>
                  </div>
                </div>
              </Col>
              <Col md className="background_num5">
                <div className="position-num">
                  <Bullets
                    number="6"
                    duration="4"
                    simbol_1="+"
                    simbol_2={t("home.bullet_7")}
                  />
                  <div className="text-center fw-bold text-light">
                    <i className="fs-5">{t("home.bullet_5")}</i>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
        <Testimonials /> */}
        {/* <Container className='my-5 py-5'>
          <p className='gallery-title fw-bold fs-2 mb-5'>{t('home.interests.title')}</p>
          <div data-aos="fade-right" data-aos-duration="3000">
            <Row className='text-center fs-6 fw-semibold fst-italic'>
              <Col className='text-center'>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_1.webp" alt="gestión de desperdicios y residuos" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item1")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_2.webp" alt="manejo de residuos químicos" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item5")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_3.webp" alt="bioenergia" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item2")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_4.webp" alt="iluminación inteligente" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item6")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_5.webp" alt="tratamiento de agua" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item3")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_6.webp" alt="certificaciones" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item7")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_7.webp" alt="transporte de desechos" width='100px' loading='lazy' />
                  <p className='pt-3'>{t("home.interests.item4")}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container> */}
      </div>
      {/* LOGOS DE EXPOSITORES */}
      <Container className='pt-5 pb-5'>
        <p className='fw-bold fs-2 text-center' style={{ color: '#288705' }}>
          {t('home.exhibitors')}
        </p>
        <Marquee gradient>
          {exhibitors1.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors2.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100 my-2'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitors3.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
      </Container>
      <Container className='py-5'>
        <p
          className='fw-bold fs-2 text-center text-uppercase'
          style={{ color: '#288705' }}
        >
          {' '}
          {t('home.italy-hall')}
        </p>
        <Marquee gradient direction='letf'>
          {exhibitorsItaly1.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitorsItaly2.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
      </Container>
      <Container className='py-5'>
        <p
          className='fw-bold fs-2 text-center text-uppercase'
          style={{ color: '#288705' }}
        >
          {t('home.chihuahua-hall')}
        </p>
        <Marquee gradient direction='letf'>
          {exhibitorsChihuahua1.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitorsChihuahua2.map((logotypes, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={logotypes.width}
                height={logotypes.height}
                src={logotypes.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
      </Container>
      {/* GALERIA */}
      {/* <Container className="galleryPage">
        <h1 className="gallery-title pt-5">
          {t("menu.media_hub_1")} Ecomondo 2023
        </h1>
        <GalleryYear year={gallery2023} />
      </Container> */}
      <section className=''>
        <Container className=''>
          <p className='fw-bold fs-2 text-center' style={{ color: '#288705' }}>
            {t('home.strategies_allies')}
          </p>
          <Marquee gradient direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://alianzaempresarial.jalisco.gob.mx/deinteres.html'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/alianza_empresarial_v2.webp'
                  width={230}
                  loading='lazy'
                  alt='alianza-empresarial'
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
          </Marquee>
          <Marquee gradient className='mt-3'>
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
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/amrcd.webp'
                  height={100}
                  loading='lazy'
                  alt='amrcd'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/red-nacional.webp'
                  height={100}
                  loading='lazy'
                  alt='red nacional'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/earth.webp'
                  height={100}
                  loading='lazy'
                  alt='earth'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/kas.webp'
                  height={100}
                  loading='lazy'
                  alt='kas'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/anes.webp'
                  width={190}
                  loading='lazy'
                  alt='anes'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='' target='_blank' rel='noreferrer'>
                <img
                  src='/ecomondo/logos/red_mex_bioenergia.webp'
                  width={220}
                  loading='lazy'
                  alt='anes'
                />
              </a>
            </div>
          </Marquee>
          <p
            className='fw-bold fs-2 text-center mt-5 pt-5'
            style={{ color: '#288705' }}
          >
            MEDIA PARTNERS
          </p>
          <Marquee gradient className='mt-3' direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://cuatro-cero.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/cuatroCero.webp'
                  width={200}
                  height={70}
                  loading='lazy'
                  alt='Cuatro Cero'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://heraldodemexico.com.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/heraldoHorizontal.webp'
                  width={200}
                  height={70}
                  loading='lazy'
                  alt='el_heraldo_mexico'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://mexicoindustry.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/mexico-industry.webp'
                  width={200}
                  height={70}
                  loading='lazy'
                  alt='mexico industry'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://globalenergy.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/global-energy-v2.webp'
                  height={65}
                  loading='lazy'
                  alt='global energy'
                />
              </a>
            </div>
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
                href='https://www.globalindustries.mx'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/global-industries_v2.webp'
                  height={65}
                  loading='lazy'
                  alt='global industries'
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
          <Marquee gradient className='mt-3'>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://factorenergetico.mx/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/factor-energetico.webp'
                  width={250}
                  height={119}
                  loading='lazy'
                  alt='Factor-energetico'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://biosferambiental.com/'
                target='_blank'
                rel='noreferrer'
              >
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
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://lasempresasverdes.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/empresas-verdes.webp'
                  width={190}
                  loading='lazy'
                  alt='las empresas verdes'
                />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a
                href='https://renewablematter.eu/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/ecomondo/logos/renewablematter.webp'
                  width={190}
                  loading='lazy'
                  alt='las empresas verdes'
                />
              </a>
            </div>
          </Marquee>
        </Container>
      </section>
      {/* PRESENCIA EN REDES SOCIALES */}
      {/* <section>
        <div data-aos="zoom-in" data-aos-duration="2500">
          <Container className="my-5">
            <Row className="text-secondary text-center mb-5">
              <Col
                lg={12}
                className="fs-1 fw-bolder"
                style={{ color: "#288705" }}
              >
                {t("home.social_networks.title")}
              </Col>
              <Col lg={12} className="">
                <img
                  src="/ecomondo/instagram.webp"
                  alt=""
                  width={35}
                  className="m-2"
                />
                <img
                  src="/ecomondo/facebook.webp"
                  alt=""
                  width={35}
                  className="m-2"
                />
                <img
                  src="/ecomondo/twitter.webp"
                  alt=""
                  width={35}
                  className="m-2"
                />
                <img
                  src="/ecomondo/linkedin.webp"
                  alt=""
                  width={35}
                  className="m-2"
                />
              </Col>
            </Row>
            <Row className="d-flex align-items-center justify-content-center">
              <Col lg={4}>
                <img src="/ecomondo/social_networks.webp" alt="" width={350} />
              </Col>
              <Col lg={8}>
                <Row className="text-secondary d-flex align-items-center justify-content-center">
                  <Col lg={3}>
                    <Bullets number="7000" duration="4" simbol_1="+" />
                    <p className="fs-6 text-uppercase">
                      <span
                        className="fs-3 fw-bolder"
                        style={{ color: "#288705" }}
                      >
                        {t("home.social_networks.topic_1")}
                      </span>
                      <br />
                      {t("home.social_networks.dec_1")}
                    </p>
                  </Col>
                  <Col lg={6}>
                    <Bullets number="1500000" duration="4" simbol_1="+" />
                    <p className="fs-6 text-uppercase">
                      <span
                        className="fs-3 fw-bolder"
                        style={{ color: "#288705" }}
                      >
                        {t("home.social_networks.topic_2")}
                      </span>
                      <br />
                      {t("home.social_networks.dec_2")}
                    </p>
                  </Col>
                  <Col lg={3}>
                    <p className="fs-6 text-uppercase">
                      <span
                        className="fs-3 fw-bolder"
                        style={{ color: "#288705" }}
                      >
                        {t("home.social_networks.topic_3")}
                      </span>
                      <br />
                      {t("home.social_networks.dec_3")}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}
    </>
  )
}
