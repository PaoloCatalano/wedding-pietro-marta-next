import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const title = "Il matrimonio di Pietro e Marta!";
    const description =
      "Celebriamo tutti assieme il tanto atteso evento: Il matrimonio tra Marta e Pietro!";
    const url = "https://martaepietro.netlify.app";

    return (
      <Html lang="it">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:url" content={url} key="ogurl" />
          <meta
            property="og:image"
            content={`${url}/pietroemarta.png`}
            key="ogimage"
          />
          <meta property="og:site_name" content={title} key="ogsitename" />
          <meta property="og:title" content={title} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
