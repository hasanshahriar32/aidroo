const Heading = ({ children, className, size = "md" }) => {
  const sizeClasses = {
    xl: "text-xl md:text-2xl",

    sm: "text-sm md:text-xl",
    xs: "text-xs md:text-sm",
  };

  return <h1 className={`${className} ${sizeClasses[size]}`}>{children}</h1>;
};

export default Heading;
