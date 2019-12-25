import * as React from "react";
import { useHasTouchClassName } from "../../hooks/use_has_touch_class_name";
import { buttonStyle } from "./button.style";
import { animationDurationsRawMs } from "../../constants/animations";

export interface ButtonProps {
    id: string;
    label?: string;
    icon?: string;
    iconPlacement?: ButtonIconPlacement;
    onCLick?: (id: string) => void;
}

export enum ButtonIconPlacement {
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

export const ButtonComponent: React.FC<ButtonProps> = props => {
    const { id, label = "", icon = "", onCLick = () => {}, iconPlacement = ButtonIconPlacement.LEFT } = props;
    const hasTouchClassName = useHasTouchClassName();

    function renderIcon(): JSX.Element {
        if (icon) {
            return <i className={`${icon} icon`} />;
        } else {
            return undefined;
        }
    }

    return (
        <div
            className={`${buttonStyle} ${hasTouchClassName}`}
            onClick={() => {
                setTimeout(() => {
                    onCLick(id);
                }, animationDurationsRawMs.short);
            }}
        >
            {iconPlacement === ButtonIconPlacement.LEFT ? renderIcon() : <div> </div>}
            <div className="label">{label}</div>
            {iconPlacement === ButtonIconPlacement.RIGHT ? renderIcon() : <div> </div>}
        </div>
    );
};
