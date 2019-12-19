import * as React from "react";
import { useOnClickOutside } from "../../../hooks/use_on_click_outside";
import { PopoverComponent } from "./popover_component";

export interface WrappedPopoverProps {
    externalPart: JSX.Element;
}

export const WrappedPopoverComponent: React.FC<WrappedPopoverProps> = props => {
    const { externalPart, children } = props;

    const [showPopover, setShowPopover] = React.useState(false);

    const popoverWrapperRef = React.useRef(undefined);
    useOnClickOutside(popoverWrapperRef, () => {
        setShowPopover(false);
    });

    return (
        <div style={{ position: "relative" }} ref={popoverWrapperRef}>
            <div
                onClick={() => {
                    setShowPopover(!showPopover);
                }}
            >
                {externalPart}
            </div>
            {showPopover && <PopoverComponent>{children}</PopoverComponent>}
        </div>
    );
};
