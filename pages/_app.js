import '@/styles/globals.css'
import Index from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Index>
      <Component {...pageProps} />
    </Index>
  )
}
