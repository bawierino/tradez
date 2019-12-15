import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { useDebouncedState } from "../../hooks/use_debounced_state";
import { CheckboxGroupComponent } from "../checkbox/checkbox_group_component";
import { TextInputComponent } from "../text_input/text_input_component";
import { Opus } from "../../data/structures/opus";

export interface FilterBarProps {
    cards: FFCard[];
    onFilter: (cards: FFCard[]) => void;
}

export const FilterBarComponent: React.FC<FilterBarProps> = props => {
    const { cards, onFilter } = props;

    const [rarityFilter, setRarityFilter] = React.useState([] as Rarity[]);
    const [opusFilter, setOpusFilter] = React.useState([] as Opus[]);
    const [serialFilter, setSerialFilter] = useDebouncedState("");
    const [nameFilter, setNameFilter] = useDebouncedState("");

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
                    if (opusFilter.length) {
                        return opusFilter.includes(c.opus);
                    } else {
                        return true;
                    }
                })
                .filter(c => {
                    if (serialFilter) {
                        return c.serial.toLowerCase().includes(serialFilter.toLowerCase());
                    } else {
                        return true;
                    }
                })
                .filter(c => {
                    if (nameFilter) {
                        return c.name.toLowerCase().includes(nameFilter.toLowerCase());
                    } else {
                        return true;
                    }
                })
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rarityFilter, serialFilter, nameFilter, opusFilter]);

    return (
        <div>
            <div>
                Filter on rarity
                <CheckboxGroupComponent
                    checkboxes={Object.values(Rarity).map(rarity => ({
                        label: rarity,
                        id: rarity
                    }))}
                    onSelectionChanged={selectedIds => {
                        setRarityFilter(selectedIds as Rarity[]);
                    }}
                    initialSelectionIds={rarityFilter}
                />
            </div>
            <div>
                Filter on opus
                <CheckboxGroupComponent
                    checkboxes={Object.values(Opus).map(opus => ({
                        label: opus,
                        id: opus
                    }))}
                    onSelectionChanged={selectedIds => {
                        setOpusFilter(selectedIds as Opus[]);
                    }}
                    initialSelectionIds={opusFilter}
                />
            </div>
            <TextInputComponent
                label={"filter by serial"}
                onChange={text => {
                    setSerialFilter(text);
                }}
                initialValue={serialFilter}
                placeholder={"i.e. 5-036"}
            />
            <TextInputComponent
                label={"filter by name"}
                onChange={text => {
                    setNameFilter(text);
                }}
                initialValue={nameFilter}
                placeholder={"i.e. Zidane"}
            />
        </div>
    );
};
