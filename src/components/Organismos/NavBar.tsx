import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAllCategories, getAllSlugPages } from "../../API/querys";
import DropDownLinksList from "../Moleculas/DropDownLinksList";

interface NavBarProps {
  logoUrl?: string;
  homeUrl?: string;
  ProductsCategories?: [{ description: string; link: string }];
  enterprise?: [{ description: string; link: string }];
}

const NavBar: React.FC<NavBarProps> = ({
  ProductsCategories,
  enterprise,
  homeUrl,
  logoUrl,
}) => {
  console.log("Enterprise links", enterprise);
  console.log("ProductsCategories links", ProductsCategories);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between py-3 2xl:py-8 text-slate-700 w-screen z-50 fixed overflow-hidden shadow-xl rounded-b-xl backdrop-blur-sm bg-opacity-90 bg-gray-300">
      <div className="container flex flex-col md:flex-row flex-wrap items-center justify-between px-4 mx-auto ">
        <Link href={"/"}>
          <a>
            <span>
              <Image
                src="/logo.png"
                width={200}
                height={36}
                alt="logo tecno2000"
              />
            </span>
          </a>
        </Link>
        <ul className="mr-12">
          <li>
            <Link href="/categorias">
              <a className="font-semibold uppercase px-4 py-2 hover:border-2  rounded-lg transition-all mx-4">
                Categorias
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories();
  console.log("Categorias", categories);
  const ProductsCategories = categories.map((category) => {
    return {
      description: category.name,
      link: category.slug,
    };
  });

  const allPages = await getAllSlugPages();
  const enterprise = allPages.map((page) => {
    return {
      description: page.slug,
      link: page.slug,
    };
  });

  return {
    props: {
      ProductsCategories: ProductsCategories,
      enterprise: enterprise,
      homeUrl: "localhost:3000",
      logoUrl: "/logo.png",
    },
  };
};

export default NavBar;
