import Head from 'next/head'
import {NavBar} from '../navigation'

export default function DefaultLayout({
    children,
    PageTitle = 'This is the default title',
}) {
    return(
        <>
          <Head>
            <title>{PageTitle}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <NavBar/>
          {children}

        </>
    )
}
 