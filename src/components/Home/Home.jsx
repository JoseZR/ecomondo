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
import { Bullets } from './Bullets'
import { useNearScreen } from '../hooks/useNearScreen'
import { Testimonials } from './Testimonials'

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
          src='/ecomondo/propuestav1_optix.mp4'
          autoPlay
          muted
          loop
          className='video-bg-ecomondo'
        ></video>
        <Container>
          <Row className='text-center'>
            <Col lg={12} sm={12} md={12} className='text-start my-auto text-center'>
              <p
                className='text-white fw-bold fs-3 text-uppercase'
                dangerouslySetInnerHTML={{ __html: t('home.slogan') }}
              ></p>
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
              <Container className="">
                <Row>
                  <Col lg={3} className="my-3"></Col>
                  <Col lg={3} className="my-3">
                    <a
                      href="https://ecomondo.ahmreg.com/"
                      target="_blank"
                      className="text-white fw-bold p-2 rounded-3"
                      style={{ backgroundColor: "#288705" }}
                    >
                      {t('menu.banner')}
                    </a>
                  </Col>
                  <Col lg={3} className="my-3">
                    <a
                      href="https://hfmexico.mx/ecomondo/program"
                      target="_blank"
                      className="text-white fw-bold p-2 rounded-3"
                      style={{ backgroundColor: "#288705" }}
                    >
                      {t('home.program_button')}
                    </a>
                  </Col>
                  <Col lg={3} className="my-3"></Col>
                </Row>
              </Container>
              {/* <p
                className='mt-4 text-white fw-light fs-3 lh-1'
                dangerouslySetInnerHTML={{ __html: t('home.slogan_2') }}
              ></p> */}
              <div className='mt-5 flex justify-end'>
                <img
                  className='mt-20'
                  src={
                    i18n.language === 'es'
                      ? '/ecomondo/logo-igeco-esp.webp'
                      : '/ecomondo/logo-igeco.webp'
                  }
                  alt='Expo de Sustentabilidad en Mexico'
                  width='350'
                />
              </div>
            </Col>
            <Row />
            {/*<Col md={6}>
              <img src='/ecomondo/world-ecomondo.webp' className='w-100' />
                </Col>*/}
          </Row>
        </Container>
      </section>
      <Container>
        <article className='text-start mb-5 pb-5'>
          <Row className='pt-5 px-3 fs-5'>
            <Col md={6} className='px-5'>
              <p
                className='fw-bold fs-2 home-text-color'
                style={{ color: '#288705' }}
              >
                ECOMONDO MÉXICO 2024
              </p>
              <p className='fs-4 text-justify'>{t('home.general_description')}</p>
              <br />
              {/* <p className='fs-3'>
                {t('home.date')} <br /> Expo Guadalajara{' '}
              </p> */}
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
          {/* <Row className='pt-5 px-3 fs-5'>
            <Col>
              <p style={{ textAlign: 'justify' }}>{t('home.text_1')}</p>
              <p style={{ textAlign: 'justify' }}>{t('home.text_2')}</p>
            </Col>
          </Row> */}
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
          </Row>
        </div>
      </Container>
      <section className='mt-5 home-whyexhibit'>
        <p className='gallery-title fw-bold fs-2'>
          {t('home.why_exhibit.title')}
        </p>
        <Container>
          <p className='fs-4'>{t('home.why_exhibit.description')}</p>
          <Row className='text-center fs-6 fw-semibold fst-italic'>
            <Col
              md
              className='p-5'
              data-aos='fade-down'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration='2500'
            >
              <img
                src='/ecomondo/icon1.webp'
                width='70'
                alt='crecimiento sostenible'
                loading='lazy'
              />
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
              <img
                src='/ecomondo/icon2.webp'
                width='70'
                alt='negocios sostenibles'
                loading='lazy'
              />
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
              <img
                src='/ecomondo/icon3.webp'
                width='80'
                alt='economía circular'
                loading='lazy'
              />
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
              <img
                src='/ecomondo/icon4.webp'
                width='90'
                alt='alianza estrategica'
                loading='lazy'
              />
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
                src='/ecomondo/icon5.webp'
                width='60'
                alt='conocimiento para la sostenibilidad de las industrias'
                loading='lazy'
              />
              <p className='mt-3 text-center text-sm font-bold'>
                {t('home.why_exhibit.item_5')}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <div ref={ref}>
        <Container fluid>
          {show && (
            <Row className='text-light'>
              <Col md className='background_num1'>
                <div className='position-num'>
                  <Bullets number='7500' duration='4' simbol_1='+' />
                  <div className='text-center fw-bold text-light'>
                    <i>{t('home.bullet_1')}</i>
                  </div>
                </div>
              </Col>
              <Col md className='background_num2'>
                <div className='position-num'>
                  <Bullets number='13000' duration='4' simbol_2='m&sup2;' />
                  <div className='text-center fw-bold text-light'>
                    <i>{t('home.bullet_2')}</i>
                  </div>
                </div>
              </Col>
              <Col md className='background_num3'>
                <div className='position-num'>
                  <Bullets number='80' duration='4' simbol_1='+' />
                  <div className='text-center fw-bold text-light'>
                    <i>{t('home.bullet_3')}</i><br /><br />
                  </div>
                </div>
              </Col>
              <Col md className='background_num4'>
                <div className='position-num'>
                  <Bullets number='462' duration='4' simbol_1='+' simbol_2='MDP' />
                  <div className='text-center fw-bold text-light'>
                    <i>{t('home.bullet_4')}</i><br />
                    <i>(2023)</i>
                  </div>
                </div>
              </Col>
              <Col md className='background_num5'>
                <div className='position-num'>
                  <Bullets number='6' duration='4' simbol_1='+' simbol_2='MDP' />
                  <div className='text-center fw-bold text-light'>
                    <i>{t('home.bullet_5')}</i>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1500">
          <Testimonials />
        </div>
        <Container className='my-5 py-5'>
          <p className='gallery-title fw-bold fs-2 mb-5'>{t('home.interests.title')}</p>
          <div data-aos="fade-right" data-aos-duration="3000">
            <Row className='text-center fs-6 fw-semibold fst-italic'>
              <Col className='text-center'>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_1.webp" alt="gestión de desperdicios y residuos"  width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item1")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_2.webp" alt="manejo de residuos químicos" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item5")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_3.webp" alt="bioenergia" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item2")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_4.webp" alt="iluminación inteligente" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item6")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_5.webp" alt="tratamiento de agua" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item3")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_6.webp" alt="certificaciones" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item7")}</p>
                </div>
              </Col>
              <Col>
                <div className='topic-size'>
                  <img src="/ecomondo/topic_7.webp" alt="transporte de desechos" width='100px' loading='lazy'/>
                  <p className='pt-3'>{t("home.interests.item4")}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <h2 className='fw-bold fs-2 pb-4 home-text-color text-uppercase'
            style={{ color: '#288705' }}>ECOMONDO MEXICO {t("home.rates.title")} 2024
          </h2>
          <p className='fst-italic fs-5 mb-5'>{t("home.rates.sub-title")}</p>
          <Row>
            <Col lg={4} md={4} sm={12} className="column-with-border p-4">
              <h4 className='fw-bolder'>{t("home.rates.item1.title1")}</h4>
              <p className='text-decoration-line-through fs-4 text fw-semibold'> {t("home.rates.item1.price1")} </p>
              <p className='fs-3 text fw-bolder text-danger'>{t("home.rates.item1.priece2")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
              <ul class="list-group-flush p-0 m-0">
                <li class="list-group-item"> {t("home.rates.item1.topic1")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic2")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic3")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic4")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic5")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic6")} </li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12} className="column-with-border p-4">
              <h4 className='fw-bolder'>{t("home.rates.item2.title1")}</h4>
              <p className='fs-3 text  fw-bolder'> {t("home.rates.item2.price1")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
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
            <Col lg={4} md={4} sm={12} className='p-4'>
              <h4 className='fw-bolder'>{t("home.rates.item3.title1")}</h4>
              <p className='fs-3 text fw-bolder'>{t("home.rates.item3.price1")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
              <ul class="list-group-flush p-0 m-0">
                <li class="list-group-item"> {t("home.rates.item3.topic1")} </li>
                <li class="list-group-item"> {t("home.rates.item3.topic2")} </li>
                <li class="list-group-item"> {t("home.rates.item3.topic3")} </li><br />
                <li class="list-group-item fw-semibold"> {t("home.rates.item3.topic4")} </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='galleryPage mt-5'>
        <h1 className='gallery-title pt-5'>
          {t('menu.media_hub_1')} - Ecomondo 2023
        </h1>
        <GalleryYear year={gallery2023} />
      </Container>
      <section className='pt-5 pb-5'>
        <p className='fw-bold fs-2 text-center' style={{ color: '#288705' }}>
          {t('home.exhibitors')}
        </p>
        <Marquee gradient direction='letf'>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://brimexenergy.com.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/brimex.webp'
                width={180}
                height={100}
                loading='lazy'
                alt='brimex'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://www.grupocauda.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/cauda.webp'
                width={180}
                height={90}
                loading='lazy'
                alt='cauda'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://mx.kaeser.com/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/kaeser.webp'
                width={180}
                height={100}
                loading='lazy'
                alt='kaeser'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='http://www.magritep.com.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/magritep.webp'
                width={180}
                height={100}
                loading='lazy'
                alt='magritep'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://mru-instruments.com/es/?cn-reloaded=1'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/mru_air.webp'
                width={160}
                height={90}
                loading='lazy'
                alt='mru'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://www.ticsa.com.mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/ticsa.webp'
                width={150}
                height={80}
                loading='lazy'
                alt='ticsa'
              />
            </a>
          </div>
          <div className='exibitorSlider text-center h-100'>
            <a
              href='https://www.concordenviro.in/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/ecomondo/logos/exhibitors/concord.webp'
                width={200}
                height={100}
                loading='lazy'
                alt='ticsa'
              />
            </a>
          </div>
        </Marquee>
      </section>
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
            className='fw-bold fs-2 text-center mt-5 pt-5'
            style={{ color: '#288705' }}
          >
            MEDIA PARTNERS
          </p>
          <Marquee gradient className='mt-3'>
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
                  src='/ecomondo/logos/global-energy.webp'
                  width={200}
                  height={80}
                  loading='lazy'
                  alt='global-energy-mx'
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
          <Marquee gradient className='mt-3' direction='letf'>
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
          </Marquee>
        </Container>
      </section>
      <section>
        <Container className='my-5'>
          <Row className='text-secondary text-center mb-5'>
            <Col lg={12} className='fs-1 fw-bolder' style={{ color: '#288705' }}>PRESENCIA EN REDES SOCIALES</Col>
            <Col lg={12} className=''>
              <img src="/ecomondo/instagram.webp" alt="" width={35} className='m-2'/>
              <img src="/ecomondo/facebook.webp" alt="" width={35} className='m-2'/>
              <img src="/ecomondo/twitter.webp" alt="" width={35} className='m-2'/>
              <img src="/ecomondo/linkedin.webp" alt="" width={35} className='m-2'/>
            </Col>
          </Row>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col lg={4}>
              <img src="/ecomondo/social_networks.webp" alt="" width={350} />
            </Col>
            <Col lg={8}>
              <Row className='text-secondary d-flex align-items-center justify-content-center'>
                <Col lg={3}>
                  <Bullets number='7000' duration='4' simbol_1='+' />
                  <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#288705' }}>{t("home.social_networks.topic_1")}</span><br />{t("home.social_networks.dec_1")}</p>
                </Col>
                <Col lg={6}>
                  <Bullets number='1500000' duration='4' simbol_1='+' />
                  <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#288705' }}>{t("home.social_networks.topic_2")}</span><br />{t("home.social_networks.dec_2")}</p>
                </Col>
                <Col lg={3}>
                  <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#288705' }}>{t("home.social_networks.topic_3")}</span><br />{t("home.social_networks.dec_3")}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
