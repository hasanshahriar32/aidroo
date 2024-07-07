import Link from "next/link";

export const CustomLink = ({
  children,
  className,
  size = "md",
  href = "",
  rest,
}) => {
  const sizeClasses = {
    xl: "text-xl md:text-2xl",
    md: "text-lg md:text-xl",
    sm: "text-sm md:text-xl",
    xs: "text-xs md:text-sm",
  };

  return (
    <Link href={href} className={`${className} ${sizeClasses[size]}`} {...rest}>
      {children}
    </Link>
  );
};
