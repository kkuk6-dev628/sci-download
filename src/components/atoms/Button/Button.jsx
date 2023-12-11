import React from "react";
import { ButtonContainer } from "./Button.styles";
/**
 * Reusable Button Component
 * @param {string} label - The text label of the button
 * @param {function} onClick - The function to be executed when the button is clicked
 * @param {string} className - Additional class name(s) for styling
 * @returns {JSX.Element} - The rendered button element
 */
const Button = ({ label, onClick, className, disabled }) => {
  return (
    <ButtonContainer>
      <button disabled={disabled} className={`btn button ${className}`} onClick={onClick}>
        {label}
      </button>
    </ButtonContainer>
  );
};

export default Button;
