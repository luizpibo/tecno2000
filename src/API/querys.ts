import { request } from "./datocms";
import { gql } from "graphql-request";

const getAllPagesQuery = gql`
  {
    allPages {
      title
      slug
      content {
        ... on BlockWithTextAndImageRecord {
          textTitle
          text
          bgImage
          direction
          image {
            url
            alt
          }
        }
        ... on SlideRecord {
          slides {
            direction
            bgImage
            textTitle
            text
            image {
              url
              alt
            }
          }
        }
      }
    }
  }
`;

const getAllSlugsQuery = gql`
  {
    allPages {
      slug
    }
  }
`;

const getPageQuery = (pageSlug: string) => {
  return gql`
    {
      page(filter: { slug: { eq: "${pageSlug}" } }) {
        slug
        pageTitle
        content {
          ... on BlockWithTextAndImageRecord {
            textTitle
            text
            direction
            bgImage
            image {
              url
              alt
            }
            _modelApiKey
          }
          ... on SlideRecord {
            slides {
              textTitle
              text
              direction
              bgImage
              image {
                url
                alt
              }
              _modelApiKey
            }
          }
        }
        hero {
          ... on BlockWithTextAndImageRecord {
            textTitle
            text
            direction
            bgImage
            image {
              url
              alt
            }
            _modelApiKey
          }
          ... on SlideRecord {
            slides {
              direction
              bgImage
              textTitle
              text
              image {
                url
                alt
              }
              _modelApiKey
            }
            _modelApiKey
          }
        }
        metaTags {
          description
          image {
            url
          }
          title
          twitterCard
        }
      }
    }
  `;
};

const getAllSlugPages = async () => {
  const { slugs } = await request({
    query: getAllSlugsQuery,
  });
  console.log("todas as paginas", slugs);
  // const slugs = allPages.map((line) => {
  //   return line.slug;
  // });
  return slugs;
};

//Pega o conteúdo da home page
const getPage = async (slug: string) => {
  const { page } = await request({
    query: getPageQuery(slug),
  });
  return page;
};

export { getAllSlugPages, getPage };
