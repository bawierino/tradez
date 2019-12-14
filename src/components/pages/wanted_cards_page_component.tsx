import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { WantedCardComponent } from "../wanted_card/wanted_card_component";
import { PageProps } from "./page_props";

export interface WantedCardsPageProps extends PageProps {
    cards: FFCard[];
}

export const WantedCardsPageComponent: React.FC<WantedCardsPageProps> = (props: WantedCardsPageProps) => {
    const { cards } = props;
    return (
        <div>
            {cards.map(c => (
                <WantedCardComponent card={c} key={c.serial} />
            ))}
        </div>
    );
};
