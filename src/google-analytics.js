import ReactGA from 'react-ga4'

const TRACKING_ID = 'G-LS39CRX76W'
ReactGA.initialize(TRACKING_ID)

const trackPageView = (location) => {
  ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search })
}

export { trackPageView }
