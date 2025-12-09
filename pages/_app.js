import '@/styles/navbar.css'
import '@/styles/footer.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      // GA4 is critical, so we check strictly
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
          page_path: url,
        })
      }
      // Facebook can wait
      if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL && window.fbq) {
        window.fbq('track', 'PageView')
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* --- GOOGLE ANALYTICS (Priority: High) --- 
          We keep this 'afterInteractive' so we don't miss visitor data. 
      */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      {/* --- FACEBOOK PIXEL (Priority: Low) --- 
          Changed to 'lazyOnload'. This loads heavily in the background 
          only after the user can already interact with the page.
      */}
      <Script id="fb-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* --- LINKEDIN TAG (Priority: Low) --- 
          Changed to 'lazyOnload'.
      */}
      <Script id="linkedin-tag" strategy="lazyOnload">
        {`
          _linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>

      <Navbar />
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}