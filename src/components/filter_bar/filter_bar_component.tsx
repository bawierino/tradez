import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { CheckboxGroupComponent } from "../checkbox/checkbox_group_component";

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

interface RarityFilterProps {
    onRarityFilterChanged: (rarities: Rarity[]) => void;
    initialRarities: Rarity[];
}
const RarityFilterComponent: React.FC<RarityFilterProps> = props => {
    const { onRarityFilterChanged, initialRarities } = props;
    return (
        <div>
            Filter on rarity
            <CheckboxGroupComponent
                checkboxes={Object.values(Rarity).map(rarity => ({
                    label: rarity,
                    id: rarity
                }))}
                onSelectionChanged={selectedIds => {
                    onRarityFilterChanged(selectedIds as Rarity[]);
                }}
                initialSelectionIds={initialRarities}
            />
        </div>
    );
};
