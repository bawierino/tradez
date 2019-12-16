import * as React from "react";
import { FormComponentProps, FormComponent } from "../form_component/form_component";

export interface CheckboxProps extends FormComponentProps {
    initiallyChecked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxComponent: React.FC<CheckboxProps> = props => {
    const { initiallyChecked, onChange, label } = props;
    const [checked, setChecked] = React.useState(initiallyChecked);

    function handleClick(checked: boolean): void {
        setChecked(checked);
        onChange(checked);
    }

    return (
        <FormComponent
            label={label}
            onLabelClick={() => {
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
        </FormComponent>
    );
};
