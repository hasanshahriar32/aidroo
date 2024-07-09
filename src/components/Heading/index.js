const Heading = ({ children, className, size = "md" }) => {
  const sizeClasses = {
    xl: "text-xl md:text-2xl",
    lg: "text-lg md:text-xl",
    sm: "text-sm md:text-lg",
    xs: "text-xs md:text-sm",
  };

  return <h1 className={`${className} ${sizeClasses[size]}`}>{children}</h1>;
};

export default Heading;
