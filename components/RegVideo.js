const RegVideo = ({ title, video }) => {
  return (
    <div className="regular-video">
      <video controls /* autoPlay muted loop */>
        <source src={video} type="video/mp4" />
      </video>

      <p className="video-title">{title}</p>

      <style jsx>{`
        .regular-video {
          width: 80vw;
          max-width: 700px;
          height: 90vh;
          position: relative;
          margin-bottom: 4rem;
        }
        .regular-video video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default RegVideo;
