import * as React from "react";
import { textInputStyle } from "./text_input.style";

export interface TextInputProps {
    initialValue: string;
    onChange: (text: string) => void;
    label?: string;
    placeholder?: string;
}

export const TextInputComponent: React.FC<TextInputProps> = props => {
    const { label, initialValue, onChange, placeholder } = props;
    const [value, setValue] = React.useState(initialValue);
    const [focussed, setFocussed] = React.useState(false);
    const inputRef = React.useRef(undefined as HTMLInputElement);
    const empty = !value;

    return (
        <div className={`${textInputStyle}${focussed ? " focussed" : ""}${!empty ? " not-empty" : ""}`}>
            <input
                type="text"
                value={value}
                onChange={event => {
                    const newValue = event.target.value;
                    setValue(newValue);
                    onChange(newValue);
                }}
                placeholder={placeholder}
                onFocus={() => {
                    setFocussed(true);
                }}
                onBlur={() => {
                    setFocussed(false);
                }}
                ref={inputRef}
            />
            {label && (
                <label
                    onClick={() => {
                        if (!focussed && empty) {
                            inputRef.current.focus();
                        }
                    }}
                >
                    {label}
                </label>
            )}
        </div>
    );
};
