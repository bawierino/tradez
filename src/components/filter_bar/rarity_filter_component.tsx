import * as React from "react";
import { Rarity } from "../../data/structures/rarity";
import { CheckboxGroupComponent } from "../checkbox/checkbox_group_component";

export interface RarityFilterProps {
    onRarityFilterChanged: (rarities: Rarity[]) => void;
    initialRarities: Rarity[];
}
export const RarityFilterComponent: React.FC<RarityFilterProps> = props => {
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
