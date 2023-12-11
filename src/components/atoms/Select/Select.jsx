import React from "react";
import { SelectContainer } from "./Select.styles";
/**
 * A reuseable select component.
 * @param {value} string
 * @param {onChange} function
 * @param {options}  array[]
 * @param {defaultOption}  string
 * @returns Select Component
 */
export default function Select({
  value,
  onChange,
  options = ["one", "two", "three"], // setup as defaults
  objId,
  objTextKey,
  defaultOption = "default label",
  ...props
}) {
  return (
    <SelectContainer>
      <select onChange={onChange} value={value} class="form-select">
        <option value={'default'} defaultChecked selected>{defaultOption}</option>
        {props.children}
      </select>
    </SelectContainer>
  );
}
