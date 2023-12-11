import React from "react";
import { SliderContainer } from "./Slider.styles";
/**
 * NOTE: To show the car detail slider.
 * @param {Object} selectedData 
 * @param {Function} toggleSlider 
 * @param {Boolean} sliderVisible 
 * @returns Slider
 */
export default function Slider({
  selectedData,
  toggleSlider,
  sliderVisible,
  ...props
}) {
  return (
    <SliderContainer visible={sliderVisible}>
      <div className="toggle-container">
        <span className="toggle btn-md text-light pr-4" onClick={toggleSlider}>
          {">"}
        </span>
        <span className="font-weight-bold text-light">{selectedData.type}</span>
      </div>
      {props.children}
    </SliderContainer>
  );
}
