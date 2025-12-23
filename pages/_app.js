import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IceGods Mainframe | $ICEG Token</title>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="PASTE_YOUR_CODE_STRING_HERE" />
        <meta name="description" content="Official automated hosting gateway for the $ICEG Empire. Mint your mainframe on Base." />
      </Head>
      
      <Component {...pageProps} />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </>
  )
}

export default MyApp
