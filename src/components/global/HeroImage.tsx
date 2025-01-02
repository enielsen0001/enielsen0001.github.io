interface HeroBannerProps {
    fileTitle: string;
    ImgAlt?: string;
  }

  const HeroBanner: React.FC<HeroBannerProps> = ({ fileTitle, ImgAlt }) => {
    const images: { width: number; url: string }[] = [
      { width: 640, url: `/img/${fileTitle}-640.jpg` },
      { width: 1200, url: `/img/${fileTitle}-1200.jpg` },
      { width: 1600, url: `/img/${fileTitle}-1600.jpg` },
    ];

    const srcset = images.map(image => `${image.url} ${image.width}w`).join(', ');
    const fallbackImage = images.find(image => image.width === 640) || { url: `/img/${fileTitle}-fallback.jpg` };

    return (
      <img
        className="hero-img"
        src={fallbackImage.url}
        srcSet={srcset}
        sizes="100vw"
        alt={`${ImgAlt ?? ''}`}
        loading="eager"
      />
    );
  };

  export default HeroBanner;