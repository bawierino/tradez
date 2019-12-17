import * as React from "react";
import { dropdownStyle } from "./dropdown.style";

export interface DropdownProps {}

export const DropdownComponent: React.FC<DropdownProps> = props => {
    return <div className={dropdownStyle}>{props.children}</div>;
};
