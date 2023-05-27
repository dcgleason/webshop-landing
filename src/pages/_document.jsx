import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
        <Script id="widget-script" strategy="lazyOnload">
          {`
            window.WIDGET_CONFIG = {
              globalWidgetId: '6aa1a27f-8ab5-4b97-a347-98866b7deef7',
              baseUrl: 'https://app.warmwelcome.com',
            };
          `}
        </Script>
        
        <Script src="https://d7a97ajcmht8v.cloudfront.net/production/app.js" strategy="lazyOnload" />
       
      </body>
    </Html>
  )
}
