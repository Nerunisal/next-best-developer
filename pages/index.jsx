import Head from 'next/head'
import { LandingPageHeader } from './../components/headers'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="find the next best react developer for your buisness. Next Best Dev gives you access to North Americas largest pool of React Developers." />
        <title>Assessment 1</title>
      </Head>
      <LandingPageHeader title="My Title" tagline="My Tagline" />
    </>
  );
}


