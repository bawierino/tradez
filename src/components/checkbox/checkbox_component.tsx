import * as React from "react";
import { FormComponentProps, FormComponent } from "../form_component/form_component";

export interface CheckboxProps extends FormComponentProps {
    initiallyChecked: boolean;
    onChange: (checked: boolean) => void;
}

export const CheckboxComponent: React.FC<CheckboxProps> = props => {
    const { initiallyChecked, onChange, label } = props;
    const [checked, setChecked] = React.useState(initiallyChecked);
    return (
        <FormComponent label={label}>
            <input
                type="checkbox"
                checked={checked}
                onChange={event => {
                    const isNowChecked = event.target.checked;
                    setChecked(isNowChecked);
                    onChange(isNowChecked);
                }}
            ></input>
        </FormComponent>
    );
};
