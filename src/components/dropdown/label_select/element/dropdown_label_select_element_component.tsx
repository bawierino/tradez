import * as React from "react";
import { dropdownLabelSelectElementStyle } from "./dropdown_label_select_element.style";

export interface CheckboxProps {
    selected: boolean;
    label: string;
    id: string;
    onSelect: (id: string, selected: boolean) => void;
}

export const DropdownLabelSelectElementComponent: React.FC<CheckboxProps> = props => {
    const { selected, onSelect, label, id } = props;

    function handleClick(selected: boolean): void {
        onSelect(id, selected);
    }

    return (
        <div
            className={`${dropdownLabelSelectElementStyle} ${selected ? "selected" : "not-selected"}`}
            onClick={() => {
                handleClick(selected);
            }}
        >
            {label}
        </div>
    );
};
