import { Col, Container, Row } from 'react-bootstrap'
import Aos from "aos";
import { useEffect } from "react";
import './HomeNew.css'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import { exhibitors1, exhibitors2, exhibitors3, exhibitorsItaly1, exhibitorsItaly2, exhibitorsChihuahua1, exhibitorsChihuahua2 } from "../../constans_logos";

export function HomeNew() {
    const { t } = useTranslation()
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <><section class="background-image d-flex justify-content-center align-items-center">
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
                        <Col xxl={6}><h1 className='date-title mt-5'> {t("home.new-eco-date")} </h1></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={6} sm={3} md={3} lg={2}>  <img src="/igeco_bn.webp" alt="" className="img-fluid" /> </Col>
                        <Col xs={6} sm={3} md={3} lg={2}>  <img src="/deutsche_messe_bn.webp" alt="" className="img-fluid" /> </Col>
                    </Row>
                </div>

            </Container>
        </section>
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
        </>
    )
}
