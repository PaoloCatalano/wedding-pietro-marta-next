import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Celebriamo tutti assieme il tanto atteso evento: Il matrimonio tra Marta e Pietro!"
          />
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
