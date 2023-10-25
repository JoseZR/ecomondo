import { useState } from 'react';
import { Accordion, Col, Container, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import './Program.css';
import { useTranslation } from 'react-i18next'

export function Schedule() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('item1');
  const [subMenuActiveTab, setSubMenuActiveTab] = useState('subItem1'); 
  const [subMenuActiveTabAct, setSubMenuActiveTabAct] = useState('subItem1'); 

  const handleTabSelect = (key) => {
    setActiveTab(key);
  }

  const handleSubMenuSelect = (key) => {
    setSubMenuActiveTab(key);
  }

  const handleSubMenuSelectAct = (key) => {
    setSubMenuActiveTabAct(key);
  }

  return (
    <>
      <div className="program-wrapper" id="programa">
        <Container className="py-5">
          <center>
            <h1 className="text-light fw-font title-conferencias"></h1>
          </center>

          <div className="program-dates mt-5">
            <Nav className="menu-cronograma w-100" variant="tabs" activeKey={activeTab}>
              <Nav.Item className="btn-option">
                <Nav.Link eventKey="item1" onClick={() => handleTabSelect('item1')}>
                  <h3 className=""><strong>ECO EXPERIENCES</strong></h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="btn-option">
                <Nav.Link eventKey="item2" onClick={() => handleTabSelect('item2')}>
                  <h3 className=""><strong>SPONSOR</strong></h3>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="btn-option">
                <Nav.Link eventKey="item3" onClick={() => handleTabSelect('item3')}>
                  <h3 className=""><strong>BRANDING</strong></h3>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tabs
            defaultActiveKey="item1"
            activeKey={activeTab}
            id="fill-tab-example"
            className="mb-3"
            onSelect={(key) => handleSubMenuSelectAct(key)}
          >
            <Tab eventKey="item1">
              <Container style={{ color: '#ffff' }}>
                <Row>
                  <Col lg={4} >
                    <div className='menu-hijo'>
                      <Nav className='menu-item-hijo w-100' variant="tabs" activeKey={subMenuActiveTab} onSelect={(key) => handleSubMenuSelect(key)}>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem1">
                            <h4 className=""><strong>DISCOVERY NIGHT</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem2">
                            <h4 className=""><strong>VIP ZONE</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem3">
                            <h4 className=""><strong> CLAUSURA</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Tabs
                        defaultActiveKey="subItem1"
                        activeKey={subMenuActiveTab}
                        id="sub-menu-tab"
                        className="mt-3"
                        onSelect={(key) => handleSubMenuSelect(key)}
                      >
                        <Tab eventKey="subItem1">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                            <br /><h2><strong>$5,000 USD + IVA</strong></h2>
                            <strong>{t('participate.eco_experiences.topic01.item1')}</strong><br /><br />
                            <p className='text-topic ps-3'>
                                {t('participate.eco_experiences.topic01.item02')}<br />
                                  {t('participate.eco_experiences.topic01.item03')}<br />
                                    {t('participate.eco_experiences.topic01.item04')}<br />
                                      {t('participate.eco_experiences.topic01.item05')}<br />
                                        {t('participate.eco_experiences.topic01.item06')}<br />
                                          {t('participate.eco_experiences.topic01.item07')}<br />
                                            {t('participate.eco_experiences.topic01.item08')}<br />
                                              {t('participate.eco_experiences.topic01.item09')}<br />
                                                {t('participate.eco_experiences.topic01.item10')}<br />
                            </p>
                          </Container>
                        </Tab>
                        <Tab eventKey="subItem2">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$7,500 USD + IVA</strong></h2>
                              <strong>{t('participate.eco_experiences.topic02.item1')}</strong><br /><br />
                              <p className='text-topic ps-3'>
                                  {t('participate.eco_experiences.topic02.item02')}<br />
                                    {t('participate.eco_experiences.topic02.item03')}<br />
                                      {t('participate.eco_experiences.topic02.item04')}<br />
                                        {t('participate.eco_experiences.topic02.item05')}<br />
                                          {t('participate.eco_experiences.topic02.item06')}<br />
                              </p>
                            </Container>
                        </Tab>
                        <Tab eventKey="subItem3">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$2,500 USD + IVA</strong></h2>
                              <strong>{t('participate.eco_experiences.topic03.item1')}</strong><br /><br />
                              <p className='text-topic ps-3'>
                                  {t('participate.eco_experiences.topic03.item02')}<br />
                                    {t('participate.eco_experiences.topic03.item03')}<br />
                                      {t('participate.eco_experiences.topic03.item04')}<br />
                              </p>
                            </Container>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='date-limit mx-5'>
                    <strong><p className='mx-3 mt-2 fs-5 text'>{t('participate.branding_sitio.close')}</p></strong>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="item2">
            <Container style={{ color: '#ffff' }}>
                <Row>
                  <Col lg={4} >
                    <div className='menu-hijo'>
                      <Nav className='menu-item-hijo w-100' variant="tabs" activeKey={subMenuActiveTab} onSelect={(key) => handleSubMenuSelect(key)}>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem1">
                            <h4 className=""><strong>PLATINUM</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem2">
                            <h4 className=""><strong>GOLD</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem3">
                            <h4 className=""><strong>SILVER</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Tabs
                        defaultActiveKey="subItem1"
                        activeKey={subMenuActiveTab}
                        id="sub-menu-tab"
                        className="mt-3"
                        onSelect={(key) => handleSubMenuSelect(key)}
                      >
                        <Tab eventKey="subItem1">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                            <br /><h2><strong>$15,000 USD + IVA</strong></h2>
                                <strong>{t('participate.sponsor.topic01.item1')}</strong><br /><br />
                                <strong className='fs-4'>{t('participate.sponsor.topic01.title02')}</strong><br />
                            <p className='text-topic ps-4'>
                                    {t('participate.sponsor.topic01.item02')}<br />
                                      {t('participate.sponsor.topic01.item03')}<br />
                                        {t('participate.sponsor.topic01.item04')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic01.title03')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic01.item05')}<br />
                                    {t('participate.sponsor.topic01.item06')}<br />
                                      {t('participate.sponsor.topic01.item07')}<br />
                                        {t('participate.sponsor.topic01.item08')}<br />
                                          {t('participate.sponsor.topic01.item09')}<br />
                                            {t('participate.sponsor.topic01.item10')}<br />
                                              {t('participate.sponsor.topic01.item11')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic01.title04')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic01.item12')}<br />
                                    {t('participate.sponsor.topic01.item13')}<br />
                                      {t('participate.sponsor.topic01.item14')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic01.title05')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic01.item15')}<br />
                                    {t('participate.sponsor.topic01.item16')}<br />
                                      {t('participate.sponsor.topic01.item17')}<br />
                              </p>
                          </Container>
                        </Tab>
                        <Tab eventKey="subItem2">
                            <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$10,000 USD + IVA</strong></h2>
                                <strong>{t('participate.sponsor.topic02.item1')}</strong><br /><br />
                                <strong className='fs-4'>{t('participate.sponsor.topic02.title02')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic02.item02')}<br />
                                    {t('participate.sponsor.topic02.item03')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic02.title03')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic02.item05')}<br />
                                    {t('participate.sponsor.topic02.item06')}<br />
                                      {t('participate.sponsor.topic02.item07')}<br />
                                        {t('participate.sponsor.topic02.item08')}<br />
                                          {t('participate.sponsor.topic02.item09')}<br />
                                            {t('participate.sponsor.topic02.item010')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic02.title04')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic02.item012')}<br />
                                    {t('participate.sponsor.topic02.item013')}<br />
                                      {t('participate.sponsor.topic02.item014')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic02.title05')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic02.item015')}<br />
                              </p>
                            </Container>
                        </Tab>
                        <Tab eventKey="subItem3">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$5,000 USD + IVA</strong></h2>
                              <strong>{t('participate.sponsor.topic03.item1')}</strong><br /><br />
                                <strong className='fs-4'>{t('participate.sponsor.topic03.title02')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic03.item02')}<br />
                                    {t('participate.sponsor.topic03.item03')}<br />
                                      {t('participate.sponsor.topic03.item04')}<br />
                              </p>
                                <strong className='fs-4'>{t('participate.sponsor.topic03.title03')}</strong><br />
                              <p className='text-topic ps-4'>
                                  {t('participate.sponsor.topic03.item05')}<br />
                                    {t('participate.sponsor.topic03.item06')}<br />
                                      {t('participate.sponsor.topic03.item07')}<br />
                              </p>
                          </Container>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='date-limit mx-5'>
                    <strong><p className='mx-3 mt-2 fs-5 text'>{t('participate.branding_sitio.close')}</p></strong>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="item3">
              <Container style={{ color: '#ffff' }}>
              <Row>
                  <Col lg={4} >
                    <div className='menu-hijo'>
                      <Nav className='menu-item-hijo w-100' variant="tabs" activeKey={subMenuActiveTabAct} onSelect={(key) => handleSubMenuSelectAct(key)}>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem1">
                            <h4 className=""><strong>CÓRDON DE GAFETE</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem2">
                            <h4 className=""><strong>LOGOTIPO EN GAFETE</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem3">
                            <h4 className=""><strong>GIVE AWAY</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="btn-option">
                          <Nav.Link eventKey="subItem4">
                            <h4 className=""><strong>REGISTRO</strong></h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      <Tabs
                        defaultActiveKey="subItem1"
                        activeKey={subMenuActiveTabAct}
                        id="sub-menu-tab"
                        className="mt-3"
                        onSelect={(key) => handleSubMenuSelectAct(key)}
                      >
                        <Tab eventKey="subItem1">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                            <br /><h2><strong>$6,000 USD + IVA</strong></h2><br />
                            <p className='text-topic ps-4'>
                                    {t('participate.branding.topic01.item01')}<br />
                                      {t('participate.branding.topic01.item02')}<br />
                                        <strong>{t('participate.branding.topic01.item03')}</strong><br />
                              </p>
                          </Container>
                        </Tab>
                        <Tab eventKey="subItem2">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$3,000 USD + IVA</strong></h2><br />
                              <p className='text-topic ps-4'>
                                    {t('participate.branding.topic02.item01')}<br />
                                      {t('participate.branding.topic02.item02')}<br />
                              </p>
                            </Container>
                        </Tab>
                        <Tab eventKey="subItem3">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$2,500 USD + IVA</strong></h2><br />
                              <p className='text-topic ps-4'>
                                    {t('participate.branding.topic03.item01')}<br />
                                      {t('participate.branding.topic03.item02')}<br />
                                        <strong>{t('participate.branding.topic03.item03')}</strong><br />
                              </p>
                            </Container>
                        </Tab>
                        <Tab eventKey="subItem4">
                          <Container className='text-start px-5 py-3' style={{ color: '#ffff' }}>
                              <br /><h2><strong>$6,000 USD + IVA</strong></h2><br />
                              <p className='text-topic ps-4'>
                                    {t('participate.branding.topic04.item01')}<br />
                                      {t('participate.branding.topic04.item02')}<br />
                                        {t('participate.branding.topic04.item03')}<br />
                              </p>
                            </Container>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
              </Row>
              <Row className='mt-5'>
                  <Col className='date-limit mx-5'>
                    <strong><p className='mx-3 mt-2 fs-5 text'>{t('participate.branding_sitio.close')}</p></strong>
                  </Col>
                </Row>
                <div className='branding-padre mt-3'>
                  <h2 className='mt-5 py-3'><strong>{t('participate.branding_sitio.title')}</strong></h2>
                  <div className=''>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>{t('participate.branding_sitio.ladder.title')}</strong></Accordion.Header>
                        <Accordion.Body className='container-branding'>
                          <h2><strong>$4,000 USD+ IVA</strong></h2>
                          <p>{t('participate.branding_sitio.ladder.item01')}</p>
                          <p><strong>{t('participate.branding_sitio.ladder.title01')}</strong></p>
                          <p>{t('participate.branding_sitio.description01')}</p>
                          <p>{t('participate.branding_sitio.description02')}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header><strong>{t('participate.branding_sitio.pillars.title')}</strong></Accordion.Header>
                        <Accordion.Body className='container-branding'>
                          <h2><strong>$2,500 USD + IVA</strong></h2>
                          <p>{t('participate.branding_sitio.pillars.item01')}</p>
                          <p><strong>{t('participate.branding_sitio.pillars.title01')}</strong></p>
                          <p>{t('participate.branding_sitio.description01')}</p>
                          <p>{t('participate.branding_sitio.description02')}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header><strong>{t('participate.branding_sitio.stained_glass.title')}</strong></Accordion.Header>
                        <Accordion.Body className='container-branding'>
                          <h2><strong>$2,000 USD + IVA</strong></h2>
                          <p>{t('participate.branding_sitio.stained_glass.item01')}</p>
                          <p><strong>{t('participate.branding_sitio.stained_glass.title01')}</strong></p>
                          <p>{t('participate.branding_sitio.description01')}</p>
                          <p>{t('participate.branding_sitio.description02')}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header><strong>{t('participate.branding_sitio.lobby_class.title')}</strong></Accordion.Header>
                        <Accordion.Body className='container-branding'>
                          <h2><strong>$2,000 USD + IVA</strong></h2>
                          <p>{t('participate.branding_sitio.lobby_class.item01')}</p>
                          <p><strong>{t('participate.branding_sitio.lobby_class.title01')}</strong></p>
                          <p>{t('participate.branding_sitio.description01')}</p>
                          <p>{t('participate.branding_sitio.description02')}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header><strong>{t('participate.branding_sitio.ramp.title')}</strong></Accordion.Header>
                        <Accordion.Body className='container-branding'>
                          <h2><strong>$2,000 USD + IVA</strong></h2>
                          <p>{t('participate.branding_sitio.ramp.item01')}</p>
                          <p><strong>{t('participate.branding_sitio.ramp.title01')}</strong></p>
                          <p>{t('participate.branding_sitio.description01')}</p>
                          <p>{t('participate.branding_sitio.description02')}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
