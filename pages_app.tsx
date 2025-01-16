import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Discord Justice - Fairness & Transparency in Discord" />
        <meta property="og:description" content="Join Discord Justice to get support for unfair bans, server reports, and community assistance. We help maintain fairness in Discord communities." />
        <meta property="og:image" content="https://github.com/hyuuuka/discord-justice-branding/blob/main/Main-Logo.png?raw=true" />
        <meta property="og:url" content="https://discordjustice.vercel.app/" /> 
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
