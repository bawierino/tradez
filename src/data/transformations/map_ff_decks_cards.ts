import { FFDecksCard } from "../structures/ff_decks_card";
import { getRarityByFFRarity } from "./get_rarity_by_ff_rarity";
import { getOpusBySerial } from "./get_opus_by_serial";
import { FFCard } from "../structures/ff_card";

export function mapFFDecksCards(ffDecksCards: FFDecksCard[]): FFCard[] {
    return ffDecksCards.map(ffCard => {
        const serial = ffCard["Serial number"];

        const specificCardProperties = getSpecificCardProperties(serial);

        return {
            name: ffCard.Name,
            normal: {
                quantity: ffCard["regular quantity"],
                minimalQuantityWanted: 0,
                ...specificCardProperties.normal
            },
            foil: {
                quantity: ffCard["foil quantity"],
                minimalQuantityWanted: 1,
                ...specificCardProperties.foil
            },
            fullArt: { quantity: 0, minimalQuantityWanted: 0, ...specificCardProperties.fullArt },
            foilArt: { quantity: 0, minimalQuantityWanted: 0, ...specificCardProperties.foilArt },
            alternateArt: { quantity: 0, minimalQuantityWanted: 0, ...specificCardProperties.alternateArt },
            alternateArtFoil: {
                quantity: 0,
                minimalQuantityWanted: 0,
                ...specificCardProperties.alternateArt
            },
            rarity: getRarityByFFRarity(ffCard.rarity),
            serial,
            opus: getOpusBySerial(serial),
            minimalWantedQuantity: specificCardProperties.minimalWantedQuantity || 3
        };
    });
}

type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        : T[P] extends object | undefined
        ? RecursivePartial<T[P]>
        : T[P];
};

function getSpecificCardProperties(
    serial: string
): Omit<RecursivePartial<FFCard>, "name" | "serial" | "rarity" | "opus"> {
    switch (serial) {
        case "3-056":
            return { minimalWantedQuantity: 6 };
        case "10-068":
            return { foilArt: { quantity: 2, minimalQuantityWanted: 1 } };
    }
    return {};
}
