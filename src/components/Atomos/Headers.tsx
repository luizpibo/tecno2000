import react, { ReactNode } from "react";

const HeaderH2: react.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl 2xl:text-5xl font-normal text-center">
      {children}
    </h2>
  );
};

export { HeaderH2 };
