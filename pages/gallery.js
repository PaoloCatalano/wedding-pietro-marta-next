import Head from "next/head";
import {
  getFirstImages,
  getSecondImages,
  getThirdImages,
} from "../lib/contentful-api";
import Category from "../components/Category";

export default function Gallery({ group_1, group_2, group_3 }) {
  return (
    <div>
      <Head>
        <title>Marta e Pietro ¦ Gallery</title>
      </Head>
      <center style={{ marginBottom: "3rem" }}>
        <div className="date">Gallery</div>
      </center>

      <Category images={group_1} />
      <Category images={group_2} />
      <Category images={group_3} />
    </div>
  );
}

export async function getStaticProps() {
  const group_1 = (await getFirstImages()) ?? [];
  const group_2 = (await getSecondImages()) ?? [];
  const group_3 = (await getThirdImages()) ?? [];
  return {
    props: { group_1, group_2, group_3 },
  };
}
