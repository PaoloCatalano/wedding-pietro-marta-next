import ContentfulImage from "../components/ContentfulImage";

export default function Category({ images }) {
  return (
    <div className="gallery-category">
      <h2>{images[0].category}</h2>

      <div className="gallery-container">
        {images?.map(({ pic }) => (
          <div key={pic.title} className="image-frame">
            <ContentfulImage
              layout="fill"
              alt={`Image for ${pic.title}`}
              src={pic.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
