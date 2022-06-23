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

function graphql(category) {
  return `query {
    photoPietroWeddingCollection(where: {category: "${category}"}) {
      items{
        category
        pic{
          title
          url
        }
      }
    }
  }`;
}

export async function getFirstImages() {
  const entry = await fetchGraphQL(graphql("Adolescenza e Pubertà"));
  return extractQuery(entry);
}

export async function getSecondImages() {
  const entry = await fetchGraphQL(graphql("Gioventù Bruciata"));
  return extractQuery(entry);
}
export async function getThirdImages() {
  const entry = await fetchGraphQL(graphql("Senilità Precoce"));
  return extractQuery(entry);
}

export async function getFourthImages() {
  const entry = await fetchGraphQL(graphql("Il Lieto Evento"));
  return extractQuery(entry);
}
