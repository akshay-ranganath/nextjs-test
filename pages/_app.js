import Script from 'next/script'
import '../styles/global.css'
// import 'tailwindcss/tailwind.css'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id='cld-media-editor-widget'
        src='https://media-editor.cloudinary.com/all.js'
        strategy='beforeInteractive'
      />
    </>
  )
}
''
