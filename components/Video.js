const Video = ({ src, title, ...props }) => {
  return (
    <div className="iframeVideoWrapper">
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
      <center>
        <p>{title}</p>
      </center>
      <style jsx>{`
        .iframeVideoWrapper {
          width: 100%;
        }
        .video {
          overflow: hidden;
          /* // Calculated from the aspect ration of the content (in case of 16:9 it is 9/16= 0.5625) */
          padding-top: 56.25%;
          position: relative;
          border-radius: var(--radius);
        }
        .video iframe {
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

Video.defaultProps = {
  //embed link!!
  src: "https://www.youtube.com/embed/soIwo-JTyuo",
  title: "Here Without | Original Song - Official Video",
};

export default Video;
