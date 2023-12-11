import React from "react";
/**
 * NOTE: To return list of options of select.
 * @param {string} objId 
 * @param {string} objTextKey 
 * @param {Array} options 
 * @param {Function} onItemClick 
 * @returns Select Option List
 */
const SelectOptionsList = ({ objId, objTextKey, options, onItemClick }) => {
  return (
    <>
      {options?.map((optionItem, index) =>
        objId && objTextKey ? (
          <option key={objId} onClick={() => onItemClick(optionItem)}>
            {optionItem[objTextKey]}
          </option>
        ) : (
          <option key={index} onClick={() => onItemClick(optionItem)}>
            {optionItem}
          </option>
        )
      )}
    </>
  );
};

export default SelectOptionsList;
