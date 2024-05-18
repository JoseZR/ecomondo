import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Aos from "aos";
import { useEffect } from "react";
import './HomeNew.css'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import { exhibitors1, exhibitors2, exhibitors3, exhibitorsItaly1, exhibitorsItaly2, exhibitorsChihuahua1, exhibitorsChihuahua2 } from "../../constans_logos";
import { GalleryYear } from "../GalleryPage/GalleryYear";
import { gallery2024 } from "../GalleryPage/constans_gallery";
import { Rates } from '../Rates/Rates';


export function HomeNew() {
    const { t, i18n } = useTranslation()
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <section className="background-image d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={10} sm={10} md={8} lg={5}>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="100"
                                data-aos-duration="500"
                                data-aos-offset="0">
                                <img src="/ecomondo_logo_2025.webp" alt="ecomondo 2025" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-delay="800" data-aos-duration="1000">
                        <Row className='justify-content-md-center'>
                            <Col xxl={6}>
                                <h1 className='date-title mt-5'> {t("home.new-eco-date")}</h1>
                                <p className='fs-3 mb-5'>Expo Guadalajara, Jalisco, México</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={6} sm={3} md={3} lg={2}>  <img src="/igeco_bn.webp" alt="" className="img-fluid" /> </Col>
                            <Col xs={6} sm={3} md={3} lg={2}>  <img src="/deutsche_messe_bn.webp" alt="" className="img-fluid" /> </Col>
                        </Row>
                    </div>

                </Container>
            </section>

            {/* Sobre ecomondo */}
            <Container>
                <article className="text-start pb-5">
                    <Row className="pt-5 px-3 fs-5">
                        <Col md={12} className="px-5">
                            <p
                                className="fw-bold fs-2 home-text-color"
                                style={{ color: "#288705" }}
                            >
                                ECOMONDO MÉXICO 2025
                            </p>
                            <p className="fs-4" style={{ textAlign: "justify" }}>
                                {t("home.general_description")}
                            </p>
                            <br />
                        </Col>
                        {/* <Col md={6} className="my-auto">
                            {i18n.language === "es" ? (
                                <video
                                    className="w-100"
                                    controls
                                    src="/Ecomondo_2024_ESV1.mp4"
                                    poster="/posterVideoEco2023.webp"
                                    loading="lazy"
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                />
                            ) : (
                                <video
                                    className="w-100"
                                    controls
                                    src="/Ecomondo_2024_ENV1.mp4"
                                    poster="/posterVideoEco2023.webp"
                                    loading="lazy"
                                    autoPlay
                                    muted
                                    playsInline
                                    loop
                                />
                            )}
                        </Col> */}
                    </Row>
                </article>
            </Container>

            {/* ACCESOS DIRECTOS  */}
            <Container className='mb-5 pb-5'>
                <div className="container-items">
                    <a href={
                      i18n.language === 'es'
                            ? '/files/ECO_FACTSHEET_2025_V3_ESP_09_05_2024.pdf'
                            : '/files/ECO_FACTSHEET_2025_V3_ENG_09_05_2024.pdf'
                    }
                        target='_blank'
                        className='text-decoration-none'>
                        <div className="btn-item"> {t("menu.exhibitors_2")} </div>
                    </a>
                    <a href='/files/ECOMONDO_floorplan_2025_v7_16_05_2024.pdf'
                        target='_blank' className='text-decoration-none'>
                        <div className="btn-item"> {t("menu.exhibitors_3")} </div>
                    </a>
                    <a href='/files/ECOMONDO_2025_SpaceAgreement_ed_160524.pdf'
                        target='_blank' className='text-decoration-none'>
                        <div className="btn-item"> {t("menu.exhibitors_4")} </div>
                    </a>
                    <a href={
                        i18n.language === 'es'
                            ? '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ESP_AF_2024_v3.pdf'
                            : '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ENG_AF_2024_v3.pdf'
                    } target='_blank' className='text-decoration-none'>
                        <div className="btn-item"> {t("menu.ecomondo2023_2")} 2024 </div>
                    </a>
                </div>
            </Container>

            {/* PATROCINADORES */}
            <Container className="pb-5">
                <p className="fw-bold fs-3 pb-4 home-text-color text-uppercase" style={{ color: "#288705" }}>
                    {t("home.sponsor_1")}
                </p>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={4} >
                        <a href="https://www.mase.gov.it/" target="_blank" className="d-flex  align-items-baseline">
                            <img
                                src="/logo_mase.webp"
                                alt="mase-org"
                                className="img-fluid my-3"
                                style={{ maxHeight: "110px" }}
                            />
                        </a>
                        <a href="https://www.mase.gov.it/" target="_blank">
                            <Button variant="link" className="fs-5">{t("home.btn_moreInformation")}</Button>
                        </a>
                    </Col>
                </Row>
                <p className="fw-bold mt-5 fs-3 home-text-color text-uppercase" style={{ color: "#288705" }}>
                    {t("home.sponsor_2")} 2024
                </p>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={12} lg={3}>
                        <a href="https://www.longi.com/mx/" target="_blank">
                            <img
                                src="/logos/longi_logo.webp"
                                alt="longi"
                                className="img-fluid"
                                style={{ maxHeight: "90px" }}
                            />
                        </a>
                    </Col>
                    <Col xs={12} md={12} lg={3}>
                        <a href="https://www.cpm.coop/" target="_blank">
                            <img
                                src="/logos/caja-popular.webp"
                                alt="caja popular mexicana"
                                className="img-fluid"
                                style={{ maxHeight: "120px" }}
                            />
                        </a>
                    </Col>
                </Row>
            </Container>

            {/* EJES DEL EVENTO */}
            <Container fluid className='pt-5'>
                <p
                    className="fw-bold fs-3 pb-4 home-text-color text-uppercase"
                    style={{ color: "#288705" }}
                >
                    {t("home.zone")}
                </p>
                <div className="section-evento">
                    <Row className="justify-content-md-center  ">
                        <Col xs={12} md={6} lg={3} className="text-center py-3">
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <img
                                            className="top-image"
                                            src="/eco_control-residuos.webp"
                                            alt=""
                                        />
                                        <br />
                                        <br />
                                        <p className="title fs-5 circle-1">
                                            {t("home.zone_1.title")}
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t("home.zone_1.title")}</p>
                                        <ul className="text-start">
                                            <li>{t("home.zone_1.item_1")}</li>
                                            <li>{t("home.zone_1.item_2")}</li>
                                            <li>{t("home.zone_1.item_3")}</li>
                                            <li>{t("home.zone_1.item_4")}</li>
                                            <li>{t("home.zone_1.item_5")}</li>
                                            <li>{t("home.zone_1.item_6")}</li>
                                            <li>{t("home.zone_1.item_7")}</li>
                                            <li>{t("home.zone_1.item_8")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center py-3">
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <img
                                            className="top-image"
                                            src="/eco_bioenergia.webp"
                                            alt="Imagen superior"
                                        />
                                        <br />
                                        <br />
                                        <p className="title fs-5 circle-2">
                                            {t("home.zone_2.title")}
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t("home.zone_2.title")}</p>
                                        <ul className="text-start">
                                            <li>{t("home.zone_2.item_1")}</li>
                                            <li>{t("home.zone_2.item_2")}</li>
                                            <li>{t("home.zone_2.item_3")}</li>
                                            <li>{t("home.zone_2.item_4")}</li>
                                            <li>{t("home.zone_2.item_5")}</li>
                                            <li>{t("home.zone_2.item_6")}</li>
                                            <li>{t("home.zone_2.item_7")}</li>
                                            <li>{t("home.zone_2.item_8")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center py-3">
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <img
                                            className="top-image"
                                            src="/tratado-agua_eco.webp"
                                            alt="Imagen superior"
                                        />
                                        <br />
                                        <br />
                                        <p className="title fs-5 circle-3">
                                            {t("home.zone_3.title")}
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t("home.zone_3.title")}</p>
                                        <ul className="text-start">
                                            <li>{t("home.zone_3.item_1")}</li>
                                            <li>{t("home.zone_3.item_2")}</li>
                                            <li>{t("home.zone_3.item_3")}</li>
                                            <li>{t("home.zone_3.item_4")}</li>
                                            <li>{t("home.zone_3.item_5")}</li>
                                            <li>{t("home.zone_3.item_6")}</li>
                                            <li>{t("home.zone_3.item_7")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center py-3">
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <img
                                            className="top-image"
                                            src="/sustainable_cities.webp"
                                            alt="Imagen superior"
                                        />
                                        <br />
                                        <br />
                                        <p className="title fs-5 circle-4">
                                            {t("home.zone_4.title")}
                                        </p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t("home.zone_4.title")}</p>
                                        <ul className="text-start">
                                            <li>{t("home.zone_4.item_1")}</li>
                                            <li>{t("home.zone_4.item_2")}</li>
                                            <li>{t("home.zone_4.item_3")}</li>
                                            <li>{t("home.zone_4.item_4")}</li>
                                            <li>{t("home.zone_4.item_5")}</li>
                                            <li>{t("home.zone_4.item_6")}</li>
                                            <li>{t("home.zone_4.item_7")}</li>
                                            <li>{t("home.zone_4.item_8")}</li>
                                            <li>{t("home.zone_4.item_9")}</li>
                                            <li>{t("home.zone_4.item_10")}</li>
                                            <li>{t("home.zone_4.item_11")}</li>
                                            <li>{t("home.zone_4.item_12")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

            <Rates />

                    
                    
            {/* LOGOS DE EXPOSITORES */}
            <Container className="pt-5 pb-5">
                <p className="fw-bold fs-2 text-center" style={{ color: "#288705" }}>
                    {t("home.exhibitors")} 2024
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
            <Container className="py-5">
                <p className="fw-bold fs-2 text-center text-uppercase" style={{ color: "#288705" }}> {t("home.italy-hall")} 2024</p>
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
            <Container className="py-5">
                <p className="fw-bold fs-2 text-center text-uppercase" style={{ color: "#288705" }}>{t("home.chihuahua-hall")} 2024</p>
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
            {/* ALIADOS ESTRATÉGICOS y MEDIA PARTNERS */}
            <section className="">
                <Container className="">
                    <p className="fw-bold fs-2 text-center" style={{ color: "#288705" }}>
                        {t("home.strategies_allies")} 2024
                    </p>
                    <Marquee gradient direction="letf">
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://alianzaempresarial.jalisco.gob.mx/deinteres.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/alianza_empresarial_v2.webp"
                                    width={230}
                                    loading="lazy"
                                    alt="alianza-empresarial"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://alinvest-verde.eu/es_es/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/ai_invest.webp"
                                    width={200}
                                    height={50}
                                    loading="lazy"
                                    alt="al-invest"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://mexiko.ahk.de/ueber-uns/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/ahk.webp"
                                    width={250}
                                    height={50}
                                    loading="lazy"
                                    alt="ahk-mexico"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.canchammx.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/cancham.webp"
                                    width={200}
                                    height={80}
                                    loading="lazy"
                                    alt="cancham-mx"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.giz.de/en/worldwide/33041.html"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/giz.webp"
                                    width={250}
                                    height={108}
                                    loading="lazy"
                                    alt="giz"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://ambcittadelmessico.esteri.it/it/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/maeci_italia.webp"
                                    width={200}
                                    height={130}
                                    loading="lazy"
                                    alt="ambasciata-d-italia-messico"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.greendestinations.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/green.webp"
                                    width={200}
                                    height={120}
                                    loading="lazy"
                                    alt="green-destinations"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/pmrj.webp"
                                    width={120}
                                    height={120}
                                    loading="lazy"
                                    alt="pmrj-manejo-residuos-jalisco"
                                />
                            </a>
                        </div>
                    </Marquee>
                    <Marquee gradient className="mt-3">
                        <div className="exibitorSlider text-center h-100">
                            <a href="https://amrre.org.mx/" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/amrre.webp"
                                    width={120}
                                    height={120}
                                    loading="lazy"
                                    alt="recicladores-residuos-electronicos"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/sello_rms.webp"
                                    width={200}
                                    height={60}
                                    loading="lazy"
                                    alt="sello-rms"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/amrcd.webp"
                                    height={100}
                                    loading="lazy"
                                    alt="amrcd"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/red-nacional.webp"
                                    height={100}
                                    loading="lazy"
                                    alt="red nacional"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/earth.webp"
                                    height={100}
                                    loading="lazy"
                                    alt="earth"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/kas.webp"
                                    height={100}
                                    loading="lazy"
                                    alt="kas"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/anes.webp"
                                    width={190}
                                    loading="lazy"
                                    alt="anes"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/red_mex_bioenergia.webp"
                                    width={220}
                                    loading="lazy"
                                    alt="anes"
                                />
                            </a>
                        </div>
                    </Marquee>
                    <p
                        className="fw-bold fs-2 text-center mt-5 pt-5"
                        style={{ color: "#288705" }}
                    >
                        MEDIA PARTNERS 2024
                    </p>
                    <Marquee gradient className="mt-3" direction="letf">
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://cuatro-cero.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/cuatroCero.webp"
                                    width={200}
                                    height={70}
                                    loading="lazy"
                                    alt="Cuatro Cero"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://heraldodemexico.com.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/heraldoHorizontal.webp"
                                    width={200}
                                    height={70}
                                    loading="lazy"
                                    alt="el_heraldo_mexico"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://mexicoindustry.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/mexico-industry.webp"
                                    width={200}
                                    height={70}
                                    loading="lazy"
                                    alt="mexico industry"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://globalenergy.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/global-energy-v2.webp"
                                    height={65}
                                    loading="lazy"
                                    alt="global energy"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.cosmos.com.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/cosmos.webp"
                                    width={200}
                                    height={90}
                                    loading="lazy"
                                    alt="cosmos"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://energyandcommerce.com.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/energy-commerce.webp"
                                    width={150}
                                    height={60}
                                    loading="lazy"
                                    alt="energy-&-commerce"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://energiahoy.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/energia-hoy.webp"
                                    width={200}
                                    height={50}
                                    loading="lazy"
                                    alt="energia-hoy"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="https://dplnews.com/" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/dpl.webp"
                                    width={180}
                                    height={70}
                                    loading="lazy"
                                    alt="dpl-news"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.globalindustries.mx"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/global-industries_v2.webp"
                                    height={65}
                                    loading="lazy"
                                    alt="global industries"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://greentology.life/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/GreentologyV2.webp"
                                    width={250}
                                    height={162}
                                    loading="lazy"
                                    alt="greentology"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://revistaconsultoria.com.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/consultoria.webp"
                                    width={250}
                                    height={50}
                                    loading="lazy"
                                    alt="consultoria-revista"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://www.vanguardia-industrial.net/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/vanguardia-industrial.webp"
                                    width={200}
                                    height={100}
                                    loading="lazy"
                                    alt="vanguardia-industrial"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://worldconstruccion.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/construccion.webp"
                                    width={200}
                                    height={40}
                                    loading="lazy"
                                    alt="world-construccion"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a href="https://www.retema.es/" target="_blank" rel="noreferrer">
                                <img
                                    src="/logos/retema.webp"
                                    width={250}
                                    height={63}
                                    loading="lazy"
                                    alt="Retema"
                                />
                            </a>
                        </div>
                    </Marquee>
                    <Marquee gradient className="mt-3">
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://factorenergetico.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/factor-energetico.webp"
                                    width={250}
                                    height={119}
                                    loading="lazy"
                                    alt="Factor-energetico"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://biosferambiental.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/biosfera.webp"
                                    width={180}
                                    height={90}
                                    loading="lazy"
                                    alt="biosfera"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://discovercleantech.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/clean-tech.webp"
                                    width={200}
                                    height={50}
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://petroleoenergia.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/petroleo-energia.webp"
                                    width={190}
                                    height={110}
                                    loading="lazy"
                                    alt="petroleoenergia"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://lasempresasverdes.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/empresas-verdes.webp"
                                    width={190}
                                    loading="lazy"
                                    alt="las empresas verdes"
                                />
                            </a>
                        </div>
                        <div className="exibitorSlider text-center h-100">
                            <a
                                href="https://renewablematter.eu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/logos/renewablematter.webp"
                                    width={190}
                                    loading="lazy"
                                    alt="las empresas verdes"
                                />
                            </a>
                        </div>
                    </Marquee>
                </Container>
            </section>

            <Container className="galleryPage">
                <h1 className="gallery-title pt-5">
                    {t("menu.media_hub_1")} Ecomondo 2024
                </h1>
                <GalleryYear year={gallery2024} />
            </Container>
        </>
    )
}
