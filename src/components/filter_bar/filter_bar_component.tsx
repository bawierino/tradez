import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { RarityFilterComponent } from "./rarity_filter_component";

export interface FilterBarProps {
    cards: FFCard[];
    onFilter: (cards: FFCard[]) => void;
}

export const FilterBarComponent: React.FC<FilterBarProps> = props => {
    const { cards, onFilter } = props;

    const [rarityFilter, setRarityFilter] = React.useState([] as Rarity[]);

    React.useEffect(() => {
        onFilter(
            cards.filter(c => {
                if (rarityFilter.length) {
                    return rarityFilter.includes(c.rarity);
                } else {
                    return true;
                }
            })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rarityFilter]);

    return (
        <div>
            <RarityFilterComponent
                onRarityFilterChanged={rarities => {
                    setRarityFilter(rarities);
                }}
                initialRarities={rarityFilter}
            />
        </div>
    );
};
