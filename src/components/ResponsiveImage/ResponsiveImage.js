// components/ResponsiveImage.js
import Image from "next/image";

const ResponsiveImage = ({
  src,
  alt,
  layout = "responsive",
  width,
  height,
}) => {
  return (
    <div className="relative w-full  ">
      <Image
        src={src}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        className=" w-full   object-cover"
      />
    </div>
  );
};

export default ResponsiveImage;

// components/ResponsiveImage.js
// import Image from "next/image";

// const ResponsiveImage = ({ src, alt, aspectRatio = "16/9" }) => {
//   const [width, height] = aspectRatio.split("/").map(Number);
//   const paddingBottom = (height / width) * 100;

//   return (
//     <div
//       className="relative w-full"
//       style={{ paddingBottom: `${paddingBottom}%` }}
//     >
//       <Image
//         src={src}
//         alt={alt}
//         layout="fill"
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       />
//     </div>
//   );
// };

// export default ResponsiveImage;
