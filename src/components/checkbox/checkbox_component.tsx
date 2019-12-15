import * as React from "react";

export interface CheckboxProps {
    initiallyChecked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxComponent: React.FC<CheckboxProps> = props => {
    const { initiallyChecked, onChange } = props;
    const [checked, setChecked] = React.useState(initiallyChecked);
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={event => {
                const isNowChecked = event.target.checked;
                setChecked(isNowChecked);
                onChange(isNowChecked);
            }}
        ></input>
    );
};
