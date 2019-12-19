import * as React from "react";
import { SelectionStrategy } from "../../../../constants/selection_strategy";
import { PopoverLabelSelectElementComponent } from "../element/popover_label_select_element_component";
import { popoverLabelSelectGroupStyle } from "./popover_label_select_group.style";

export interface PopoverLabelSelectGroupProps {
    elements: LabelSelectElementInfo[];
    onSelectionChanged: (selectedIds: string[]) => void;
    initialSelectionIds: string[];
    selectionStrategy: SelectionStrategy;
}

export interface LabelSelectElementInfo {
    label: string;
    id: string;
}

export const PopoverLabelSelectGroupComponent: React.FC<PopoverLabelSelectGroupProps> = props => {
    const { elements, onSelectionChanged, initialSelectionIds, selectionStrategy } = props;
    const [selection, setSelection] = React.useState(initialSelectionIds);

    return (
        <div className={popoverLabelSelectGroupStyle}>
            {elements.map(element => (
                <PopoverLabelSelectElementComponent
                    key={element.id}
                    selected={initialSelectionIds.includes(element.id)}
                    onSelect={(id, selected) => {
                        if (selectionStrategy === SelectionStrategy.CHECKBOX) {
                            const selectionCopy = [...selection];
                            if (!selected) {
                                selectionCopy.push(element.id);
                            } else {
                                selectionCopy.splice(
                                    selectionCopy.findIndex(s => s === element.id),
                                    1
                                );
                            }
                            setSelection(selectionCopy);
                            onSelectionChanged(selectionCopy);
                        }
                    }}
                    label={element.label}
                    id={element.id}
                />
            ))}
        </div>
    );
};
