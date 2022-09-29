import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Spinner = () => {
  let [color] = useState("#3440eb");
  return (
    <div className="flex h-auto animate-bounce overflow-visible">
      <CircleLoader color={color} cssOverride={override} size={50} />
    </div>
  );
};

export default Spinner;
