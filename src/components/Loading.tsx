import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-full w-full m-auto">
      <FidgetSpinner visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" ballColors={["#d946ef", "#a855f7", "#6366f1"]} backgroundColor="#14b8a6" />;
    </div>
  );
};

export default Loading;
