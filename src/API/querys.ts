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

const getAllCategoriesNameQuery = gql`
  {
    allProductCategories {
      name
    }
  }
`;

const getAllCategoriesQuery = gql`
  {
    allProductCategories {
      name
      description
      mainImage {
        url
        alt
      }
      id
    }
  }
`;

const getAllProductsByCategoryQuery = (productCategory: string) => gql`
  {
    allProducts(filter: { category: { eq: "${productCategory}" } }) {
      name
      mainImage {
        alt
        url
      }
      description
    }
  }
`;

const getPageBySlugQuery = (pageSlug: string) => gql`
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
            verticalAlign
            horizontalAlign
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
          ... on ProductCarouselRecord {
            _modelApiKey
            products {
              _modelApiKey
              category {
                name
              }
              description
              name
              mainImage {
                alt
                url
              }
            }
          }
        }
        hero {
          ... on BlockWithTextAndImageRecord {
            textTitle
            text
            direction
            bgImage
            verticalAlign
            horizontalAlign
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

const getAllCategories = async () => {
  const { allProductCategories } = await request({
    query: getAllCategoriesQuery,
  });

  return allProductCategories;
};

const getAllCategoriesName = async () => {
  const { allProductCategories } = await request({
    query: getAllCategoriesQuery,
  });

  return allProductCategories;
};

const getAllProductsByCategory = async (category: string) => {
  const { allProductCategories } = await request({
    query: getAllProductsByCategoryQuery(category),
  });

  return allProductCategories;
};

const getAllSlugPages = async () => {
  const { slugs } = await request({
    query: getAllSlugsQuery,
  });
  // const slugs = allPages.map((line) => {
  //   return line.slug;
  // });
  return slugs;
};

//Pega o conteúdo da home page
const getPageBySlug = async (slug: string) => {
  const { page } = await request({
    query: getPageBySlugQuery(slug),
  });
  return page;
};

export {
  getAllSlugPages,
  getPageBySlug,
  getAllCategories,
  getAllCategoriesName,
  getAllProductsByCategory,
};
