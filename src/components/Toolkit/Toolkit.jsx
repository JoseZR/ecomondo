import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { Container } from "react-bootstrap"
import './Toolkit.css'
import { useTranslation } from 'react-i18next'


export function Toolkit () {
    const { t, i18n } = useTranslation()
    return (
        <>
        <section className='bg-secondary-text mt-5 mb-5 '>
          <Container>
            <i>ECOMONDO MÉXICO</i>
            <p className='fw-bold fs-1'>Toolkit</p>
          </Container>
        </section>
        <Container className='toollkit bg-secondary-text mt-5 mb-5'>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/ExpositorConfirmado_ECOMONDO2024.webp'
              : '/toolkit/Exhibitor_ECOMONDO2024_EN.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>{t('toolkit.item01')}</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/ExpositorConfirmado_ECOMONDO2024.webp'
                : '/toolkit/Exhibitor_ECOMONDO2024_EN.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/AccesoCortesia_ECOMONDO2024-scaled.webp'
              : '/toolkit/CourtesyAccess_ECOMONDO2024_EN.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>{t('toolkit.item02')}</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/AccesoCortesia_ECOMONDO2024-scaled.webp'
                : '/toolkit/CourtesyAccess_ECOMONDO2024_EN.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/SigueECOMONDO2023.webp'
              : '/toolkit/FollowECOMONDO2024_EN.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>{t('toolkit.item03')}</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/SigueECOMONDO2023.webp'
                : '/toolkit/FollowECOMONDO2024_EN.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/Facebook_ECOMONDO2024_ESP-scaled.webp'
              : '/toolkit/Facebook_ECOMONDO2024_EN.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>Facebook</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/Facebook_ECOMONDO2024_ESP-scaled.webp'
                : '/toolkit/Facebook_ECOMONDO2024_EN.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/Twitter_ECOMONDO2024_ESP-scaled.webp'
              : '/toolkit/Twitter_ECOMONDO2024_EN-scaled.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>Twitter</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/Twitter_ECOMONDO2024_ESP-scaled.webp'
                : '/toolkit/Twitter_ECOMONDO2024_EN-scaled.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
            <a
              data-src={i18n.language === 'es'
              ? '/toolkit/LinkedIn_ECOMONDO2024_ESP-scaled.webp'
              : '/toolkit/LinkedIn_ECOMONDO2024_EN.webp'}
              className='img-gallery'
            >
              <p className='text-center title-toolk'>Linkedin</p>
              <img
                src={i18n.language === 'es'
                ? '/toolkit/LinkedIn_ECOMONDO2024_ESP-scaled.webp'
                : '/toolkit/LinkedIn_ECOMONDO2024_EN.webp'}
                className='w-100 p-2'
                loading='lazy'
              />
            </a>
          </LightGallery>
        </Container>
      </>
    )
}