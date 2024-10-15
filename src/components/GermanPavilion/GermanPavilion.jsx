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
                    <p className='fs-4'> {t("german-pavilion.date")}</p><br />
                    <p className='text-desc fw-bold' dangerouslySetInnerHTML={{ __html: t("german-pavilion.description1") }} />
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
                    <img src="/centro_informacion.webp" alt="stand information center" className='size-img-information' />
                </div>
            </div>
            <div className='pt-5'>
                <p className='title-germanPavilion3 fw-bold title-germanPavilion2'>{t("german-pavilion.stand-space.title")}</p>
                <div className='packages'>
                    <img src="/eco-stand.webp" alt="stand information center" className='size-img-information' />
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
            <div className='bg-pavilion sub-text p-5'>
                <p className='title-germanPavilion1 fw-bold'>{t("german-pavilion.contact-us")}</p>
                <div className='packages gap-4'>
                    <div className='container-contact'>
                        <p className='fw-bold'>Sandra Mathews</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767" /></svg> Tel. (+49) 511 89-31418</p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M1 3h22v18H1zm2 2v1.83l9 4.55l9-4.55V5zm18 4.07l-9 4.55l-9-4.55V19h18z" /></svg> sandra.mathews@messe.de</p>
                    </div>
                    <div className='container-contact'>
                        <p className='fw-bold'> Stefanie Surmann </p>
                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.214-5.669c-1.267-.73-3.008-2.17-4.342-.767" /></svg>Tel. (+49) 511 89-31103 </p>
                        <p> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M1 3h22v18H1zm2 2v1.83l9 4.55l9-4.55V5zm18 4.07l-9 4.55l-9-4.55V19h18z" /></svg> Stefanie.surmann@messe.de </p>
                    </div>
                </div>
            </div>
        </>
    )
}