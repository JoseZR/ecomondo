import { useTranslation } from 'react-i18next'
import './GermanPavilion.css';

export function GermanPavilion() {
    const { t } = useTranslation()
    return (
       <>
            <div className='bg-pavilion sub-text'>
                <div>
                    <p className='fw-bold pt-5 title-germanPavilion1'>{t("german-pavilion.title")}</p>
                    <hr className='liner'/>
                    <p className='fs-2 fw-bolder'>ECOMONDO</p>
                    <p className=''> {t("german-pavilion.date")}</p><br />
                    <p  className='text-desc' dangerouslySetInnerHTML={{ __html: t("german-pavilion.description1") }} />
                </div>
            </div> 
            <div className='bg-prices'>
                <div>
                    <p className='title-germanPavilion2 fw-bold'>{t("german-pavilion.partnership.title")}</p>
                    <p> {t("german-pavilion.partnership.description")} </p>
                    <div className='packages'>
                        <div className='package-item'>{t("german-pavilion.partnership.item01")}</div>
                        <div className='package-item'>{t("german-pavilion.partnership.item02")}</div>
                    </div>
                </div>
            </div>
       </>
    )
}