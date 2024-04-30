import React, { useState } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { rates_eco } from './constans_rates';

export function Rates() {
    const { t, i18n } = useTranslation();
    const [preciosEco, setPreciosEco] = useState(rates_eco.rates);

    return (
        <Container>
            <h2
                className="fw-bold fs-2 pb-4 home-text-color text-uppercase"
                style={{ color: "#288705" }}
            >
                ECOMONDO MEXICO {t("home.rates.title")} 2025
            </h2>
            <p className="fst-italic fs-5 mb-5">{t("home.rates.sub-title")}</p>

            <Row xs={1} md={2} lg={3} className="g-4">
                {preciosEco.map((preEco, index) => (
                    <Col key={index}>
                        <Card className='card-padre'>
                            <Card.Body className='p-4'>
                                <Card.Title className='fs-3 fw-bold text-center pb-3'>{i18n.language === 'en' ? preEco.title.en : preEco.title.es}</Card.Title>
                                <Card.Text className='text-start'>
                                    <p className='fs-5 pb-3'> {i18n.language === 'en' ? preEco.early_price_title.en : preEco.early_price_title.es} <br />
                                        <span className='fs-3 fw-bold'>  {i18n.language === 'en' ? preEco.early_price.en : preEco.early_price.es}  </span> <br />
                                        {i18n.language === 'en' ? preEco.deadline.en : preEco.deadline.es} </p>
                                    <p className='text-start fs-5'> {i18n.language === 'en' ? preEco.regular_price_title.en : preEco.regular_price_title.es} <br />
                                        <span className='fs-3 fw-bold'> {i18n.language === 'en' ? preEco.regular_price.en : preEco.regular_price.es} </span> </p>
                                    <div className="border-top my-4"></div>
                                    <p className='fw-bold fs-4'>{i18n.language === 'en' ? preEco.includes_title.en : preEco.includes_title.es}</p>
                                    <ul className='p-0 m-0'>
                                        {preEco.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className='d-flex align-items-start pt-2'>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="mx-2" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <p className='p-0 m-0'>{i18n.language === 'en' ? item.description.en : item.description.es}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className='fw-bold pt-3' >{i18n.language === 'en' ? preEco.not_included.en : preEco.not_included.es}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
