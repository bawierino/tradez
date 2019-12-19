import * as React from "react";
import { popoverStyle } from "./popover.style";

export interface PopoverProps {}

export const PopoverComponent: React.FC<PopoverProps> = props => {
    return <div className={popoverStyle}>{props.children}</div>;
};
