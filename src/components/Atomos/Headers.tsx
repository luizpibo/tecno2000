import react, { ReactNode } from "react";

const HeaderH2: react.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-4xl sm:text-5x1 md:text-6x1 2xl:text-7xl font-normal text-center">
      {children}
    </h2>
  );
};

export { HeaderH2 };
