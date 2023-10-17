import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './components/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'
import { AboutUs } from './components/AboutUs/AboutUs'

function App() {
  const { t } = useTranslation()
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={
            <>
              <Helmet>  
                <title>ECOMONDO</title>
                <meta name='description' content={t('seo.description')} />
              </Helmet>
              <Home />
            </>
          }
        />
        <Route 
          path='about-us'
          element={<AboutUs />}
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
