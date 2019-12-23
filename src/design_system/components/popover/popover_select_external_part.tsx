import * as React from "react";

export interface PopoverSelectExternalPartProps {
    label: string;
    selectedElementsMessage: string;
}

export const PopoverSelectExternalPartComponent: React.FC<PopoverSelectExternalPartProps> = props => {
    const { label, selectedElementsMessage } = props;
    return (
        <React.Fragment>
            {label} {selectedElementsMessage}
        </React.Fragment>
    );
};
