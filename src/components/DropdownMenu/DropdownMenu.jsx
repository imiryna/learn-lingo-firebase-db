import React from "react";
import { DropdownBlockCss } from "./DropdownMenu.styled";
import { setColor } from "../../Store/themeToggle/themeSlice";
import { useDispatch } from "react-redux";

export const DropdownMenu = () => {
  const dispatch = useDispatch();

  const selectChange = (e) => {
    dispatch(setColor(e.target.value));
  };
  return (
    <DropdownBlockCss>
      <select onChange={selectChange}>
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
