import * as React from "react";
import { SelectionStrategy } from "../../../../constants/selection_strategy";
import { useScrollShadowClassName } from "../../../../hooks/use_scroll_shadow_class_name";
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

    const wrapperRef = React.useRef(undefined as HTMLDivElement);
    const scrollShadowClassName = useScrollShadowClassName(wrapperRef);

    function handleSelection(id: string, selected: boolean): void {
        if (selectionStrategy === SelectionStrategy.CHECKBOX) {
            const selectionCopy = [...selection];
            if (!selected) {
                selectionCopy.push(id);
            } else {
                selectionCopy.splice(
                    selectionCopy.findIndex(s => s === id),
                    1
                );
            }
            setSelection(selectionCopy);
            onSelectionChanged(selectionCopy);
        }
    }

    function getSelectionExplanation(selectionStrategy: SelectionStrategy): string {
        if (selectionStrategy === SelectionStrategy.CHECKBOX) {
            return "Choose multiple";
        }
    }

    return (
        <div className={`${popoverLabelSelectGroupStyle} ${scrollShadowClassName}`} ref={wrapperRef}>
            <div className="selection-explanation">{getSelectionExplanation(selectionStrategy)}</div>
            {elements.map(element => (
                <PopoverLabelSelectElementComponent
                    key={element.id}
                    selected={initialSelectionIds.includes(element.id)}
                    onSelect={(id, selected) => {
                        handleSelection(id, selected);
                    }}
                    label={element.label}
                    id={element.id}
                />
            ))}
        </div>
    );
};
