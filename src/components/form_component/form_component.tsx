import * as React from "react";

export interface FormComponentProps {
    label?: string;
    onLabelClick?: () => void;
}

export const FormComponent: React.FC<FormComponentProps> = props => {
    const { label, children, onLabelClick } = props;

    return (
        <div>
            {label && (
                <span
                    onClick={() => {
                        onLabelClick();
                    }}
                >
                    {label}
                </span>
            )}
            {children}
        </div>
    );
};
