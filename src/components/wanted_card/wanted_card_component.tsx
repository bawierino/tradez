import * as React from "react";
import { CardQuantityInfo, FFCard } from "../../data/structures/ff_card";
import { getTotalQuantity } from "../../data/utils/get_total_quantity";
import { wantedCardStyle } from "./wanted_card.style";
import { CardComponent } from "../../design_system/components/card/card_component";
import { getRarityMessage } from "../../data/transformations/get_rarity_message";
import { A_LOT } from "../../data/structures/a_lot";

export interface WantedCardProps {
    card: FFCard;
}

export const WantedCardComponent: React.FC<WantedCardProps> = props => {
    const { card } = props;

    const totalQuantity = getTotalQuantity(card);
    const hasATonOfThose = totalQuantity >= A_LOT;

    const wantedWhateverVersionQuantity = Math.max(card.minimalWantedQuantity - totalQuantity, 0);

    const wantedNormalQuantity = calculateWantedSpecificQuantity(card.normal);
    const wantedFoilQuantity = calculateWantedSpecificQuantity(card.foil);
    const wantedAlternateArtQuantity = calculateWantedSpecificQuantity(card.alternateArt);
    const wantedFoilAlternateArtQuantity = calculateWantedSpecificQuantity(card.alternateArtFoil);
    const wantedFullArtQuantity = calculateWantedSpecificQuantity(card.fullArt);
    const wantedFoilArtQuantity = calculateWantedSpecificQuantity(card.foilArt);

    const wantAny = !!wantedWhateverVersionQuantity && !hasATonOfThose;
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
            <CardComponent>
                <div className={wantedCardStyle}>
                    <div className="name">{card.name}</div>
                    <div className="trade-info">{tradeInfo}</div>
                    <div className="bottom-line">
                        <div className="rarity">{getRarityMessage(card.rarity)}</div>
                        <div className="serial">{card.serial}</div>
                    </div>
                </div>
            </CardComponent>
        );
    } else {
        return null;
    }
};

function calculateWantedSpecificQuantity(info: CardQuantityInfo): number {
    return Math.max(0, info.minimalQuantityWanted - info.quantity);
}
