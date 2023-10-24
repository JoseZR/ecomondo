import { useState } from 'react'
import { Accordion, Container, Nav, Tab, Tabs } from 'react-bootstrap'
import './Program.css'

export function Schedule () {
  const [activeTab, setActiveTab] = useState('day4')

  const handleTabSelect = (key) => {
    setActiveTab(key)
  }

  return (
    <>
      <div className='program-wrapper' id='programa'>
        <Container className='pt-5 py-5'>
          <center>
            <h1 className='text-light fw-font title-conferencias'>
              {/* <strong>CRONOGRAMA DE ACTIVIDADES</strong> */}
            </h1>
          </center>
          <div className='program-dates mt-5'>
            <Nav className='menu-cronograma' variant='tabs' activeKey={activeTab}>
              <Nav.Item>
                <Nav.Link eventKey='item01' onClick={() => handleTabSelect('item01')}>
                  <h4 className='text-light'>
                    <strong>ECO EXPERIENCES</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='item02' onClick={() => handleTabSelect('item02')}>
                  <h4 className='text-light'>
                    <strong>SPONSOR</strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='item03' onClick={() => handleTabSelect('item03')}>
                  <h4 className='text-light'>
                    <strong>BRANDING </strong>
                  </h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tabs
            defaultActiveKey='item01'
            activeKey={activeTab}
            id='fill-tab-example'
            className='mb-3'
            onSelect={(key) => handleTabSelect(key)}
          >
            <Tab eventKey='item01'>
              <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sit.</h3>
                </div>
              </Container>
            </Tab>
            <Tab eventKey='item02'>
            <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  <h3>Lorem ipsum dolor sit amet..</h3>
                </div>
              </Container>
            </Tab>
            <Tab eventKey='item03'>
              <Container style={{ color: '#ffff' }}>
                <div className='container mt-3'>
                  
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>





                </div>
              </Container>
            </Tab>
          </Tabs>
        </Container>
      </div>
    </>
  )
}
