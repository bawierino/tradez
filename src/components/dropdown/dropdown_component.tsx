import * as React from "react";
import { dropdownStyle } from "./dropdown.style";
import { useOnClickOutside } from "../../hooks/use_on_click_outside";

export interface DropdownProps {
    externalPart: JSX.Element;
}

export const DropdownComponent: React.FC<DropdownProps> = props => {
    const { externalPart, children } = props;

    const [showDropdown, setShowDropdown] = React.useState(false);

    const externalPartRef = React.useRef(undefined);
    useOnClickOutside(externalPartRef, () => {
        setShowDropdown(false);
    });

    return (
        <div className={dropdownStyle} style={{ position: "relative" }}>
            <div
                className="external-part"
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
                ref={externalPartRef}
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
