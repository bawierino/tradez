import { Rarity } from "./rarity";
import { Opus } from "./opus";

export interface FFCard {
    name: string;
    normalAmount: number;
    foilAmount: number;
    fullArtQuantity: number;
    foilArtQuanity: number;
    alternateArtQuantity: number;
    rarity: Rarity;
    serial: string;
    opus: Opus;
}
