import { FFCard } from "../data/structures/ff_card";
import * as React from "react";
import { mapFFDecksCards } from "../data/transformations/map_ff_decks_cards";
import { allFFDecksCards } from "../data/all_ff_decks_cards";

export const useCards: () => FFCard[] = () => {
    const areCardsInitializedRef = React.useRef(false);
    const cardsRef = React.useRef((undefined as unknown) as FFCard[]);
    if (!areCardsInitializedRef.current) {
        cardsRef.current = mapFFDecksCards(allFFDecksCards);
        areCardsInitializedRef.current = true;
    }
    return cardsRef.current;
};
