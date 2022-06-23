import Head from "next/head";
import _ from "lodash";
import {
  getFirstImages,
  getSecondImages,
  getThirdImages,
  getFourthImages,
  getCategories,
} from "../lib/contentful-api";
import Category from "../components/Category";

export default function Gallery({
  group_1,
  group_2,
  group_3,
  group_4,
  categories,
}) {
  const sortCat = _.sortBy(categories, ["category"]);
  const uniqCat = new Set(sortCat.map(({ category }) => category));

  const cats = [...uniqCat, "Reportage"];

  const groups = [group_1, group_2, group_3, group_4];
  return (
    <div>
      <Head>
        <title>Marta e Pietro ¦ Gallery</title>
      </Head>
      <center style={{ marginBottom: "3rem" }} className="appear">
        <div className="date">Gallery</div>
      </center>
      <center
        className="appear"
        style={{ "--delay": "1s", marginBottom: "3rem" }}
      >
        <div className="title">Categorie</div>
        {cats.map((c, i) => (
          <a style={{ marginRight: 15 }} href={`#${c}`} key={c + i}>
            {c}
          </a>
        ))}
      </center>
      <section className="appear" style={{ "--delay": "1.5s" }}>
        {groups?.map((g, i) => (
          <Category images={g} key={g[0].category} />
        ))}
      </section>
      <center id="Reportage">
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

  const categories = (await getCategories()) ?? [];

  return {
    props: { group_1, group_2, group_3, group_4, categories },
  };
}
