import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Menu.css'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'
import { LanguageButton } from './LanguageButton'

export function Menu() {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState()

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div
      className='position-sticky top-0'
      style={{ zIndex: 999, backgroundColor: '#288705' }}
    >
      {/* <a href='https://ecomondo.ahmreg.com/' target='_blank'>
        <div className='banner-become text-white text-center p-2'>
          <div>
            <span className='bg-secondary rounded-circle p-2 d-inline-flex justify-content-center'>
              <svg
                className='w-3 h-3 text-black'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                width={20}
                viewBox='0 0 18 19'
                data-astro-cid-3ef6ksr2=''
              >
                <path
                  d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z'
                  data-astro-cid-3ef6ksr2=''
                />
              </svg>
            </span>{' '}
            ECOMONDO 2024
          </div>
          <div>
            <span className='text-uppercase'>{t('menu.banner')}</span>
          </div>
        </div>
      </a> */}
      <Navbar className='text-uppercase text-center menu-padre' expand='lg'>
        <Container className='justify-content-center'>
          <Navbar.Brand as={Link} to='/'>
            <img src='/ecomondo_logo_2025.webp' alt='ecomondo' width='190' />
          </Navbar.Brand>
          {/* <a
            href='https://www.hfmexico.mx/solarpowermexico/'
            style={{ padding: 0, background: 'none' }}
            target='_blank'
            rel='noreferrer'
        
            <img
              width={120}
              src={
                i18n.language === 'es'
                  ? '/SSM-boton-ES.webp'
                  : '/SSM-boton-EN.webp'
              }
            />
          </a> */}
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
                            ? '/files/ECO_FACTSHEET_2025_V3_ESP_09_05_2024.pdf'
                            : '/files/ECO_FACTSHEET_2025_V3_ENG_09_05_2024.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_2')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/files/patrocionios_es_200324.pdf'
                        : '/files/sponsorships_en_200324.pdf'
                    }
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.sponsorships')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ECOMONDO_floorplan_2025_v7_08_05_2024.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_3')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/ECOMONDO_2025_SpaceAgreement_ed_160524.pdf'
                    target='_blank'
                    onClick={handleClose}
                  >
                    {t('menu.exhibitors_4')}
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href='/files/Contrato-Patrocinios-ECO-1n.pdf'
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
                    to='/media-toolkit'
                    onClick={handleClose}
                  >
                    toolkit
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href={
                      i18n.language === 'es'
                        ? '/files/MANUAL_DEL_EXPOSITOR_ECO_230314.pdf'
                        : '/files/MANUAL_DEL_EXPOSITOR_ENG_ECO_230314.pdf'
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
                    href='/files/LETTER-TEMPLATE-2024-ECO.pdf'
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
                      <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo-title')} 2024</p>
                      <NavDropdown.Item
                        href='/files/DIRECTORIO_ECO_2024_v3_16042024.pdf'
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2023_1')} 2024
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={
                          i18n.language === 'es'
                            ? '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ESP_AF_2024_v3.pdf'
                            : '/files/AFTER_SHOW_REPORT_ECO_SOLAR_ENG_AF_2024_v3.pdf'
                        }
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2023_2')} 2024
                      </NavDropdown.Item>
                  <NavDropdown.Divider />
                      <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo-title')} 2023</p>
                      <NavDropdown.Item
                        href='/files/Directorio_ECOMONDO_2023.pdf'
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2023_1')} 2023
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={
                          i18n.language === 'es'
                            ? '/files/REPORTE-DE-RESULTADOS-ECO-ESP.pdf'
                            : '/files/AFTERSHOW-REPORT-ECO-ENG.pdf'
                        }
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2023_2')} 2023
                      </NavDropdown.Item>
                  <NavDropdown.Divider />
                      <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo-title')} 2022</p>
                      <NavDropdown.Item
                        href='/files/Directorio_ECOMONDO_2022-1.pdf'
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2022_1')} 2022
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={
                          i18n.language === 'es'
                            ? '/files/Resultados_ECO_2022_ES.pdf'
                            : '/files/Resultados_ECO_2022_EN.pdf'
                        }
                        target='_blank'
                        onClick={handleClose}
                      >
                        {t('menu.ecomondo2022_2')} 2022
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
    </div>
  )
}
