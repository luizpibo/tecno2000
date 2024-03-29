const HeaderH2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={`my-4 text-4xl sm:text-5x1 md:text-6x1 2xl:text-6xl font-semibold text-center ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export { HeaderH2 };
