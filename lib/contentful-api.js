async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

function extractQuery(fetchResponse) {
  return fetchResponse?.data?.photoPietroWeddingCollection?.items;
}

export async function getCategories() {
  const entry = await fetchGraphQL(
    `
    query {
     photoPietroWeddingCollection {
      items{
        category
    }
  }
}`
  );
  return extractQuery(entry);
}

export async function getFirstImages() {
  const entry = await fetchGraphQL(
    `query {
  photoPietroWeddingCollection(where: {category: "Adolescenza e Pubertà"}) {
    ${ITEMS}
  }
}`
  );
  return extractQuery(entry);
}
export async function getSecondImages() {
  const entry = await fetchGraphQL(
    `query {
  photoPietroWeddingCollection(where: {category: "Gioventù Bruciata"}) {
    ${ITEMS}
  }
}`
  );
  return extractQuery(entry);
}
export async function getThirdImages() {
  const entry = await fetchGraphQL(
    `query {
  photoPietroWeddingCollection(where: {category: "Senilità Precoce"}) {
    ${ITEMS}
  }
}`
  );
  return extractQuery(entry);
}

const ITEMS = `
    items{
      category
      pic{
        title
        url
      }
    }`;
