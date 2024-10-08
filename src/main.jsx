import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18n from './i18n'

import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
)
