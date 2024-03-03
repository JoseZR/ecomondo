import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next'
import './Testimonials.css'

export function Testimonials() {
  const { t } = useTranslation()
  return (
    <>
      <Container className="my-5">
        <h2 className='fw-bold fs-2 pt-5 pb-4 home-text-color text-uppercase'
          style={{ color: '#288705' }}>{t("testimonials.title")}</h2>
        <Row className="my-3">
          <Col xs={12} md={6} lg={6} className="px-4">
            <div data-aos="zoom-in" data-aos-duration="1500">
              <Row className="text-center p-2">
                <Col lg={4} className=" d-flex justify-content-center align-items-start">
                  <div className="overflow-hidden img-experiences text-center">
                    <img src="/ecomondo/testimonials_1.webp" className="img-fluid" alt="Imagen de perfil" />
                  </div>
                </Col>
                <Col lg={8} className="txt-experiences">
                  <p className="m-3">
                    <h5 className="font-weight-bold"><strong>Antonio Luna</strong></h5>
                    <p className="fs-6 fst-italic">{t("testimonials.person1.position")}</p>
                    <p style={{textAlign:'justify'}}>
                      {t("testimonials.person1.description")}
                    </p>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="px-4">
            <div data-aos="zoom-in" data-aos-duration="1500">
              <Row className="text-center p-2">
                <Col lg={4} className=" d-flex justify-content-center align-items-start">
                  <div className="overflow-hidden img-experiences text-center">
                    <img src="/ecomondo/testimonials_2.webp" className="img-fluid" alt="Imagen de perfil" />
                  </div>
                </Col>
                <Col lg={8} className="txt-experiences">
                  <p className="m-3">
                    <h5> <strong>Paolo Malfitano</strong></h5>
                    <p className="fs-6 fst-italic">{t("testimonials.person2.position")}</p>
                    <p className="text-justify ">
                      {t("testimonials.person2.description")}
                    </p>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={6} lg={6} className="px-4">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <Row className="text-center p-2">
                <Col lg={4} className=" d-flex justify-content-center align-items-start">
                  <div className="overflow-hidden img-experiences text-center">
                    <img src="/ecomondo/testimonials_3.webp" className="img-fluid" alt="Imagen de perfil" />
                  </div>
                </Col>
                <Col lg={8} className="txt-experiences">
                  <p className="m-3">
                    <h5 className=""><strong>{t("testimonials.type")}</strong></h5>
                    <p className="">
                      {t("testimonials.person3.description")}
                    </p>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="px-4">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <Row className="text-center p-2">
                <Col lg={4} className=" d-flex justify-content-center align-items-start">
                  <div className="overflow-hidden img-experiences text-center">
                    <img src="/ecomondo/testimonials_4.webp" className="img-fluid" alt="Imagen de perfil" />
                  </div>
                </Col>
                <Col lg={8} className="txt-experiences">
                  <p className="m-3">
                    <h5><strong>{t("testimonials.type")}</strong></h5><p className="">{t("testimonials.person4.description")}</p>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}