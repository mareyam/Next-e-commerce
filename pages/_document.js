import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Handjet:wght@300&family=Merriweather:wght@300&family=Oswald:wght@500&family=Overpass:wght@600;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gruppo&family=Handjet:wght@300&family=Merriweather:wght@300&family=Oswald:wght@500&family=Overpass:wght@600;900&family=Source+Code+Pro:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
