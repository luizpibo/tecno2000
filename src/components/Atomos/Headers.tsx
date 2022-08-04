const HeaderH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={`text-4xl sm:text-5x1 md:text-6x1 2xl:text-7xl font-normal text-center ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export { HeaderH2 };
