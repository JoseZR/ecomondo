import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoEco from '../../assets/logo-ecomondo.webp'
import './Menu.css'
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap'


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
              <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.exhibitors_1')}</NavDropdown.Item>
              <NavDropdown.Item href={i18n.language === 'es'
                    ? '/files/Factsheet-Ecomondo-Mexico-2024_ES-1.pdf'
                    : '/files/Factsheet-Ecomondo-Mexico-2024_EN-1.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_2')}
              </NavDropdown.Item>
              <NavDropdown.Item  href={'/files/ECO-Y-SSM-2024-V5-100523-Floor.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_3')}</NavDropdown.Item>
              <NavDropdown.Item href={'/files/ASSpaceAgreement-Ecomondo-Mexico.pdf'} target='_blank'  onClick={handleClose}>{t('menu.exhibitors_4')}
              </NavDropdown.Item>
              <NavDropdown.Item href={'/files/Contrato-Patrocinios-ECO-1n.pdf'} target='_blank' onClick={handleClose}>{t('menu.exhibitors_5')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/participate' onClick={handleClose}>{t('menu.exhibitors_6')}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/toolkit' onClick={handleClose}>{t('menu.exhibitors_7')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.visitors')} renderMenuOnMount disabled>
              <NavDropdown.Item as={Link} to='/visitor-profile' onClick={handleClose}>{t('menu.visitors_1')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.past_events')} renderMenuOnMount disabled>
              <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2023')}</p>
                <NavDropdown.Item href={'/files/Directorio_ECOMONDO_2023.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2023_1')}</NavDropdown.Item>
                <NavDropdown.Item href={i18n.language === 'es'
                    ? '/files/REPORTE-DE-RESULTADOS-ECO-ESP.pdf'
                    : '/files/AFTERSHOW-REPORT-ECO-ENG.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2023_2')}</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to='/about-us' onClick={handleClose}>{t('menu.ecomondo2023_3')}</NavDropdown.Item> */}
                  <NavDropdown.Divider />
              <p className='mt-2 p-2 mb-0'>{t('menu.ecomondo2022')}</p>
                <NavDropdown.Item href={'/files/Directorio_ECOMONDO_2022-1.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2022_1')}</NavDropdown.Item>
                <NavDropdown.Item href={i18n.language === 'es'
                    ? '/files/Resultados_ECO_2022_ES.pdf'
                    : '/files/Resultados_ECO_2022_EN.pdf'} target='_blank' onClick={handleClose}>{t('menu.ecomondo2022_2')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.media_hub')} renderMenuOnMount disabled>
                <NavDropdown.Item as={Link} to='/gallery' onClick={handleClose}>{t('menu.media_hub_1')}</NavDropdown.Item>
            </NavDropdown>
              <NavDropdown
                    className='language-dropdown'
                    title={
                      <>
                        <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                          <path clipRule='evenodd' d='m7.10319 18.721c1.44393.8125 3.11001 1.2768 4.88431 1.279-.2692 0-.4875.2183-.4875.4875v.5125c0 .5523-.4477 1-1 1h-3c-.27614 0-.5.2239-.5.5s.22386.5.50001.5h8.99999c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5h-3c-.5523 0-1-.4477-1-1v-.5125c0-.2692-.2183-.4875-.4875-.4875 5.5171-.0068 9.9875-4.4813 9.9875-10.00001 0-3.6579-1.964-6.85708-4.895-8.60058-.231-.13742-.5264-.05181-.6608.18098-.1417.24537-.0501.55823.1926.70441 2.6145 1.57468 4.3632 4.44072 4.3632 7.71519 0 4.97061-4.0294 9.00001-9 9.00001-1.5829 0-3.07031-.4086-4.36257-1.1262-.248-.1377-.56522-.0607-.70705.1849-.13422.2325-.06112.5307.17281.6623zm4.89681-.721c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm0-1c2.4116 0 4.5384-1.2195 5.7973-3.0756l-1.7255-.9962c-1.248 1.9812-2.9042 3.4124-4.5242 4.0574.1496.0096.3004.0144.4524.0144zm6.002-3.3957c.0436-.0724.0859-.1458.1269-.2199zm-1.4302-1.5421 1.7263.9967c.4496-.9242.7019-1.9621.7019-3.0589 0-1.43763-.4334-2.77403-1.1766-3.8857.2517 1.72562-.1596 3.87609-1.2516 5.9479zm-.6659-7.8275c1.4232 1.29546 1.3536 4.36603-.2005 7.3273l-3.0224-1.745zm-.866-.5-3.2229 5.5823-3.02242-1.74497c1.78752-2.8265 4.41182-4.4221 6.24532-3.83733zm-3.7229 6.4483-3.02242-1.74495c-1.55404 2.96125-1.62368 6.03175-.20051 7.32725zm1.1353-7.16862c-1.6199.64499-3.27617 2.07624-4.52413 4.05743l-1.72548-.99621c1.25887-1.85604 3.38567-3.0756 5.79731-3.0756.152 0 .3028.00484.4523.01438zm-6.5821 3.60277c.04159-.07519.08451-.14953.12875-.22299zm1.55798 1.32068-1.72627-.99665c-.44966.92412-.70191 1.96201-.70191 3.05882 0 1.4376.43339 2.774 1.17664 3.8857-.25177-1.7256.15954-3.8761 1.25154-5.94787zm7.77722 4.49017-3.0224-1.745-3.22291 5.5823c1.83351.5847 4.45781-1.0108 6.24531-3.8373z' fillRule='evenodd' />
                        </svg> {i18n.language === 'es' ? 'ES' : 'EN'}
                      </>
                        }
                    id='basic-nav-dropdown'
                  >
                    <NavDropdown.Item as='button' onClick={() => i18n.changeLanguage('es')}>
                      ES
                    </NavDropdown.Item>
                    <NavDropdown.Item as='button' onClick={() => i18n.changeLanguage('en')}>
                      EN
                    </NavDropdown.Item>
              </NavDropdown>
          </Nav> 
        </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
    
  )
}
