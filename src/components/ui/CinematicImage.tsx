import Image from "next/image";

type CinematicImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

export function CinematicImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  fill = false,
  width,
  height,
  priority = false,
  sizes,
}: CinematicImageProps) {
  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className={`object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={imgClassName}
    />
  );
}