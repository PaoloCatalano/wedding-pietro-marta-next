import Head from "next/head";
import {
  getFirstImages,
  getSecondImages,
  getThirdImages,
  getFourthImages,
} from "../lib/contentful-api";
import Category from "../components/Category";

export default function Gallery({ group_1, group_2, group_3, group_4 }) {
  return (
    <div>
      <Head>
        <title>Marta e Pietro ¦ Gallery</title>
      </Head>
      <center style={{ marginBottom: "3rem" }} className="appear">
        <div className="date">Gallery</div>
      </center>
      <section className="appear" style={{ "--delay": "1s" }}>
        <Category images={group_1} />
        <Category images={group_2} />
        <Category images={group_3} />
        <Category images={group_4} />
      </section>
      <center>
        <a
          className="gallery-link"
          href="http://pierluigic.quickconnect.to/mo/sharing/xsW3OgRox"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutte le foto del Matrimonio!
        </a>
      </center>
    </div>
  );
}

export async function getStaticProps() {
  const group_1 = (await getFirstImages()) ?? [];
  const group_2 = (await getSecondImages()) ?? [];
  const group_3 = (await getThirdImages()) ?? [];
  const group_4 = (await getFourthImages()) ?? [];

  return {
    props: { group_1, group_2, group_3, group_4 },
  };
}
