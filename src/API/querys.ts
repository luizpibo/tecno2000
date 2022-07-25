import { request } from "./datocms";
import { gql } from "graphql-request";
const getAllPages = gql`
  {
    allPages {
      title
      slug
      content {
        ... on SectionWithTextAndImageRecord {
          text
          textTitle
          image {
            url
          }
          bgImage
          direction
        }
        ... on SlideRecord {
          slides {
            bgImage
            direction
            text
            textTitle
            image {
              url
            }
          }
        }
      }
    }
  }
`;
const getAllSlugPages = async () => {
  const query = gql`
    {
      allPages {
        slug
      }
    }
  `;
  const data = await request({
    query: getAllPages,
    variables: { limit: 10 },
  });
  console.log("todas as paginas", data);
  console.log("Conteudo da pagina 0", data.allPages[0].content)
  // const slugs = allPages.map((line) => {
  //   return line.slug;
  // });
  return data;
};
export { getAllSlugPages };
