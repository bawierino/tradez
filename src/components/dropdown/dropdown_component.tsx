import * as React from "react";
import { dropdownStyle } from "./dropdown.style";
import { useOnClickOutside } from "../../hooks/use_on_click_outside";

export interface DropdownProps {
    externalPart: JSX.Element;
}

export const DropdownComponent: React.FC<DropdownProps> = props => {
    const { externalPart, children } = props;

    const [showDropdown, setShowDropdown] = React.useState(false);

    const dropdownRef = React.useRef(undefined);
    useOnClickOutside(dropdownRef, () => {
        setShowDropdown(false);
    });

    return (
        <div className={dropdownStyle} style={{ position: "relative" }} ref={dropdownRef}>
            <div
                className="external-part"
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                {externalPart}
            </div>
            {showDropdown && (
                <div className="internal-part" style={{ position: "absolute", left: "200px" }}>
                    {children}
                </div>
            )}
        </div>
    );
};
