import Navbar from '@/compoents/Navbar'
import '@/styles/globals.css'

export function App({ Component, pageProps }) {
  return<>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default App