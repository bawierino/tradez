import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Opus } from "../../data/structures/opus";
import { Rarity } from "../../data/structures/rarity";
import { Version } from "../../data/structures/version";
import { getSpecificTradeableQuantity } from "../../data/utils/get_specific_tradeable_quantity";
import { hasAbundantQuantity } from "../../data/utils/has_abundant_quantity";
import { SelectionStrategy } from "../../design_system/selection_strategy";
import { useDebouncedState } from "../../hooks/use_debounced_state";
import { DropdownLabelSelectGroupComponent } from "../dropdown/label_select/group/dropdown_label_select_group_component";
import { WrappedDropdownComponent } from "../dropdown/wrapped_dropdown_component";
import { TextInputComponent } from "../text_input/text_input_component";

export interface FilterBarProps {
    cards: FFCard[];
    onFilter: (cards: FFCard[]) => void;
    showTradeableVersionFilter: boolean;
}

export const FilterBarComponent: React.FC<FilterBarProps> = props => {
    const { cards, onFilter, showTradeableVersionFilter } = props;

    const [rarityFilter, setRarityFilter] = React.useState([] as Rarity[]);
    const [opusFilter, setOpusFilter] = React.useState([] as Opus[]);
    const [tradeableVersionFilter, setTradeableVersionFilter] = React.useState([] as Version[]);
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
                    if (tradeableVersionFilter.length) {
                        return tradeableVersionFilter.some(version => {
                            switch (version) {
                                case Version.NORMAL:
                                    return hasAbundantQuantity(c) || !!getSpecificTradeableQuantity(c.normal);
                                case Version.FOIL:
                                    return !!getSpecificTradeableQuantity(c.foil);
                                case Version.ALTERNATE_ART:
                                    return !!getSpecificTradeableQuantity(c.alternateArt);
                                case Version.ALTERNATE_ART_FOIL:
                                    return !!getSpecificTradeableQuantity(c.alternateArtFoil);
                                case Version.FULL_ART:
                                    return !!getSpecificTradeableQuantity(c.fullArt);
                                case Version.FOIL_ART:
                                    return !!getSpecificTradeableQuantity(c.foilArt);
                                default:
                                    throw new Error(`Unknown card version: ${version}`);
                            }
                        });
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
    }, [rarityFilter, serialFilter, nameFilter, opusFilter, tradeableVersionFilter]);

    return (
        <div>
            <div>
                <WrappedDropdownComponent externalPart={<React.Fragment>Filter on rarity</React.Fragment>}>
                    <DropdownLabelSelectGroupComponent
                        elements={Object.values(Rarity).map(rarity => ({
                            label: rarity,
                            id: rarity
                        }))}
                        onSelectionChanged={selectedIds => {
                            setRarityFilter(selectedIds as Rarity[]);
                        }}
                        initialSelectionIds={rarityFilter}
                        selectionStrategy={SelectionStrategy.CHECKBOX}
                    />
                </WrappedDropdownComponent>
            </div>
            <div>
                <WrappedDropdownComponent externalPart={<React.Fragment>Filter on opus</React.Fragment>}>
                    <DropdownLabelSelectGroupComponent
                        elements={Object.values(Opus).map(opus => ({
                            label: opus,
                            id: opus
                        }))}
                        onSelectionChanged={selectedIds => {
                            setOpusFilter(selectedIds as Opus[]);
                        }}
                        initialSelectionIds={opusFilter}
                        selectionStrategy={SelectionStrategy.CHECKBOX}
                    />
                </WrappedDropdownComponent>
            </div>
            {showTradeableVersionFilter && (
                <div>
                    <WrappedDropdownComponent
                        externalPart={<React.Fragment>Filter on card version</React.Fragment>}
                    >
                        <DropdownLabelSelectGroupComponent
                            elements={Object.values(Version).map(version => ({
                                label: version,
                                id: version
                            }))}
                            onSelectionChanged={selectedIds => {
                                setTradeableVersionFilter(selectedIds as Version[]);
                            }}
                            initialSelectionIds={tradeableVersionFilter}
                            selectionStrategy={SelectionStrategy.CHECKBOX}
                        />
                    </WrappedDropdownComponent>
                </div>
            )}
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