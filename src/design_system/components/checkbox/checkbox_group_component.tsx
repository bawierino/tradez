import * as React from "react";
import { CheckboxComponent } from "./checkbox_component";

export interface CheckboxGroupProps {
    checkboxes: CheckboxInfo[];
    onSelectionChanged: (selectedIds: string[]) => void;
    initialSelectionIds: string[];
}

export interface CheckboxInfo {
    label: string;
    id: string;
}

export const CheckboxGroupComponent: React.FC<CheckboxGroupProps> = props => {
    const { checkboxes, onSelectionChanged, initialSelectionIds } = props;
    const [selection, setSelection] = React.useState(initialSelectionIds);

    return (
        <div>
            {checkboxes.map(checkbox => (
                <CheckboxComponent
                    initiallyChecked={initialSelectionIds.includes(checkbox.id)}
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
