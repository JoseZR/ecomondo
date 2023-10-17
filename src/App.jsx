import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './components/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'
import { AboutUs } from './components/AboutUs/AboutUs'
import { Participate } from './components/Participate/Participate'
import { Toolkit } from './components/Toolkit/Toolkit'
import { VisitorProfile } from './components/VisitorProfile/VisitorProfile'


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
        <Route 
          path='participate'
          element={<Participate />}
        />
        <Route 
          path='toolkit'
          element={<Toolkit />}
        />
        <Route 
          path='visitor-profile'
          element={<VisitorProfile />}
        />
      </Routes>
      <Footer />
    </>
  )
}
export default App
