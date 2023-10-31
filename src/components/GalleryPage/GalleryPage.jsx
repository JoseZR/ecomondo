import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { GalleryYear } from "./GalleryYear"
import './GalleryPage.css'
import { gallery2023, gallery2022 } from './constans_gallery'


export function GalleryPage (){
    const { t } = useTranslation()
    return (
        <>
        <Container className='galleryPage mt-5'>
          <h1 className='gallery-title pt-5'>{t('menu.media_hub_1')} - Ecomondo 2023</h1>
          <GalleryYear year={gallery2023} />
          <h1 className='gallery-title pt-5'>{t('menu.media_hub_1')} - Ecomondo 2022</h1>
          <GalleryYear year={gallery2022} />
        </Container>
      </> 
     )
}