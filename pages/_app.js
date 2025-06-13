import '@/styles/navbar.css'
import '@/styles/footer.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
    <Footer />
    </>
  )
}