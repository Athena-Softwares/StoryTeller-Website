import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from 'next/font/google'
import { createTheme, NextUIProvider } from "@nextui-org/react"

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      background: "$white",
      primary: '#827249',
      primarySolidHover: '#B59F65',
      primaryActive: '#B59F65',
      primaryLight: '#16181a',
      primaryLightContrast: '#697177',
      primaryLightHover: '#454A4E',
      primaryLightActive: '#697177',
      secondary: '#3B0C0E',
      secondaryLight: '#3B0C0E',
      secondaryLightHover: '#871C20',
      secondaryLightContrast: 'white',
      secondarySolidHover: '#871C20',
      secondaryActive: '#871C20',
      error: '#FCC5D8',
      //shades
      gray:  '#16181a',
      grayScaleActive: '#141c1c',
      grayScaleLight: '#16181a',
      grayScaleLightContrast: '#697177',
      grayScaleLightHover: '#454A4E',
      grayScaleLightActive: '#697177',
    },
  }
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )

}
