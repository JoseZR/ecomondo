import { Col, Container, Row } from 'react-bootstrap'
import './AboutUs'
import { useTranslation } from 'react-i18next';
export function AboutUs () {
    const { t } = useTranslation();
    return (
        <Container>
                <article className='text-start my-5'>
                    <Row className='pt-5 px-3 fs-5'>
                        <Col md={6} className='mx-auto my-auto'>
                            <p className='fw-bold fs-1 home-text-color' style={{color:'#288705'}}>ECOMONDO MÉXICO</p>
                            <p>{t('aboutUs.description')}</p>
                        </Col>
                        <Col md={6} className='mx-auto my-auto'>
                            <img src='/about_us_ecomondo.webp' alt="ecomondo" width={300} className='w-100'/>
                        </Col>
                    </Row>
                </article>
            </Container>
    )
}