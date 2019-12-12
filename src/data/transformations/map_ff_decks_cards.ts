import { FFDecksCard } from "../structures/ff_decks_card";
import { getRarityByFFRarity } from "./get_rarity_by_ff_rarity";
import { getOpusBySerial } from "./get_opus_by_serial";
import { FFCard } from "../structures/ff_card";

export function mapFFDecksCards(ffDecksCards: FFDecksCard[]): FFCard[] {
    return ffDecksCards.map(ffCard => {
        return {
            name: ffCard.Name,
            normalAmount: ffCard["regular quantity"],
            foilAmount: ffCard["foil quantity"],
            fullArtQuantity: 0,
            foilArtQuanity: 0,
            alternateArtQuantity: 0,
            alternateArtFoilQuantity: 0,
            rarity: getRarityByFFRarity(ffCard.rarity),
            serial: ffCard["Serial number"],
            opus: getOpusBySerial(ffCard["Serial number"]),
            minimalWantedQuantity: 3
        };
    });
}
