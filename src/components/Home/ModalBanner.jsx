import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import './Home.css'
import { Button } from 'bootstrap'
import { Container } from 'react-bootstrap'

export function ModalBanner() {
  const [modalShow, setModalShow] = useState(true)
  const handleClose = () => setShow(false);

  return (
    <div>
        <Modal
          show={modalShow}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          onHide={() => setModalShow(false)}
          className='container-banner'
        >
          <Modal.Body className='m-0 p-0'>
              <img src="/ecomondo/bannerBioVerdeMex.webp" alt="bioVerdeMex" width='100%' onClick={() => setModalShow(false)} />
          </Modal.Body>
        </Modal>
    </div>
  )
}
