import * as React from "react";
import { popoverLabelSelectElementStyle } from "./popover_label_select_element.style";
import { useHasTouch } from "../../../../hooks/use_has_touch";

export interface CheckboxProps {
    selected: boolean;
    label: string;
    id: string;
    onSelect: (id: string, selected: boolean) => void;
}

export const PopoverLabelSelectElementComponent: React.FC<CheckboxProps> = props => {
    const { selected, onSelect, label, id } = props;
    const hasTouch = useHasTouch();

    function handleClick(selected: boolean): void {
        onSelect(id, selected);
    }

    return (
        <div
            className={`${popoverLabelSelectElementStyle} ${selected ? "selected" : "not-selected"} ${
                hasTouch ? "" : "no-touch"
            }`}
            onClick={() => {
                handleClick(selected);
            }}
        >
            {label}
        </div>
    );
};
