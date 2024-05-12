import React from "react";
import { DropdownBlockCss } from "./DropdownMenu.styled";

export const DropdownMenu = () => {
  return (
    <DropdownBlockCss>
      <select>
        <option value="fruit">Colors</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="cream">Cream</option>
      </select>
    </DropdownBlockCss>
  );
};
