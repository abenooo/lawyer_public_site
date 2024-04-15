import React from "react";
import Image from "next/image";
const ImageTextLogo = ({ imageUrl, text, logoUrl }) => {
  return (
    <div className="relative w-full h-128">
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt="Background image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl font-semibold z-10">{text}</p>
        </div>
        <div className="absolute bottom-5 left-1/2 transform translate-x-1/2">
          <Image src={logoUrl} height={50} width={100} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default ImageTextLogo;
