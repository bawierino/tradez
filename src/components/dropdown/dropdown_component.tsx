import * as React from "react";
import { dropdownStyle } from "./dropdown.style";

export interface DropdownProps {
    externalPart: JSX.Element;
}

export const DropdownComponent: React.FC<DropdownProps> = props => {
    const { externalPart, children } = props;

    const [showDropdown, setShowDropdown] = React.useState(false);

    return (
        <div className={dropdownStyle} style={{ position: "relative" }}>
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
