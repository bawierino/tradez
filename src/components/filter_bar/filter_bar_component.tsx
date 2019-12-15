import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { CheckboxComponent } from "../checkbox/checkbox_component";

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
                onRarityFilterChanged={payload => {
                    const rarityFilterCopy = [...rarityFilter];
                    if (payload.checked) {
                        rarityFilterCopy.push(payload.toggledRarity);
                    } else {
                        rarityFilterCopy.splice(
                            rarityFilterCopy.findIndex(r => r === payload.toggledRarity),
                            1
                        );
                    }
                    setRarityFilter(rarityFilterCopy);
                }}
                initialRarities={[]}
            />
        </div>
    );
};

interface RarityFilterProps {
    initialRarities: Rarity[];
    onRarityFilterChanged: (payload: { toggledRarity: Rarity; checked: boolean }) => void;
}
const RarityFilterComponent: React.FC<RarityFilterProps> = props => {
    const { initialRarities, onRarityFilterChanged } = props;
    return (
        <div>
            Filter on rarity
            {Object.values(Rarity).map(rarity => (
                <div key={rarity}>
                    {rarity}
                    <CheckboxComponent
                        initiallyChecked={initialRarities.includes(rarity)}
                        onChange={checked => {
                            onRarityFilterChanged({ checked, toggledRarity: rarity });
                        }}
                    />
                </div>
            ))}
        </div>
    );
};
