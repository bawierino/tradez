import * as React from "react";

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
            onClick={() => {
                handleClick(selected);
            }}
        >
            {label}
        </div>
    );
};
