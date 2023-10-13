import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next';
export function Home () {
    const { t, i18n } = useTranslation();
    return (
        <>
            <Container>
                <header>
                    <nav className='my-5 py-3 home-eco-submenu'>
                        <a  className='sub-menu-doc'
                            href={i18n.language === 'en'
                                ? '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-INGLÉS.pdf'
                                : '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-ESPAÑOL.pdf'}
                            target='_blank' rel='noreferrer'
                        >
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
                            </svg>{t('home.factsheet')}
                        </a>
                        <a href='https://spmx24.mapyourshow.com/8_0/floorplan/index.cfm' target='_blank' rel='noreferrer'  className='sub-menu-doc'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z' />
                            </svg> {t('home.floorplan')}
                        </a>
                        <a className='sub-menu-doc'
                            href={i18n.language === 'en'
                                ? '/files/RESULTS-REPORT-SSM-2023-ENG.pdf'
                                : '/files/REPORTE-DE-RESULTADOS-SSM-2023-ESP.pdf'}
                            target='_blank' rel='noreferrer'
                        >
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' />
                            </svg>
                            {t('home.results')}
                        </a>
                        <a href='/files/Directorio-SSM-2023.pdf' target='_blank' rel='noreferrer' className='sub-menu-doc'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30} >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' />
                            </svg>{t('home.exhibitor_directory')}
                        </a>
                        <a href='https://www.hfmexico.mx/solarpowermexico/' style={{ padding: 0, background: 'none' }} target='_blank' rel='noreferrer'>
                            <img width={150} src={i18n.language === 'es' ? '/SSM-boton-ES.webp' : '/SSM-boton-EN.webp'} />
                        </a>
                    </nav>
                </header>
            </Container>
            <img src={i18n.language === 'es' ? '/KEVISUAL_ECOMONDO2024_ES.webp' : '/KEVISUAL_ECOMONDO2024_EN.webp'} alt="keyvisual-ecomondo2024" className='w-100 mb-5'/>
            <section className='my-5'>
                <Container>
                    <p className='fw-bold fs-3 text-secondary text-center text-uppercase'>{t('home.sponsor_1')}</p>
                    <Row className='text-center'>
                        <Col md={3} className='mx-auto my-auto'>
                            <a href='https://www.aspiria.mx/' target='_blank' rel='noreferrer'>
                                <img src='/sponsor/aspiria.webp' width={250} loading='lazy' alt='italianExhibitionGroup' />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <article className='text-start my-5'>
                    <Row className='pt-5 px-3 fs-5'>
                        <Col md={8}>
                            <p className='fw-bold fs-1 home-text-color' style={{color:'#288705'}}>ECOMONDO MÉXICO</p>
                            <p>{t('home.text_1')}</p>
                            <p>{t('home.text_2')}</p>
                        </Col>
                        <Col md={4} className='m-0'>
                            <img src={i18n.language === 'es' ? '/eco_2024_es.webp' : '/eco_2024_en.webp'} alt="ecomondo" width={300} />
                        </Col>
                    </Row>
                </article>
            </Container>
            <Container fluid>
                <p className='fw-bold fs-3 pb-4 home-text-color text-uppercase' style={{ color: '#288705' }}>Ejes del evento</p>
                <div className='section-evento'>
                    <Row>
                        <Col xs={12} md={6} lg={3} className='text-center'>
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <p>Hover me</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className='text-center'>
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <p>Hover me</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className='text-center'>
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <p>Hover me</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className='text-center'>
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <p>Hover me</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">Card Hover</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipii
                                            voluptas ten mollitia pariatur odit, ab
                                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                            necessitatibus dignissimos molestias.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}