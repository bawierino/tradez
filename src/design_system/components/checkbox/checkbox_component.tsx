import * as React from "react";

export interface CheckboxProps {
    initiallyChecked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export const CheckboxComponent: React.FC<CheckboxProps> = props => {
    const { initiallyChecked, onChange, label } = props;
    const [checked, setChecked] = React.useState(initiallyChecked);

    function handleClick(checked: boolean): void {
        setChecked(checked);
        onChange(checked);
    }

    return (
        <div
            onClick={() => {
                handleClick(!checked);
            }}
        >
            <input
                type="checkbox"
                checked={checked}
                onChange={event => {
                    handleClick(event.target.checked);
                }}
            ></input>
            {label && <label>{label}</label>}
        </div>
    );
};
