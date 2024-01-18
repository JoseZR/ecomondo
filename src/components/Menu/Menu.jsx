import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoEco from '../../assets/logo-ecomondo.webp'
import './Menu.css'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { LanguageButton } from './LanguageButton'

export function Menu() {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <Navbar
        className='text-uppercase text-center menu-padre'
        expand='lg'
        sticky='top'
      >
        <Container className='justify-content-center'>
          <Navbar.Brand as={Link} to='/'>
            <img src={logoEco} alt='ecomondo' width='150' />
          </Navbar.Brand>
          <a
            href='https://www.hfmexico.mx/solarpowermexico/'
            style={{ padding: 0, background: 'none' }}
            target='_blank'
            rel='noreferrer'
          >
            <img
              width={120}
              src={
                i18n.language === 'es'
                  ? '/ecomondo/SSM-boton-ES.webp'
                  : '/ecomondo/SSM-boton-EN.webp'
              }
            />
          </a>
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Offcanvas
            id='offcanvasMenuweb'
            aria-labelledby='offcanvasMenuweb'
            placement='end'
            show={show}
          >
            <Offcanvas.Header closeButton onClick={handleClose} />
            <Offcanvas.Body className='ms-auto'>
              <Nav className='align-items-center'>
                <NavDropdown
                  title={t('menu.about_us')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/about-us'
                    onClick={handleClose}
                  >
                    {t('menu.about_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/contact'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_1')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.exhibitors')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/ecomondo/files/Factsheet-Ecomondo-Mexico-2024-ES-08124.pdf'
                        : '/ecomondo/files/Factsheet-Ecomondo-Mexico-2024-EN-08124.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/ecomondo/files/ECO_SSM_PLANO_2024_160124.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/ecomondo/files/ASSpaceAgreement-Ecomondo-Mexico.pdf'
                        : '/ecomondo/files/Ecomondo-Space-Agreement-2024-ENGV3.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/ecomondo/files/Contrato-Patrocinios-ECO-1n.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_5')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/participate'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_6')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/toolkit'
                    onClick={handleClose}
                  >
                    toolkit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/ecomondo/files/MANUAL-DEL-EXPOSITOR-ECO-030124.pdf'
                        : '/ecomondo/files/MANUAL-DEL-EXPOSITOR-ENG-ECO-030124.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_8')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/hotels'
                    onClick={handleClose}
                  >
                    {t('home.hotels')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.visitors')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/why-visit'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/hotels'
                    onClick={handleClose}
                  >
                    {t('home.hotels')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/ecomondo/files/LETTER-TEMPLATE-2024-ECO.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.visitors_2')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.conferences')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/program'
                    onClick={handleClose}
                  >
                    {t('menu.conferences_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='/scientific-committee'
                    onClick={handleClose}
                  >
                    {t('menu.conferences_2')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.past_events')}
                  renderMenuOnMount
                  disabled
                >
                  <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2023')}</p>
                  <NavDropdown.Item
                    href='/ecomondo/files/Directorio_ECOMONDO_2023.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.ecomondo2023_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/ecomondo/files/REPORTE-DE-RESULTADOS-ECO-ESP.pdf'
                        : '/ecomondo/files/AFTERSHOW-REPORT-ECO-ENG.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.ecomondo2023_2')}
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.ecomondo2023_3')}</NavDropdown.Item> */}
                  <NavDropdown.Divider />
                  <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2022')}</p>
                  <NavDropdown.Item
                    href='/ecomondo/files/Directorio_ECOMONDO_2022-1.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.ecomondo2022_1')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/ecomondo/files/Resultados_ECO_2022_ES.pdf'
                        : '/ecomondo/files/Resultados_ECO_2022_EN.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.ecomondo2022_2')}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t('menu.media_hub')}
                  renderMenuOnMount
                  disabled
                >
                  <NavDropdown.Item
                    as={Link}
                    to='/gallery'
                    onClick={handleClose}
                  >
                    {t('menu.media_hub_1')}
                  </NavDropdown.Item>
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
