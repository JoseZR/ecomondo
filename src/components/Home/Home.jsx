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
                        <Col md={4} className=''>
                            <img src={i18n.language === 'es' ? '/eco_2024_es.webp' : '/eco_2024_en.webp'} alt="ecomondo" width={300} className='w-100'/>
                        </Col>
                    </Row>
                </article>
            </Container>
            <Container fluid>
                <p className='fw-bold fs-3 pb-4 home-text-color text-uppercase' style={{ color: '#288705' }}>{t('home.zone')}</p>
                <div className='section-evento'>
                    <Row>
                        <Col xs={12} md={6} lg={3} className='text-center py-3'>
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <div className="circle circle-1"></div><br />
                                        <p className='title fs-5 circle-1'>{t('home.zone_1.title')}</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t('home.zone_1.title')}</p>
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
                            <div className="card-container">
                                <div className="card">
                                <div className="front-content">
                                        <div className="circle circle-2"></div><br />
                                        <p className='title fs-5 circle-2'>{t('home.zone_2.title')}</p>
                                    </div>
                                    <div className="content">
                                        <p className="heading">{t('home.zone_2.title')}</p>
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
                            <div className="card-container">
                                <div className="card">
                                <div className="front-content">
                                    <div className="circle circle-3"></div><br />
                                        <p className='title fs-5 circle-3'>{t('home.zone_3.title')}</p>
                                    </div>
                                    <div className="content">
                                    <p className="heading">{t('home.zone_3.title')}</p>
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
                            <div className="card-container">
                                <div className="card">
                                    <div className="front-content">
                                        <div className="circle circle-4"></div><br />
                                        <p className='title fs-5 circle-4'>{t('home.zone_4.title')}</p>
                                    </div>
                                    <div className="content">
                                    <p className="heading">{t('home.zone_4.title')}</p>
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
            {/* <section className='mt-5 home-whyexhibit'>
                <p className='fw-bold fs-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={80}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z' />
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg> {t('home.why_exhibit.title')}
                </p>
                <p className='d-flex align-items-center gap-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg> {t('home.why_exhibit.item_1')}
                </p>
                <p className='d-flex align-items-center gap-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg> {t('home.why_exhibit.item_2')}
                </p>
                <p className='d-flex align-items-center gap-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg> {t('home.why_exhibit.item_3')}
                </p>
            </section> */}
            <section className='mt-5 home-whyexhibit'>
            <p className='fw-bold fs-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={80}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z' />
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg> {t('home.why_exhibit.title')}
                </p>
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg={4} className='p-5'>
                            <img src="/item01.webp" alt="ecomondo" />
                            <p className='d-flex align-items-center gap-3 pt-4'>{t('home.why_exhibit.item_1')}</p>
                        </Col>
                        <Col xs={12} md={4} lg={4} className='p-5'>
                            <img src="/item02.webp" alt="ecomondo" />
                            <p className='d-flex align-items-center gap-3 pt-4'>{t('home.why_exhibit.item_2')}</p>
                        </Col>
                        <Col xs={12} md={4} lg={4} className='p-5'>
                            <img src="/item03.webp" alt="ecomondo" />
                            <p className='d-flex align-items-center gap-3 pt-4'>{t('home.why_exhibit.item_3')}</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}