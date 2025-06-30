import React from "react";

interface PictureTagProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const PictureTag: React.FC<PictureTagProps> = ({
  src,
  alt,
  className,
  children,
}) => {
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, ".png");

  return (
    <>
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} className={className} loading="lazy" />
      </picture>
      {children}
    </>
  );
};

export default PictureTag;
