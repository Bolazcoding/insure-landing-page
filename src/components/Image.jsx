const Image = ({ src, alt = "", className = "" }) => {
  if (!src) {
    throw new Error("Image source (src) is required!");
  }

  return <img src={src} alt={alt} className={`object-contain ${className}`} />;
};

export default Image;
