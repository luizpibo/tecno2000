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

const getAllCategoriesQuery = gql`
  {
    allProductCategories {
      name
      description(markdown: true)
      id
      slug
      mainImage {
        url
        alt
      }
    }
  }
`;

const getCategoryIdBySlugQuery = (categorySlug: string) => gql`
{
  productCategory(filter: {slug: {eq: "${categorySlug}"}}) {
    id
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
            blockTitle
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
          ... on TextBlockRecord {
            _modelApiKey
            text(markdown: true)
            title
          }
        }
        hero {
          ... on BlockWithTextAndImageRecord {
            textTitle
            text(markdown: true)
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

const getProductByNameQuery = (productName: string) => gql`
{
  product(filter: {name: {eq: "${productName}"}}) {
  name
  description(markdown: true)
  category {
    name
    slug
  }
  mainImage {
    alt
    url
  }
}
}
`;

const getAllProductsByCategoryQuery = (productCategory: string) => gql`
  {
    allProducts(filter: { category: { eq: "${productCategory}" } }) {
      name
      description(markdown: true)
      category {
        name
        slug
      }
      mainImage {
        alt
        url
      }
    }
  }
`;

const getAllProductsQuery = gql`
  {
    allProducts {
      name
      description(markdown: true)
      category {
        name
        slug
      }
      mainImage {
        alt
        url
      }
    }
  }
`;

const getCategoryIdBySlug = async (categorySlug: string) => {
  const { productCategory } = await request({
    query: getCategoryIdBySlugQuery(categorySlug),
  });
  return productCategory;
};

const getPageBySlug = async (slug: string) => {
  const { page } = await request({
    query: getPageBySlugQuery(slug),
  });
  return page;
};

const getProductByName = async (productName: string) => {
  const { product } = await request({
    query: getProductByNameQuery(productName),
  });
  return product;
};

const getAllProductsByCategoryId = async (category: string) => {
  const { allProducts } = await request({
    query: getAllProductsByCategoryQuery(category),
  });

  return allProducts;
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

const getAllCategories = async () => {
  const { allProductCategories } = await request({
    query: getAllCategoriesQuery,
  });

  return allProductCategories;
};

const getAllProducts = async () => {
  const { allProducts } = await request({
    query: getAllProductsQuery,
  });

  return allProducts;
};

export {
  getPageBySlug,
  getCategoryIdBySlug,
  getProductByName,
  getAllSlugPages,
  getAllCategories,
  getAllProducts,
  getAllProductsByCategoryId,
};
