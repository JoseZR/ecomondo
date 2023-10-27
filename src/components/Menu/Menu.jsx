import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoEco from '../../assets/logo-ecomondo.webp'
import './Menu.css'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { LanguageButton } from './LanguageButton'


export function Menu() {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
    <Navbar className='text-uppercase text-center menu-padre'  expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={logoEco} alt="ecomondo" width="200" className='ms-3' />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow}/>
        <Navbar.Offcanvas 
          id='offcanvasMenuweb'
          aria-labelledby='offcanvasMenuweb'
          placement="end" 
          show={show}
          >
        <Offcanvas.Header closeButton onClick={handleClose} />
        <Offcanvas.Body className='ms-auto'>
          <Nav className='align-items-center'>
            <NavDropdown title={t('menu.about_us')} renderMenuOnMount disabled>
              <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.about_1')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='https://hfmexico.mx/about-igeco' target='_blank' onClick={handleClose}>{t('menu.about_2')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.exhibitors')} renderMenuOnMount disabled>
              <NavDropdown.Item as={Link} to='/contact' onClick={handleClose}>{t('menu.exhibitors_1')}</NavDropdown.Item>
              <NavDropdown.Item href={i18n.language === 'es'
                    ? '/ecomondo/files/Factsheet-Ecomondo-Mexico-2024_ES-1.pdf'
                    : '/ecomondo/files/Factsheet-Ecomondo-Mexico-2024_EN-1.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_2')}
              </NavDropdown.Item>
              <NavDropdown.Item  href={'/ecomondo/files/ECO-Y-SSM-2024-V5-100523-Floor.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item>
              <NavDropdown.Item href={'/ecomondo/files/ASSpaceAgreement-Ecomondo-Mexico.pdf'} target='_blank'  onClick={handleClose}>{t('menu.exhibitors_4')}
              </NavDropdown.Item>
              <NavDropdown.Item href={'/ecomondo/files/Contrato-Patrocinios-ECO-1n.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_5')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/participate' onClick={handleClose}>{t('menu.exhibitors_6')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/toolkit' onClick={handleClose}>{t('menu.exhibitors_7')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.visitors')} renderMenuOnMount disabled>
              <NavDropdown.Item as={Link} to='/visitor-profile' onClick={handleClose}>{t('menu.visitors_1')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.past_events')} renderMenuOnMount disabled>
              <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2023')}</p>
                <NavDropdown.Item href={'/ecomondo/files/Directorio_ECOMONDO_2023.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2023_1')}</NavDropdown.Item>
                <NavDropdown.Item href={i18n.language === 'es'
                    ? '/ecomondo/files/REPORTE-DE-RESULTADOS-ECO-ESP.pdf'
                    : '/ecomondo/files/AFTERSHOW-REPORT-ECO-ENG.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2023_2')}</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.ecomondo2023_3')}</NavDropdown.Item> */}
                  <NavDropdown.Divider />
              <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2022')}</p>
                <NavDropdown.Item href={'/ecomondo/files/Directorio_ECOMONDO_2022-1.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2022_1')}</NavDropdown.Item>
                <NavDropdown.Item href={i18n.language === 'es'
                    ? '/ecomondo/files/Resultados_ECO_2022_ES.pdf'
                    : '/ecomondo/files/Resultados_ECO_2022_EN.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2022_2')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.media_hub')} renderMenuOnMount disabled>
                <NavDropdown.Item as={Link} to='/gallery' onClick={handleClose}>{t('menu.media_hub_1')}</NavDropdown.Item>
            </NavDropdown>
              <LanguageButton />
          </Nav> 
        </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
    
  )
}
