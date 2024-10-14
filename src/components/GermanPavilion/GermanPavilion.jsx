import { useTranslation } from 'react-i18next'
import './GermanPavilion.css';

export function GermanPavilion() {
    const { t } = useTranslation()
    return (
        <>
            <div className='bg-pavilion sub-text'>
                <div>
                    <p className='fw-bold pt-5 title-germanPavilion1'>{t("german-pavilion.title")}</p>
                    <hr className='liner' />
                    <p className='fs-2 fw-bolder'>ECOMONDO</p>
                    <p className=''> {t("german-pavilion.date")}</p><br />
                    <p className='text-desc' dangerouslySetInnerHTML={{ __html: t("german-pavilion.description1") }} />
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
            <div className='pt-5'>
                <p className='title-germanPavilion3 fw-bold title-germanPavilion2'>{t("german-pavilion.information-center.title")}</p>
                <div className='packages'>
                    <div className='text-start'>
                        <p> ◇ {t("german-pavilion.information-center.item01")}</p>
                        <p> ◇ {t("german-pavilion.information-center.item02")}</p>
                        <p> ◇ {t("german-pavilion.information-center.item03")}</p>
                        <p> ◇ {t("german-pavilion.information-center.item04")}</p>
                        <p> ◇ {t("german-pavilion.information-center.item05")}</p>
                        <p> ◇ {t("german-pavilion.information-center.item06")}</p>
                    </div>
                    <img src="/centro_informacion.webp" alt="stand information center"  className='size-img-information'/>
                </div>
            </div>
            <div className='pt-5'>
                <p className='title-germanPavilion3 fw-bold title-germanPavilion2'>{t("german-pavilion.stand-space.title")}</p>
                <div className='packages'>
                <img src="/eco-stand.webp" alt="stand information center"  className='size-img-information'/>
                    <div className='text-start'>
                        <p> ◇ {t("german-pavilion.stand-space.item01")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item02")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item03")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item04")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item05")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item06")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item07")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item08")}</p>
                        <p> ◇ {t("german-pavilion.stand-space.item09")}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='title-germanPavilion2' dangerouslySetInnerHTML={{ __html: t("german-pavilion.participation-fee.element1") }} />
                <p className='title-germanPavilion2' dangerouslySetInnerHTML={{ __html: t("german-pavilion.participation-fee.element2") }} />
                <p className='title-deadline' dangerouslySetInnerHTML={{ __html: t("german-pavilion.participation-fee.deadline") }} />
            </div>
        </>
    )
}