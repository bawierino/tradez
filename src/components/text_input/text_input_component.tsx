import * as React from "react";
import { FormComponentProps, FormComponent } from "../form_component/form_component";

export interface TextInputProps extends FormComponentProps {
    initialValue: string;
    onChange: (text: string) => void;

    placeholder?: string;
}

export const TextInputComponent: React.FC<TextInputProps> = props => {
    const { label, initialValue, onChange, placeholder } = props;
    const [value, setValue] = React.useState(initialValue);
    return (
        <FormComponent label={label}>
            <input
                type="text"
                value={value}
                onChange={event => {
                    const newValue = event.target.value;
                    setValue(newValue);
                    onChange(newValue);
                }}
                placeholder={placeholder}
            />
        </FormComponent>
    );
};
