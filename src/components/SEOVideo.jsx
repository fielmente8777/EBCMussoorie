import React from "react";


const SEOVideo = ({
  src,
  poster,
  width,
  height,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  preload = "auto",
  title,
  tracks = [],
}) => {
  return (
    <>
      <video
        src={src}
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload={preload}
        title={title}
        controlsList="nodownload"
        className="w-full h-full object-cover"
      >
        {tracks.map((track, index) => (
          <track
            key={index}
            src={track.src}
            kind={track.kind}
            srcLang={track.srcLang}
            label={track.label}
          />
        ))}
        Sorry, your browser doesn&apos;t support embedded videos.
      </video>
    </>
  );
};

export default SEOVideo;
