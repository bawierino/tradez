import * as React from "react";
import { ButtonComponent, ButtonProps } from "../../button/button_component";
import { CardComponent } from "../card_component";
import { appCardStyle } from "./app_card.style";

export interface AppCardProps {
    button: ButtonProps;
    title: string;
    description: string;
    titleBackground: string;
}

export const AppCardComponent: React.FC<AppCardProps> = props => {
    const { button, title, description, titleBackground } = props;

    return (
        <CardComponent>
            <div className={appCardStyle}>
                <div className="title" style={{ background: titleBackground }}>
                    {title}
                </div>
                <div className="description">{description}</div>
                <div className="button">
                    <ButtonComponent {...button} />
                </div>
            </div>
        </CardComponent>
    );
};
