import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IceGods Mainframe | $ICEG Token</title>
        <meta name="google-site-verification" content="${VERIFICATION_CODE}" />
        <meta name="description" content="The official automated hosting gateway for the $ICEG Empire. Mint your mainframe on Base." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
