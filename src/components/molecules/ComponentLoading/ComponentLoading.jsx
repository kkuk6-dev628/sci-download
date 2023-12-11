import React from "react";
import Loader from "../../atoms/Loader/Loader";

export default function ComponentLoading({ isLoading, ...props }) {
  return isLoading ? (
    <div className="mt-4">
      <Loader />
    </div>
  ) : (
    props.children
  );
}
