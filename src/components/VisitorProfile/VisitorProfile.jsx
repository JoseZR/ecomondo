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
                        <Col sm={4} md={6} lg={6}>
                            <div className='visitor-profile visitor1'>
                                <ul>
                                    <li>{t('visitorProfile.item_1')}</li>
                                    <li>{t('visitorProfile.item_2')}</li>
                                    <li>{t('visitorProfile.item_3')}</li>
                                    <li>{t('visitorProfile.item_4')}</li>
                                    <li>{t('visitorProfile.item_5')}</li>
                                    <li>{t('visitorProfile.item_6')}</li>
                                    <li>{t('visitorProfile.item_7')}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={4} md={6} lg={6} className=''><div className='bg-visitorProfile' /></Col>
                    </Row>
                    <Row className="justify-content-md-center mt-5 mb-5 visitor">
                        <Col sm={4} md={6} lg={6} className='elemento01'><div className='bg-visitorProfile2' /></Col>
                        <Col sm={4} md={6} lg={6}>
                            <div className='visitor-profile visitor2'>
                                <ul>
                                    <li>{t('visitorProfile.item_8')}</li>
                                    <li>{t('visitorProfile.item_9')}</li>
                                    <li>{t('visitorProfile.item_10')}</li>
                                    <li>{t('visitorProfile.item_11')}</li>
                                    <li>{t('visitorProfile.item_12')}</li>
                                    <li>{t('visitorProfile.item_13')}</li>
                                    <li>{t('visitorProfile.item_14')}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}