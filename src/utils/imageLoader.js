const imageLoader = ({ src, width, quality }) => {
  // Return the image URL with the requested width and quality
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
