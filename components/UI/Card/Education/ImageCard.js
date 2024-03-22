const ImageCard = ({ url, className }) => {
  return (
    <img
      className={`h-[350px] rounded-lg object-contain p-10 md:rounded-none md:h-full ${className}`}
      src={url}
      alt="logo"
    />
  );
};

export default ImageCard;
