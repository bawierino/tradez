import * as React from "react";
import { cardStyle } from "./card.style";
import { useHasTouchClassName } from "../../hooks/use_has_touch_class_name";

export interface CardProps {}

export const CardComponent: React.FC<CardProps> = props => {
    const { children } = props;
    const hasTouchClassName = useHasTouchClassName();

    return <div className={`${cardStyle} ${hasTouchClassName}`}>{children}</div>;
};
