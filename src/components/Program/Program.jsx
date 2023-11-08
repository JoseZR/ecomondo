import { useTranslation } from 'react-i18next'
import './Program.css'
import { Container, Tab, Tabs } from 'react-bootstrap'

import { programECO } from '../../constans_program'

export function Program () {
  const { i18n, t } = useTranslation()
  return (
    <>
      <div className='program-wrapper'>
        <Container className='pt-5'>
          <h1 className='text-light fw-font text-start'>
            {t('program.title')}
          </h1>
          <p className='text-start text-light fs-4'>{t('program.description')}</p>
          <div className='program-dates mt-5'>
            <Tabs
              defaultActiveKey='state_1'
              id='fill-tab-example'
              className='mt-5'
              style={{ backgroundColor: '#618264' }}
            >
              <Tab
                eventKey='state_1'
                title={<p className='fs-6 fw-bold'>{t('home.zone_1.title')}</p>}
                style={{ backgroundColor: '#456e46' }}
              >
                {programECO?.state_1?.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '85px' }}>
                        <p>
                          <strong>{program.hour}</strong><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-md-flex align-items-center justify-content-between w-100'>
                        <div className='w-100 pe-4'>
                          <p className='fs-4 fw-bold text-start'>{i18n.language === 'en' ? program?.name_en : program?.name}</p>
                          <p className='text-start'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                          <p className='text-start'>
                            <span className='bg-dark text-light fw-bold rounded-pill p-2'>
                              {i18n.language === 'en' ? program.type_en : program.type}
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
                eventKey='state_2'
                title={<p className='fs-6 fw-bold'>{t('home.zone_2.title')}</p>}
              >
                <p className='text-light fs-1 m-0 pb-5'>{t('program.comming_soon')}</p>
              </Tab>
              <Tab
                eventKey='state_3'
                title={<p className='fs-6 fw-bold'>{t('home.zone_3.title')}</p>}
                style={{ backgroundColor: '#456e46' }}
              >
                {programECO?.state_3?.map((program, index) => {
                  return (
                    <div key={index} className='program-date-item'>
                      <div style={{ width: '85px' }}>
                        <p>
                          <strong>{program.hour}</strong><br />
                          <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                          </svg> {program.duration}
                        </p>
                      </div>
                      <div className='d-md-flex align-items-center justify-content-between w-100'>
                        <div className='w-100 pe-4'>
                          <p className='fs-4 fw-bold text-start'>{i18n.language === 'en' ? program?.name_en : program?.name}</p>
                          <p className='text-start'>{i18n.language === 'en' ? program?.description_en : program?.description}</p>
                          <p className='text-start'>
                            <span className='bg-dark text-light fw-bold rounded-pill p-2'>
                              {i18n.language === 'en' ? program.type_en : program.type}
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
                eventKey='state_4'
                title={<p className='fs-6 fw-bold'>{t('home.zone_4.title')}</p>}
              >
                <p className='text-light fs-1 m-0 pb-5'>{t('program.comming_soon')}</p>
              </Tab>
            </Tabs>
          </div>
        </Container>

      </div>

    </>
  )
}
