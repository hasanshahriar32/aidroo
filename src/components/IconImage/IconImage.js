// components/IconImage.js
import Image from "next/image";

const IconImage = ({ src, alt, size = 50 }) => {
  return (
    <div
      className="relative"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image src={src} alt={alt} layout="fill" className="object-contain" />
    </div>
  );
};

export default IconImage;
