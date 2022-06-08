import {
  getFirstImages,
  getSecondImages,
  getThirdImages,
} from "../lib/contentful-api";
import Category from "../components/Category";

export default function Gallery({ group_1, group_2, group_3 }) {
  return (
    <div>
      <h1>Gallery</h1>

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
