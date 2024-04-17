import { useTranslation } from "react-i18next";
import "./Program.css";
import { Accordion, Col, Container, Nav, Row, Tab, Tabs, Image } from "react-bootstrap";

import { programECO } from "../../constans_program";
import { DetailSpeaker } from './DetailSpeaker'
import { speakers } from '../../constans_speakers'
import { useState } from "react";

export function Program() {
  const { i18n, t } = useTranslation();
  const [programs, setPrograms] = useState(programECO?.stage_1);

  const [modalShow, setModalShow] = useState(false)
  const [detailSpeaker, setDetailSpeaker] = useState({})

  const handleModal2 = (speaker) => {
    setDetailSpeaker(speaker)
    setModalShow(true)
  }

  const handleModal = (id) => {
    const speaker = speakers.find(speaker => speaker.id === id)
    setDetailSpeaker(speaker)
    setModalShow(true)
  }

  console.log(programs);
  return (
    <>
      <div className="program-wrapper program-dates">
        <Container className="pt-5 pb-5">
          <h1 className="text-light fw-font text-start">
            {t("program.title")}
          </h1>
          <p className="text-start text-light fs-4">
            {t("program.description")}
          </p>
          <Nav className="pt-5" variant="tabs" defaultActiveKey="#stage_1">
            <Nav.Item>
              <Nav.Link
                href="#stage_1"
                onClick={() => setPrograms(programECO.stage_1)}
              >
                <h4 className="text-light">
                  {t("home.zone_1.title")} | {t("home.zone_2.title")}
                </h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#stage_2"
                onClick={() => setPrograms(programECO.stage_2)}
              >
                <h4 className="text-light">{t("home.zone_3.title")}</h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#stage_ecopitch"
                onClick={() => setPrograms(programECO.stage_3)}
              >
                <h4 className="text-light">ECO PITCH</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className=" mt-5">
            <Tabs
              defaultActiveKey="day_1"
              id="fill-tab-example"
              className="mt-5"
              style={{ backgroundColor: "#618264" }}
            >
              <Tab
                eventKey="day_1"
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 1
                    </strong> */}
                    <br />
                    <span className="fs-4 fw-medium">{t("program.day_1")}</span>
                  </>
                }
                style={{ backgroundColor: "#456e46" }}
              >
                {programs?.april_17?.map((program, index) => {
                  return (
                    <Row className="align-items-start justify-content-center program-date-item text-white px-2">
                      <Col lg={2} xs={12} md={3} className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div>
                            <svg
                              width={30}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <p className="fs-6 text-start"><strong>{program.hour}</strong><br />{program.duration}</p>
                        </div>
                        <p className="pt-2 d-flex">
                          <span className="bg-dark text-light fw-bold rounded-pill px-4 py-2">
                            {i18n.language === "en"
                              ? program.type_en
                              : program.type}
                          </span>
                        </p>
                      </Col>
                      <Col lg={9} xs={12} md={9} >
                        <p className="fs-3 fw-bold text-start">
                          {i18n.language === "en"
                            ? program?.title_en
                            : program?.title}
                        </p>
                        <p style={{ textAlign: 'justify' }}> {i18n.language === 'en' ? program?.resume_en : program?.resume}</p>
                        {/* aquí se muestra la información de los Speakers */}
                        <Row className=" d-flex justify-content-start">
                          {program.person && program.person.map((infoSpeaker, index) =>
                            <Col xs={4} lg={4} key="" className="text-center px-3">
                              {infoSpeaker.photo && ( // Verifica si hay una foto
                                <Image
                                  onClick={() => handleModal(infoSpeaker.id)}
                                  src={infoSpeaker.photo}
                                  width={100}
                                  height={100}
                                  className='rounded-circle program-date-avatar me-2'
                                  alt='speaker'
                                />
                              )}
                              <p className="fw-bold"> {infoSpeaker.speakers_name} <br />
                                <spam className="fst-italic fw-normal"> {i18n.language === 'en' ? infoSpeaker.position_en : infoSpeaker.position} </spam></p>
                            </Col>
                          )}
                        </Row>
                      </Col>
                    </Row>
                  );
                })}
              </Tab>
              <Tab
                eventKey="day_2"
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 2
                    </strong> */}
                    <br />
                    <span className="fs-4 fw-medium">{t("program.day_2")}</span>
                  </>
                }
                style={{ backgroundColor: "#456e46" }}
              >
                {programs?.april_18?.map((program, index) => {
                  return (
                    <Row className="align-items-start justify-content-center program-date-item text-white px-2">
                      <Col lg={2} xs={12} md={3} className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div>
                            <svg
                              width={30}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <p className="fs-6 text-start"><strong>{program.hour}</strong><br />{program.duration}</p>
                        </div>
                        <p className="pt-2 d-flex">
                          <span className="bg-dark text-light fw-bold rounded-pill px-4 py-2">
                            {i18n.language === "en"
                              ? program.type_en
                              : program.type}
                          </span>
                        </p>
                      </Col>
                      <Col lg={9} xs={12} md={9} >
                        <p className="fs-3 fw-bold text-start">
                          {i18n.language === "en"
                            ? program?.title_en
                            : program?.title}
                        </p>
                        <p style={{ textAlign: 'justify' }}> {i18n.language === 'en' ? program?.resume_en : program?.resume}</p>
                        {/* aquí se muestra la información de los Speakers */}
                        <Row className=" d-flex justify-content-start">
                          {program.person && program.person.map((infoSpeaker, index) =>
                            <Col xs={4} lg={4} key="" className="text-center px-3">
                              {infoSpeaker.photo && ( // Verifica si hay una foto
                                <Image
                                  onClick={() => handleModal(infoSpeaker.id)}
                                  src={infoSpeaker.photo}
                                  width={100}
                                  height={100}
                                  className='rounded-circle program-date-avatar me-2'
                                  alt='speaker'
                                />
                              )}
                              <p className="fw-bold"> {infoSpeaker.speakers_name} <br />
                                <spam className="fst-italic fw-normal"> {i18n.language === 'en' ? infoSpeaker.position_en : infoSpeaker.position} </spam></p>
                            </Col>
                          )}
                        </Row>
                      </Col>
                    </Row>
                  );
                })}
              </Tab>
              <Tab
                eventKey="day_3"
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 3
                    </strong> */}
                    <br />
                    <span className="fs-4 fw-medium">{t("program.day_3")}</span>
                  </>
                }
                style={{ backgroundColor: "#456e46" }}
              >
                {programs?.april_19?.map((program, index) => {
                  return (
                    <Row className="align-items-start justify-content-center program-date-item text-white px-2">
                      <Col lg={2} xs={12} md={3} className="d-flex flex-column">
                        <div className="d-flex align-items-start">
                          <div>
                            <svg
                              width={30}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className=""
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <p className="fs-6 text-start"><strong>{program.hour}</strong><br />{program.duration}</p>
                        </div>
                        <p className="pt-2 d-flex">
                          <span className="bg-dark text-light fw-bold rounded-pill px-4 py-2">
                            {i18n.language === "en"
                              ? program.type_en
                              : program.type}
                          </span>
                        </p>
                      </Col>
                      <Col lg={9} xs={12} md={9} >
                        <p className="fs-3 fw-bold text-start">
                          {i18n.language === "en"
                            ? program?.title_en
                            : program?.title}
                        </p>
                        <p style={{ textAlign: 'justify' }}> {i18n.language === 'en' ? program?.resume_en : program?.resume}</p>
                        {/* aquí se muestra la información de los Speakers */}
                        <Row className=" d-flex justify-content-start">
                          {program.person && program.person.map((infoSpeaker, index) =>
                            <Col xs={4} lg={4} key="" className="text-center px-3">
                              {infoSpeaker.photo && ( // Verifica si hay una foto
                                <Image
                                  onClick={() => handleModal(infoSpeaker.id)}
                                  src={infoSpeaker.photo}
                                  width={100}
                                  height={100}
                                  className='rounded-circle program-date-avatar me-2'
                                  alt='speaker'
                                />
                              )}
                              <p className="fw-bold"> {infoSpeaker.speakers_name} <br />
                                <spam className="fst-italic fw-normal"> {i18n.language === 'en' ? infoSpeaker.position_en : infoSpeaker.position} </spam></p>
                            </Col>
                          )}
                        </Row>
                      </Col>
                    </Row>
                  );
                })}
              </Tab>
            </Tabs>
          </div>
        </Container>
        <Container>
          <h1 className='mt-5 text-light text-center' id='ponentes'> {t("program.title2")} </h1>
          <div className='mt-5 pb-5 program-wrapper-speakers'>
            {speakers.map((speaker, index) => (
              <button key={index} onClick={() => handleModal2(speaker)}>
                <div className='speaker-item h-100 rounded'>
                  <img src={speaker.avatar} width={300} height={300} alt={speaker.name} />
                  <div className='info_speakers'>
                    <p className="fs-4 fw-bolder">{speaker.name}</p>
                  </div>
                </div>
              </button>
            ))}
            <div />
          </div>
          <DetailSpeaker
            show={modalShow}
            onHide={() => setModalShow(false)}
            speaker={detailSpeaker}
          />
        </Container>
      </div>
    </>
  );
}
