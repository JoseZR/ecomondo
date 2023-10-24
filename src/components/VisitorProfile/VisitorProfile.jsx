import { Col, Container, Row} from 'react-bootstrap'
import './VisitorProfile.css'
import { t } from 'i18next'
export function VisitorProfile () {
    return(
        <>
            <section  className='bg-secondary-text'>
                <Container className='mt-5 mb-5'>
                    <i>Ecomondo México</i>
                    <p className='fw-bold fs-1'>{t('visitorProfile.title')}</p>
                    <Row className="justify-content-md-center mt-5 mb-5 visitor">
                        <Col sm={4} md={6} lg={6}><div className='visitor-profile visitor1' dangerouslySetInnerHTML={{ __html: t('visitorProfile.description') }} /></Col>
                        <Col sm={4} md={6} lg={6} className=''><div className='bg-visitorProfile' /></Col>
                    </Row>
                    <Row className="justify-content-md-center mt-5 mb-5 visitor">
                        <Col sm={4} md={6} lg={6} className='elemento01'><div className='bg-visitorProfile2' /></Col>
                        <Col sm={4} md={6} lg={6} className='elemento02'><div className='visitor-profile visitor2' dangerouslySetInnerHTML={{ __html: t('visitorProfile.description2') }} /></Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}