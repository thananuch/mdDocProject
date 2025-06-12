import React from "react";
import ReactLoading from "react-loading";

function LoadingSpinner() {
  return (
    <div
      className="flex  flex-col  justify-center fixed top-0 right-0 bottom-0 left-0 z-10"
      style={{
        backgroundColor: "rgb(115 115 115 / 0.3)",
      }}
    >
      <div className="flex justify-center">
        <ReactLoading type="spokes" color="#543FBF" height={100} width={100} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
