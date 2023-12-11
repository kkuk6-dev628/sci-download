import React from "react";
import { TabContainer } from "./Tabs.styles";
/**
 * NOTE: To render tabs
 * @param {Function} onHandledTabState
 * @param {Array} tabs
 * @returns Collection of Tabs
 */
export default function Tabs({ onHandledTabState, tabs, ...props }) {
  return (
    <TabContainer>
      <ul class="nav nav-tabs p-2">
        {tabs?.map((item, index) => (
          <li onClick={() => onHandledTabState(index)} class="nav-item">
            <span
              className={`custom-nav nav-link ${item?.isActive ? "active" : ""}`}
              aria-current="page"
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>
      {props.children}
    </TabContainer>
  );
}
