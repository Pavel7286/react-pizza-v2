import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1" y="204" rx="0" ry="0" width="280" height="30" />
    <rect x="0" y="255" rx="0" ry="0" width="280" height="90" />
    <rect x="127" y="361" rx="17" ry="17" width="152" height="35" />
    <rect x="2" y="364" rx="0" ry="0" width="90" height="30" />
    <circle cx="137" cy="95" r="95" />
  </ContentLoader>
);

export default Skeleton;
