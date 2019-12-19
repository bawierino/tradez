import { Rarity } from "../structures/rarity";

export function getRarityMessage(rarity: Rarity): string {
    switch (rarity) {
        case Rarity.COMMON:
            return "Common";
        case Rarity.RARE:
            return "Rare";
        case Rarity.HERO:
            return "Hero";
        case Rarity.LEGEND:
            return "Legend";
        case Rarity.STARTER:
            return "Starter";
        case Rarity.PROMO:
            return "Promo";
    }
}
