import React from "react";

const getYouTubeEmbedUrl = (url) => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : null;
};

const responsiveContainerStyle = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
};

const responsiveIframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: 0,
};

const Video = ({ title, src }) => {
  const embedUrl = getYouTubeEmbedUrl(src);

  if (!embedUrl) {
    return <div>Invalid YouTube URL</div>;
  }

  return (
    <div>
      <div style={responsiveContainerStyle}>
        <iframe
          title={title}
          src={embedUrl}
          style={responsiveIframeStyle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-title">{title}</div>
    </div>
  );
};

export default Video;
