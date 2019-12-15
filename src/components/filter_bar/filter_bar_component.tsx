import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { useDebouncedState } from "../../hooks/use_debounced_state";
import { TextInputComponent } from "../text_input/text_input_component";
import { RarityFilterComponent } from "./rarity_filter_component";

export interface FilterBarProps {
    cards: FFCard[];
    onFilter: (cards: FFCard[]) => void;
}

export const FilterBarComponent: React.FC<FilterBarProps> = props => {
    const { cards, onFilter } = props;

    const [rarityFilter, setRarityFilter] = React.useState([] as Rarity[]);
    const [serialFilter, setSerialFilter] = useDebouncedState("");

    React.useEffect(() => {
        onFilter(
            cards
                .filter(c => {
                    if (rarityFilter.length) {
                        return rarityFilter.includes(c.rarity);
                    } else {
                        return true;
                    }
                })
                .filter(c => {
                    if (serialFilter) {
                        return c.serial.includes(serialFilter);
                    } else {
                        return true;
                    }
                })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rarityFilter, serialFilter]);

    return (
        <div>
            <RarityFilterComponent
                onRarityFilterChanged={rarities => {
                    setRarityFilter(rarities);
                }}
                initialRarities={rarityFilter}
            />
            <TextInputComponent
                label={"filter by serial"}
                onChange={text => {
                    setSerialFilter(text);
                }}
                initialValue={serialFilter}
                placeholder={"i.e. 5-036"}
            />
        </div>
    );
};
