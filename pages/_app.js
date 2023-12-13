import '@/styles/globals.css'
//import { Inria_Sans } from 'next/font/google'

// This stops the fontawesome icons from resizing after page load. It forces the css to load before the icons.
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from adding its CSS since we did it manually above:
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false /* eslint-disable import/first */

//const inria = Inria_Sans({ weight: ['300', '400', '700'], subsets: ['latin'] })

import {AuthProvider} from './contexts/AuthProvider'
import PrivateRoute from '../components/PrivateRoute.js'

export const metadata = {
  title: 'LUNA',
  description: 'LUNA DEV APP',
  charset: 'UTF-8'
}

export default function App({Component, pageProps}) {


  const NonPrivateRoutes = ["/","/register_account"];

  console.log("starting here")
  return (
    <>
      <AuthProvider>
        <PrivateRoute publicroutes = {NonPrivateRoutes}>
          <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    </>

  )
}
