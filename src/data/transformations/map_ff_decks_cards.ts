import { FFDecksCard } from "../structures/ff_decks_card";
import { getRarityByFFRarity } from "./get_rarity_by_ff_rarity";
import { getOpusBySerial } from "./get_opus_by_serial";
import { FFCard } from "../structures/ff_card";

export function mapFFDecksCards(ffDecksCards: FFDecksCard[]): FFCard[] {
    return ffDecksCards.map(ffCard => {
        return {
            name: ffCard.Name,
            normal: { quantity: ffCard["regular quantity"], minimalQuantityWanted: 0 },
            foil: { quantity: ffCard["foil quantity"], minimalQuantityWanted: 1 },
            fullArt: { quantity: 0, minimalQuantityWanted: 0 },
            foilArt: { quantity: 0, minimalQuantityWanted: 0 },
            alternateArt: { quantity: 0, minimalQuantityWanted: 0 },
            alternateArtFoil: { quantity: 0, minimalQuantityWanted: 0 },
            rarity: getRarityByFFRarity(ffCard.rarity),
            serial: ffCard["Serial number"],
            opus: getOpusBySerial(ffCard["Serial number"]),
            minimalWantedQuantity: 3
        };
    });
}
