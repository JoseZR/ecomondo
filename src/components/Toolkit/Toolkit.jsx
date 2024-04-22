import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { Container } from 'react-bootstrap'
import './Toolkit.css'
import { useTranslation } from 'react-i18next'

export function Toolkit() {
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
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a
            data-src={
              i18n.language === 'es'
                ? '/toolkit/banner_exhibitor_banner_horizontal_esp.webp'
                : '/toolkit/banner_exhibitor_banner_horizontal_eng.webp'
            }
            className='img-gallery'
          >
            <p className='text-center title-toolk'>{t('toolkit.item01')}</p>
            <img
              src={
                i18n.language === 'es'
                  ? '/toolkit/banner_exhibitor_banner_horizontal_esp.webp'
                  : '/toolkit/banner_exhibitor_banner_horizontal_eng.webp'
              }
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src={
              i18n.language === 'es'
                ? '/toolkit/exhibitor_banner_doc_esp.webp'
                : '/toolkit/exhibitor_banner_doc_eng.webp'
            }
            className='img-gallery'
          >
            <p className='text-center title-toolk'>{t('toolkit.item02')}</p>
            <img
              src={
                i18n.language === 'es'
                  ? '/toolkit/exhibitor_banner_doc_esp.webp'
                  : '/toolkit/exhibitor_banner_doc_eng.webp'
              }
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src={
              i18n.language === 'es'
                ? '/toolkit/facebook_post_horizontal_esp.webp'
                : '/toolkit/facebook_post_horizontal_eng.webp'
            }
            className='img-gallery'
          >
            <p className='text-center title-toolk'>Facebook</p>
            <img
              src={
                i18n.language === 'es'
                  ? '/toolkit/facebook_post_horizontal_esp.webp'
                  : '/toolkit/facebook_post_horizontal_eng.webp'
              }
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src={
              i18n.language === 'es'
                ? '/toolkit/twitter_exhibitor_esp.webp'
                : '/toolkit/twitter_exhibitor_eng.webp'
            }
            className='img-gallery'
          >
            <p className='text-center title-toolk'>Twitter</p>
            <img
              src={
                i18n.language === 'es'
                  ? '/toolkit/twitter_exhibitor_esp.webp'
                  : '/toolkit/twitter_exhibitor_eng.webp'
              }
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src={
              i18n.language === 'es'
                ? '/toolkit/linkedin_exhibitor_esp.webp'
                : '/toolkit/linkedin_exhibitor_eng.webp'
            }
            className='img-gallery'
          >
            <p className='text-center title-toolk'>Linkedin</p>
            <img
              src={
                i18n.language === 'es'
                  ? '/toolkit/linkedin_exhibitor_esp.webp'
                  : '/toolkit/linkedin_exhibitor_eng.webp'
              }
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
        </LightGallery>
      </Container>
    </>
  )
}
