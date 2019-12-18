import * as React from "react";

export interface TextInputProps {
    initialValue: string;
    onChange: (text: string) => void;
    label?: string;
    placeholder?: string;
}

export const TextInputComponent: React.FC<TextInputProps> = props => {
    const { label, initialValue, onChange, placeholder } = props;
    const [value, setValue] = React.useState(initialValue);
    return (
        <div>
            {label && <label>{label}</label>}
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
        </div>
    );
};