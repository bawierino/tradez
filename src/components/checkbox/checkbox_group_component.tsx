import * as React from "react";
import { CheckboxComponent } from "./checkbox_component";

export interface CheckboxGroupProps {
    checkboxes: CheckboxInfo[];
    onSelectionChanged: (selectedIds: string[]) => void;
}

export interface CheckboxInfo {
    label: string;
    id: string;
    initiallyChecked: boolean;
}

export const CheckboxGroupComponent: React.FC<CheckboxGroupProps> = props => {
    const { checkboxes, onSelectionChanged } = props;
    const [selection, setSelection] = React.useState(
        checkboxes.map(c => (c.initiallyChecked ? c.id : undefined)).filter(c => c !== undefined)
    );
    return (
        <div>
            {checkboxes.map(checkbox => (
                <CheckboxComponent
                    initiallyChecked={checkbox.initiallyChecked}
                    onChange={checked => {
                        const selectionCopy = [...selection];
                        if (checked) {
                            selectionCopy.push(checkbox.id);
                        } else {
                            selectionCopy.splice(
                                selectionCopy.findIndex(s => s === checkbox.id),
                                1
                            );
                        }
                        setSelection(selectionCopy);
                        onSelectionChanged(selectionCopy);
                    }}
                    label={checkbox.label}
                />
            ))}
        </div>
    );
};
