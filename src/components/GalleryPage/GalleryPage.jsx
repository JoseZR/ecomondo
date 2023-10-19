import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { GalleryYear } from "./GalleryYear"
import './GalleryPage.css'
import { gallery2023 } from './constans_gallery'


export function GalleryPage (){
    const { t } = useTranslation()
    return (
        <>
        <Container className='galleryPage mt-5'>
          <h1 className='gallery-title'>{t('menu')} SSM 2023</h1>
          <GalleryYear year={gallery2023} />
        </Container>
      </> 
     )
}