import * as React from "react";
import { useOnClickOutside } from "../../hooks/use_on_click_outside";
import { DropdownComponent } from "./dropdown_component";

export interface WrappedDropdownProps {
    externalPart: JSX.Element;
}

export const WrappedDropdownComponent: React.FC<WrappedDropdownProps> = props => {
    const { externalPart, children } = props;

    const [showDropdown, setShowDropdown] = React.useState(false);

    const dropdownWrapperRef = React.useRef(undefined);
    useOnClickOutside(dropdownWrapperRef, () => {
        setShowDropdown(false);
    });

    return (
        <div style={{ position: "relative" }} ref={dropdownWrapperRef}>
            <div
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                {externalPart}
            </div>
            {showDropdown && <DropdownComponent>{children}</DropdownComponent>}
        </div>
    );
};
