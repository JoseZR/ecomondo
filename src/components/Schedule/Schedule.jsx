import { useState } from 'react';
import { Col, Container, Nav, Row, Tab, Tabs } from 'react-bootstrap';
import './Program.css';
import { useTranslation } from 'react-i18next'

export function Schedule() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('item1');
  const [subMenuActiveTab, setSubMenuActiveTab] = useState('subItem1'); 

  const handleTabSelect = (key) => {
    setActiveTab(key);
  }

  const handleSubMenuSelect = (key) => {
    setSubMenuActiveTab(key);
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
            onSelect={(key) => handleTabSelect(key)}
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
              </Container>
            </Tab>
            <Tab eventKey="item3">
              <Container style={{ color: '#ffff' }}>
                <div className="container mt-5">
                  <h2><strong>BRANDING</strong></h2>
                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
