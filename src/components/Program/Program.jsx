import { useTranslation } from 'react-i18next'
import './Program.css'
import { Container, Nav, Tab, Tabs } from 'react-bootstrap'

import { programECO } from '../../constans_program'
import { useState } from 'react'

export function Program() {
  const { i18n, t } = useTranslation()
  const [programs, setPrograms] = useState(programECO?.stage_1)
  console.log(programs)
  return (
    <>
      <div className='program-wrapper program-dates'>
        <Container className='pt-5 pb-5'>
          <h1 className='text-light fw-font text-start'>
            {t('program.title')}
          </h1>
          <p className='text-start text-light fs-4'>
            {t('program.description')}
          </p>
          <Nav className='pt-5' variant='tabs' defaultActiveKey='#stage_1'>
            <Nav.Item>
              <Nav.Link
                href='#stage_1'
                onClick={() => setPrograms(programECO.stage_1)}
              >
                <h4 className='text-light'>
                  {t('home.zone_1.title')} | {t('home.zone_2.title')}
                </h4>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href='#stage_2'
                onClick={() => setPrograms(programECO.stage_2)}
              >
                <h4 className='text-light'>{t('home.zone_3.title')}</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className=' mt-5'>
            <Tabs
              defaultActiveKey='day_1'
              id='fill-tab-example'
              className='mt-5'
              style={{ backgroundColor: '#618264' }}
            >
              <Tab
                eventKey='day_1'
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 1
                    </strong> */}
                    <br />
                    <span className='fs-4 fw-medium'>{t('program.day_1')}</span>
                  </>
                }
                style={{ backgroundColor: '#456e46' }}
              >
                {programs?.april_17?.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '85px' }}>
                        <p>
                          <strong>{program.hour}</strong>
                          <br />
                          <svg
                            width={20}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>{' '}
                          {program.duration}
                        </p>
                      </div>
                      <div className='d-md-flex align-items-center justify-content-between w-100'>
                        <div className='w-100 pe-4'>
                          <p className='fs-4 fw-bold text-start'>
                            {i18n.language === 'en'
                              ? program?.title_en
                              : program?.title}
                          </p>
                          <p className='text-start'>
                            {i18n.language === 'en'
                              ? program?.resume_en
                              : program?.resume}
                          </p>
                          <p className='text-start'>
                            <span className='bg-dark text-light fw-bold rounded-pill p-2'>
                              {i18n.language === 'en'
                                ? program.type_en
                                : program.type}
                            </span>
                          </p>
                        </div>
                        <div className='d-block text-md-end' />
                      </div>
                    </div>
                  )
                })}
              </Tab>
              <Tab
                eventKey='day_2'
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 2
                    </strong> */}
                    <br />
                    <span className='fs-4 fw-medium'>{t('program.day_2')}</span>
                  </>
                }
                style={{ backgroundColor: '#456e46' }}
              >
                {programs?.april_18?.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '85px' }}>
                        <p>
                          <strong>{program.hour}</strong>
                          <br />
                          <svg
                            width={20}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>{' '}
                          {program.duration}
                        </p>
                      </div>
                      <div className='d-md-flex align-items-center justify-content-between w-100'>
                        <div className='w-100 pe-4'>
                          <p className='fs-4 fw-bold text-start'>
                            {i18n.language === 'en'
                              ? program?.title_en
                              : program?.title}
                          </p>
                          <p className='text-start'>
                            {i18n.language === 'en'
                              ? program?.resume_en
                              : program?.resume}
                          </p>
                          <p className='text-start'>
                            <span className='bg-dark text-light fw-bold rounded-pill p-2'>
                              {i18n.language === 'en'
                                ? program.type_en
                                : program.type}
                            </span>
                          </p>
                        </div>
                        <div className='d-block text-md-end' />
                      </div>
                    </div>
                  )
                })}
              </Tab>
              <Tab
                eventKey='day_3'
                title={
                  <>
                    {/* <strong className='fs-6 fw-bold'>
                      {t('program.day')} 3
                    </strong> */}
                    <br />
                    <span className='fs-4 fw-medium'>{t('program.day_3')}</span>
                  </>
                }
                style={{ backgroundColor: '#456e46' }}
              >
                {programs?.april_19?.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '85px' }}>
                        <p>
                          <strong>{program.hour}</strong>
                          <br />
                          <svg
                            width={20}
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>{' '}
                          {program.duration}
                        </p>
                      </div>
                      <div className='d-md-flex align-items-center justify-content-between w-100'>
                        <div className='w-100 pe-4'>
                          <p className='fs-4 fw-bold text-start'>
                            {i18n.language === 'en'
                              ? program?.title_en
                              : program?.title}
                          </p>
                          <p className='text-start'>
                            {i18n.language === 'en'
                              ? program?.resume_en
                              : program?.resume}
                          </p>
                          <p className='text-start'>
                            <span className='bg-dark text-light fw-bold rounded-pill p-2'>
                              {i18n.language === 'en'
                                ? program.type_en
                                : program.type}
                            </span>
                          </p>
                        </div>
                        <div className='d-block text-md-end' />
                      </div>
                    </div>
                  )
                })}
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  )
}
