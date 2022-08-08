import Link from "next/link";

interface IDropDownLinksList {
  linksList: [{ description: string; link: string }];
}

const DropDownLinksList: React.FC<IDropDownLinksList> = ({ linksList }) => {
  return (
    <div className="">
      <button className="px-4 py-2">Categorias de produtos</button>
      <ul>
        {linksList.map((link) => {
          return (
            <li key={`Link ${link}`}>
              <Link href={link.link}>
                <a>{link.description}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDownLinksList;
