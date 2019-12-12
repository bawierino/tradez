import { Rarity } from "./rarity";
import { Opus } from "./opus";

export interface FFCard {
    name: string;
    normalQuantity: number;
    foilQuantity: number;
    fullArtQuantity: number;
    foilArtQuanity: number;
    alternateArtQuantity: number;
    alternateArtFoilQuantity: number;
    rarity: Rarity;
    serial: string;
    opus: Opus;
    minimalWantedQuantity: number;
}
