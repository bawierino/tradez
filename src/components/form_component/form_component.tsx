import * as React from "react";

export interface FormComponentProps {
    label?: string;
}

export const FormComponent: React.FC<FormComponentProps> = props => {
    const { label, children } = props;

    return (
        <div>
            {label && <span>{label}</span>}
            {children}
        </div>
    );
};
