import { Col, Container, Row } from 'react-bootstrap'
import { gallery2023 } from '../GalleryPage/constans_gallery'
import { useTranslation } from 'react-i18next'
import { GalleryYear } from '../GalleryPage/GalleryYear'
import { VisitorProfile } from '../VisitorProfile/VisitorProfile'

export function Whyvisit() {
  const { t } = useTranslation()
  return (
    <div className='whyvisit-bg pb-5'>
      <VisitorProfile />
      <Container>
        <Container className='galleryPage mt-5'>
          <h1 className='gallery-title pt-5'>
            {t('menu.media_hub_1')} - Ecomondo 2023
          </h1>
          <GalleryYear year={gallery2023} />
        </Container>

        {/*<div className='visitorprofile-description'>
          <h1>{t('visitorProfile.buyers.title')}</h1>
          <p>{t('visitorProfile.buyers.item_1')}</p>
          <h5>{t('visitorProfile.buyers.item_2')}</h5>
          <p>{t('visitorProfile.buyers.item_3')}</p>
        </div>
        <h2>{t('visitorProfile.industry.title')}</h2>
        <ul className='whyvisit-list mt-3'>
          <li>{t('visitorProfile.industry.item_1')}</li>
          <li>{t('visitorProfile.industry.item_2')}</li>
          <li>{t('visitorProfile.industry.item_3')}</li>
          <li>{t('visitorProfile.industry.item_4')}</li>
          <li>{t('visitorProfile.industry.item_5')}</li>
          <li>{t('visitorProfile.industry.item_6')}</li>
          <li>{t('visitorProfile.industry.item_7')}</li>
          <li>{t('visitorProfile.industry.item_8')}</li>
          <li>{t('visitorProfile.industry.item_9')}</li>
          <li>{t('visitorProfile.industry.item_10')}</li>
          <li>{t('visitorProfile.industry.item_11')}</li>
          <li>{t('visitorProfile.industry.item_12')}</li>
          <li>{t('visitorProfile.industry.item_13')}</li>
        </ul>*/}
      </Container>
    </div>
  )
}
