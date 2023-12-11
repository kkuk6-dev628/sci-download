import React from "react";
import Select from "../../atoms/Select/Select";
import SelectOptionsList from "../../atoms/SelectOptionList/SelectOptionList";

export default function SelectInput({
  value,
  onChange,
  options = ["one", "two", "three"], // setup as defaults
  objId,
  objTextKey,
  defaultOption = "default label",
  onItemClick,
  ...props
}) {
  return (
    <>
      <Select
        objId={objId}
        objTextKey={objTextKey}
        defaultOption={defaultOption}
        onChange={onChange}
        options={options}
        value={value}
        {...props}
      >
        <SelectOptionsList 
        objId={objId}
        objTextKey={objTextKey}
        options={options}
        {...props} 
        />
      </Select>
    </>
  );
}
