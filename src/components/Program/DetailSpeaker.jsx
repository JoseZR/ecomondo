import { useTranslation } from "react-i18next";
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

export function DetailSpeaker(props) {
  const { i18n, t } = useTranslation();
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Row>
          <Col md={6} className='my-auto'>
            <div className='position-relative'>
              <img src={props?.speaker?.avatar} className='w-100' alt={props?.speaker.name} />
              <div className='info_speakers'>
                <h2>{props?.speaker?.name}</h2>
                <p className='m-0'>{props?.speaker.rol}</p>
                <small>{props?.speaker?.company}</small>
              </div>
            </div>
          </Col>
          <Col md={6} className='my-auto'>
            <div className="p-3">
              <h5 className='fw-bold text-danger'>{t("program.sub_title")} </h5>
              <p>{i18n.language === "en" ? props?.speaker?.conference_en : props?.speaker?.conference_es}</p>
              <p style={{ textAlign: 'justify' }}> {i18n.language === "en" ? props?.speaker?.resume_en : props?.speaker?.resume_es}</p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}
