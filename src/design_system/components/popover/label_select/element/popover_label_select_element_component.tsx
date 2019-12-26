import * as React from "react";
import { useHasTouchClassName } from "../../../../hooks/use_has_touch_class_name";
import { popoverLabelSelectElementStyle } from "./popover_label_select_element.style";

export interface CheckboxProps {
    selected: boolean;
    label: string;
    id: string;
    onSelect: (id: string, selected: boolean) => void;
}

export const PopoverLabelSelectElementComponent: React.FC<CheckboxProps> = props => {
    const { selected, onSelect, label, id } = props;
    const hasTouchClassName = useHasTouchClassName();

    function handleClick(selected: boolean): void {
        onSelect(id, selected);
    }

    return (
        <div
            className={`${popoverLabelSelectElementStyle}${
                selected ? " selected" : " not-selected"
            } ${hasTouchClassName}`}
            onClick={() => {
                handleClick(selected);
            }}
        >
            {label}
        </div>
    );
};
