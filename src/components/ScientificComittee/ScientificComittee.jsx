import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function ScientificComittee() {
  const { t } = useTranslation()
  return (
    <Container className='mt-5 mb-5'>
      <div className='text-start'>
        <i>Ecomondo Mexico 2024</i>
        <p className='fs-4 fw-bold'>{t('scientific-committee.title')}</p>
        <p className='fs-6 fw-bold'>{t('scientific-committee.area_1')}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_1'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_2'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_3'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_4'),
            }}
          ></li>
        </ul>
        <p className='fs-6 fw-bold'>{t('scientific-committee.area_2')}</p>
        <ul>
          <li
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_5'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_6'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_7'),
            }}
          ></li>
          <li
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: t('scientific-committee.member_8'),
            }}
          ></li>
        </ul>
        <p className='mt-5 fs-6 fw-bold'>
          {t('scientific-committee.contacts')}
        </p>
        <p className='fs-6 fw-bold'>{t('scientific-committee.area_1')}</p>
        <ul>
          <li>
            Marco Ricci, <a href='mailto:ricci@compost.it'>ricci@compost.it</a>
          </li>
          <li>Gustavo Solorzano</li>
          <li>
            Blas Ramos,{' '}
            <a href='mailto:blasramoscaro@gmail.com'>blasramoscaro@gmail.com</a>
          </li>
          <li>
            Ana Cecilia Martinez,{' '}
            <a href='mailto:ac.martinez@sesman.eu'>ac.martinez@sesman.eu</a>
          </li>
        </ul>
        <p className='fs-6 fw-bold'>{t('scientific-committee.area_2')}</p>
        <ul>
          <li>
            Francesco Fatone,{' '}
            <a
              href='mailto:f.fatone@staff.univpm.it
'
            >
              f.fatone@staff.univpm.it
            </a>
          </li>
          <li>
            Luis Arellano,{' '}
            <a href='mailto:larellano@ciatej.mx'>larellano@ciatej.mx</a>
          </li>
          <li>
            José Tello, <a href='mailto:jat@ceiap.mx'>jat@ceiap.mx</a>
          </li>
          <li>
            Paolo Malfitano,{' '}
            <a
              href='mailto:p.malfitano@ice.it
'
            >
              p.malfitano@ice.it
            </a>
          </li>
        </ul>
      </div>
    </Container>
  )
}
