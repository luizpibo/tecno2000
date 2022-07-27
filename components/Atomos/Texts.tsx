import react, { ReactNode } from "react";

const PrincipalText: react.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="text-sm lg:text-base xl:text-xl 2xl:text-3xl font-thin">
      {children}
    </p>
  );
};

export { PrincipalText };
