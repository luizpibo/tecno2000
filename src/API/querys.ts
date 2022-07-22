import { request } from "./datocms";
import { gql } from "graphql-request";

const getAllSlugPages = async () => {
  const query = gql`
    {
      allPages {
        slug
      }
    }
  `;
  const { allPages } = await request({
    query: query,
    variables: { limit: 10 },
  });
  const slugs = allPages.map((line) => {
    return line.slug;
  });
  return slugs;
};
export { getAllSlugPages };
