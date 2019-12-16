import * as React from "react";

export interface DropdownProps {
    externalPart: JSX.Element;
}

export const DropdownComponent: React.FC<DropdownProps> = props => {
    const { externalPart, children } = props;

    const [showDropdown, setShowDropdown] = React.useState(false);

    return (
        <div style={{ position: "relative" }}>
            <div
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                {externalPart}
            </div>
            {showDropdown && <div style={{ position: "absolute", left: "200px" }}>{children}</div>}
        </div>
    );
};
