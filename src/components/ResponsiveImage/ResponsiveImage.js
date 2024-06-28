import Image from "next/image";

const ResponsiveImage = ({
  src,
  alt,
  layout = "responsive",
  width,
  height,
}) => {
  return (
    <div className="relative w-full ">
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        className=" w-full  shrink-0  object-cover"
      />
    </div>
  );
};

export default ResponsiveImage;
