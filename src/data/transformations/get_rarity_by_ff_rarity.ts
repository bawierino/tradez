import { Rarity } from "../structures/rarity";

export function getRarityByFFRarity(rarity: string): Rarity {
    switch (rarity) {
        case "Common":
            return Rarity.COMMON;
        case "Rare":
            return Rarity.RARE;
        case "Hero":
            return Rarity.HERO;
        case "Legend":
            return Rarity.LEGEND;
        case "Starter":
            return Rarity.STARTER;
        case "Promo":
            return Rarity.PROMO;
        default:
            throw new Error(`${rarity} is not a known rarity.`);
    }
}
