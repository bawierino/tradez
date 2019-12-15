import * as React from "react";

export interface CheckboxProps {
    initiallyChecked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export const CheckboxComponent: React.FC<CheckboxProps> = props => {
    const { initiallyChecked, onChange, label } = props;
    const [checked, setChecked] = React.useState(initiallyChecked);
    return (
        <div>
            {label && <span>{label}</span>}
            <input
                type="checkbox"
                checked={checked}
                onChange={event => {
                    const isNowChecked = event.target.checked;
                    setChecked(isNowChecked);
                    onChange(isNowChecked);
                }}
            ></input>
        </div>
    );
};
