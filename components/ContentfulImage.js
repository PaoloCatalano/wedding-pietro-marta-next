import Image from "next/image";
import blurData from "../lib/blurDataURL";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurData}
      loader={contentfulLoader}
      {...props}
    />
  );
};

export default ContentfulImage;
