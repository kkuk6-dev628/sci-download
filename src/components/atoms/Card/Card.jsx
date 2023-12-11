import React from "react";
import { CardContainer } from "./Card.styles";
/**
 * Show cards to display car features
 * @param {string} icon 
 * @param {string} title 
 * @param {string} value 
 * @returns Card 
 */
export default function Card({ icon, title, value }) {
  return (
    <CardContainer>
      <h5>{title}</h5>
      <div>
        <i className={icon}></i>
      </div>
      <span>{value}</span>
    </CardContainer>
  );
}
