import parse from "html-react-parser";

const PrincipalText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => {
  return (
    <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-thin">
      {children}
    </p>
  );
};

const MarkDownText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className="prose prose-lg md:prose-xl mx-auto">{parse(children as string)}</div>;
};

export { PrincipalText, MarkDownText };
