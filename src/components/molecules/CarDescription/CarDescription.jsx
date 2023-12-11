import React from "react";

export default function CarDescription({ selectedCar }) {
  return (
    <p className="p-4">
      {selectedCar?.description}
      <br />
      <br />
      {selectedCar?.partsDescription}
    </p>
  );
}
