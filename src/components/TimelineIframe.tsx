import React from "react";

const TimelineIframe = () => {
  return (
    <iframe
      src="/Timeline3/index.html"
      title="Timeline CodePen"
      style={{
        width: "100%",
        border: "none",
        borderRadius: "12px",
        overflow: "hidden"
      }}
      className="h-[300px] md:h-[42vw] max-h-[600px]"
    />
  );
};

export default TimelineIframe;