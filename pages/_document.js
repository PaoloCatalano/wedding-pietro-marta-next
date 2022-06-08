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
            content={`${url}/pietroemarta.jpeg`}
            key="ogimage"
          />
          <meta
            property="og:image:secure_url"
            content={`${url}/pietroemarta.jpeg`}
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content={title} />
          <meta property="og:image:width" content="1000" />
          <meta property="og:image:height" content="1000" />
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
