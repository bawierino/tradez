import * as React from "react";
import {
    PopoverLabelSelectGroupComponent,
    PopoverLabelSelectGroupProps
} from "./group/popover_label_select_group_component";
import { WrappedPopoverComponent } from "../wrapped_popover_component";
import {
    PopoverSelectExternalPartProps,
    PopoverSelectExternalPartComponent
} from "../popover_select_external_part";

export interface WrappedPopoverLabelSelectProps
    extends PopoverLabelSelectGroupProps,
        PopoverSelectExternalPartProps {}

export const WrappedPopoverLabelSelectComponent: React.FC<WrappedPopoverLabelSelectProps> = props => {
    const {
        elements,
        initialSelectionIds,
        label,
        onSelectionChanged,
        selectedElementsMessage,
        selectionStrategy
    } = props;

    return (
        <WrappedPopoverComponent
            externalPart={
                <PopoverSelectExternalPartComponent
                    label={label}
                    selectedElementsMessage={selectedElementsMessage}
                />
            }
        >
            <PopoverLabelSelectGroupComponent
                elements={elements}
                onSelectionChanged={selectedIds => {
                    onSelectionChanged(selectedIds);
                }}
                initialSelectionIds={initialSelectionIds}
                selectionStrategy={selectionStrategy}
            />
        </WrappedPopoverComponent>
    );
};
