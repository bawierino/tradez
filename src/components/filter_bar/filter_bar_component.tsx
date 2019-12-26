import * as React from "react";
import { FFCard } from "../../data/structures/ff_card";
import { Opus } from "../../data/structures/opus";
import { Rarity } from "../../data/structures/rarity";
import { Version } from "../../data/structures/version";
import { getSpecificTradeableQuantity } from "../../data/utils/get_specific_tradeable_quantity";
import { hasAbundantQuantity } from "../../data/utils/has_abundant_quantity";
import { SelectionStrategy } from "../../design_system/constants/selection_strategy";
import { useDebouncedState } from "../../design_system/hooks/use_debounced_state";
import { PopoverLabelSelectGroupComponent } from "../../design_system/components/popover/label_select/group/popover_label_select_group_component";
import { WrappedPopoverComponent } from "../../design_system/components/popover/wrapped_popover_component";
import { TextInputComponent } from "../../design_system/components/text_input/text_input_component";
import { getOpusMessage } from "../../data/transformations/get_opus_message";
import { getRarityMessage } from "../../data/transformations/get_rarity_message";
import { getVersionMessage } from "../../data/transformations/get_version_message";
import { WrappedPopoverLabelSelectComponent } from "../../design_system/components/popover/label_select/wrapped_popover_label_select_component";

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
            filter on
            <div>
                <WrappedPopoverLabelSelectComponent
                    label="rarity"
                    selectedElementsMessage={`(${rarityFilter.length} selected)`}
                    elements={Object.values(Rarity).map(rarity => ({
                        label: getRarityMessage(rarity),
                        id: rarity
                    }))}
                    onSelectionChanged={selectedIds => {
                        setRarityFilter(selectedIds as Rarity[]);
                    }}
                    initialSelectionIds={rarityFilter}
                    selectionStrategy={SelectionStrategy.CHECKBOX}
                />
            </div>
            <div>
                <WrappedPopoverComponent
                    externalPart={<React.Fragment>opus ({opusFilter.length} selected)</React.Fragment>}
                >
                    <PopoverLabelSelectGroupComponent
                        elements={Object.values(Opus).map(opus => ({
                            label: getOpusMessage(opus),
                            id: opus
                        }))}
                        onSelectionChanged={selectedIds => {
                            setOpusFilter(selectedIds as Opus[]);
                        }}
                        initialSelectionIds={opusFilter}
                        selectionStrategy={SelectionStrategy.CHECKBOX}
                    />
                </WrappedPopoverComponent>
            </div>
            {showTradeableVersionFilter && (
                <div>
                    <WrappedPopoverComponent
                        externalPart={
                            <React.Fragment>
                                card version ({tradeableVersionFilter.length} selected)
                            </React.Fragment>
                        }
                    >
                        <PopoverLabelSelectGroupComponent
                            elements={Object.values(Version).map(version => ({
                                label: getVersionMessage(version),
                                id: version
                            }))}
                            onSelectionChanged={selectedIds => {
                                setTradeableVersionFilter(selectedIds as Version[]);
                            }}
                            initialSelectionIds={tradeableVersionFilter}
                            selectionStrategy={SelectionStrategy.CHECKBOX}
                        />
                    </WrappedPopoverComponent>
                </div>
            )}
            <div style={{ marginTop: 16 }}></div>
            <TextInputComponent
                label={"Serial"}
                onChange={text => {
                    setSerialFilter(text);
                }}
                initialValue={serialFilter}
                placeholder={"i.e. 5-036"}
            />
            <div style={{ marginTop: 16 }}></div>
            <TextInputComponent
                label={"Name"}
                onChange={text => {
                    setNameFilter(text);
                }}
                initialValue={nameFilter}
                placeholder={"i.e. Zidane"}
            />
        </div>
    );
};
