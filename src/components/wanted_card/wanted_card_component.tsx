import * as React from "react";
import { FFCard, CardQuantityInfo } from "../../data/structures/ff_card";
import { Rarity } from "../../data/structures/rarity";
import { getTotalQuantity } from "../../data/transformations/get_total_quantity";

export interface WantedCardProps {
    card: FFCard;
}

export const WantedCardComponent: React.FC<WantedCardProps> = props => {
    const { card } = props;

    const hasAbundantQuantity =
        card.rarity === Rarity.COMMON || card.rarity === Rarity.RARE || getTotalQuantity(card) === 0;
    const totalQuantity = getTotalQuantity(card);

    const wantedWhateverVersionQuantity = Math.max(card.minimalWantedQuantity - totalQuantity, 0);

    const wantedNormalQuantity = calculateWantedSpecificQuantity(card.normal);
    const wantedFoilQuantity = calculateWantedSpecificQuantity(card.foil);
    const wantedAlternateArtQuantity = calculateWantedSpecificQuantity(card.alternateArt);
    const wantedFoilAlternateArtQuantity = calculateWantedSpecificQuantity(card.alternateArtFoil);
    const wantedFullArtQuantity = calculateWantedSpecificQuantity(card.fullArt);
    const wantedFoilArtQuantity = calculateWantedSpecificQuantity(card.foilArt);

    const wantAny = !!wantedWhateverVersionQuantity && !hasAbundantQuantity;
    const wantSpecific = [
        wantedNormalQuantity,
        wantedFoilQuantity,
        wantedAlternateArtQuantity,
        wantedFoilAlternateArtQuantity,
        wantedFullArtQuantity,
        wantedFoilArtQuantity
    ].some(q => !!q);

    if (wantAny || wantSpecific) {
        let tradeInfo: string;
        if (wantAny && wantSpecific) {
            tradeInfo = `Want any card, but a specific version is preferred. At least ${wantedWhateverVersionQuantity} wanted. Specific versions preferred are: ${
                !!wantedNormalQuantity ? `normal (${wantedNormalQuantity}) ` : ""
            }${!!wantedFoilQuantity ? `foil (${wantedFoilQuantity}) ` : ""}${
                !!wantedAlternateArtQuantity ? `alt art (${wantedAlternateArtQuantity}) ` : ""
            }${!!wantedFoilAlternateArtQuantity ? `alt art foil (${wantedFoilAlternateArtQuantity}) ` : ""}${
                !!wantedFullArtQuantity ? `full art (${wantedFullArtQuantity}) ` : ""
            }${!!wantedFoilArtQuantity ? `foil art (${wantedFoilArtQuantity})` : ""}
                `;
        } else if (wantAny) {
            tradeInfo = `want any card, do not care about the version. ${wantedWhateverVersionQuantity} wanted.`;
        } else {
            tradeInfo =
                "only interested in specific versions of the card. " +
                `${!!wantedNormalQuantity ? `normal (${wantedNormalQuantity}) ` : ""}${
                    !!wantedFoilQuantity ? `foil (${wantedFoilQuantity}) ` : ""
                }${!!wantedAlternateArtQuantity ? `alt art (${wantedAlternateArtQuantity}) ` : ""}${
                    !!wantedFoilAlternateArtQuantity
                        ? `alt art foil (${wantedFoilAlternateArtQuantity}) `
                        : ""
                }${!!wantedFullArtQuantity ? `full art (${wantedFullArtQuantity}) ` : ""}${
                    !!wantedFoilArtQuantity ? `foil art (${wantedFoilArtQuantity})` : ""
                }
                `;
        }

        return (
            <div>
                {card.name} {card.serial} {card.rarity} {tradeInfo}
            </div>
        );
    } else {
        return null;
    }
};

function calculateWantedSpecificQuantity(info: CardQuantityInfo): number {
    return Math.max(0, info.minimalQuantityWanted - info.quantity);
}
