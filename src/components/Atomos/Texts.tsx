import parse from "html-react-parser";

const PrincipalText: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...rest
}) => {
  return (
    <p
      className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-thin"
      {...rest}
    >
      {children}
    </p>
  );
};

const MarkDownText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <div
      className="prose-xl text-lg lg:text-2x1 xl:text-2xl 2xl:text-4xl indent-8 font-normal mx-auto text-slate-900"
      {...rest}
    >
      {parse(children as string)}
    </div>
  );
};

export { PrincipalText, MarkDownText };
