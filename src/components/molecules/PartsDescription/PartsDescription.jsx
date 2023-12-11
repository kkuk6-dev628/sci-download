import React from "react";

export default function PartsDescription({ selectedCar }) {
  return (
    <table class="table table-dark table-bordered">
      <tbody>
        {selectedCar?.partsInfo?.map((parts) => (
          <tr>
            <td>{parts?.partsName}</td>
            <td>{parts?.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
