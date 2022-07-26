import { request } from "./datocms";
import { gql } from "graphql-request";
const getAllPagesQuery = gql`
  {
    allPages {
      title
      slug
      content {
        ... on SectionWithTextAndImageRecord {
          textTitle
          text
          position
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

const getHomePageQuery = gql`
  {
    page(filter: { slug: { eq: "/" } }) {
      slug
      pageTitle
      content {
        ... on SectionWithTextAndImageRecord {
          textTitle
          text
          position
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
      heroContent {
        ... on SectionWithTextAndImageRecord {
          textTitle
          text
          position
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

const getAllSlugPages = async () => {
  const data = await request({
    query: getAllSlugsQuery,
    variables: { limit: 10 },
  });
  console.log("todas as paginas", data);
  // const slugs = allPages.map((line) => {
  //   return line.slug;
  // });
  return data;
};

//Pega o conteúdo da home page
const getHomePage = async () => {
  const { page } = await request({
    query: getHomePageQuery,
  });
  return page;
};
export { getAllSlugPages, getHomePage };
