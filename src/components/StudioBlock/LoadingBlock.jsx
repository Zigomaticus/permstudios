import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={120}
      viewBox="0 0 800 120"
      backgroundColor="#ecebeb"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="6" ry="6" width="200" height="110" />
      <rect x="710" y="33" rx="5" ry="5" width="50" height="50" />
      <rect x="269" y="11" rx="11" ry="11" width="162" height="24" />
      <rect x="269" y="45" rx="12" ry="12" width="280" height="22" />
      <rect x="267" y="79" rx="11" ry="11" width="280" height="22" />
    </ContentLoader>
  );
}

export default LoadingBlock;
