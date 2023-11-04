import Image from "next/image";
import React from "react";

const AghitniLogo = ({
  className,
  width,
}: {
  className?: React.ImgHTMLAttributes<HTMLImageElement> & string;
  width: number;
}) => {
  return (
    <Image
      src="/aghitni.png"
      width={width}
      height={width}
      alt="aghitni logo"
      className={className}
    />
  );
};

export default AghitniLogo;
