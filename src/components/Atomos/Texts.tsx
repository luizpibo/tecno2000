import react, { ReactNode } from "react";

const PrincipalText: react.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-thin">
      {children}
    </p>
  );
};

export { PrincipalText };
