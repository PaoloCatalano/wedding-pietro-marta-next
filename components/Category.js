import ContentfulImage from "../components/ContentfulImage";

export default function Category({ images }) {
  return (
    <div className="gallery-category" id={images[0].category}>
      <h2>{images[0].category}</h2>

      <div className="gallery-container">
        {images?.map(({ pic }) => (
          <a
            href={pic.url}
            target="_blank"
            rel="noopener noreferrer"
            key={pic.title}
            className="image-frame"
          >
            <ContentfulImage
              layout="fill"
              sizes="30vw"
              alt={`pietro e marta: ${pic.title}`}
              src={pic.url}
            />
            <p className="pic-title">{pic.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
