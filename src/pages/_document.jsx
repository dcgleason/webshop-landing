import { Head, Html, Main, NextScript } from 'next/document';

export default function Document(props) {
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
        {/* Insert the new script here */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
          fpr("init", {cid:"1wyzxuko"}); 
          fpr("click");
          `
        }} />
        <script src="https://cdn.firstpromoter.com/fpr.js" async></script>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
