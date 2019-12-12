import { Rarity } from "./rarity";
import { Opus } from "./opus";

export interface FFCard {
    name: string;
    normal: CardQuantityInfo;
    foil: CardQuantityInfo;
    fullArt: CardQuantityInfo;
    foilArt: CardQuantityInfo;
    alternateArt: CardQuantityInfo;
    alternateArtFoil: CardQuantityInfo;
    rarity: Rarity;
    serial: string;
    opus: Opus;
    minimalWantedQuantity: number;
}

export interface CardQuantityInfo {
    quantity: number;
    minimalQuantityWanted: number;
}
