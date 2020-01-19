import { FFCard } from "../structures/ff_card";
import { FFDecksCard } from "../structures/ff_decks_card";
import { getOpusBySerial } from "./get_opus_by_serial";
import { getRarityByFFRarity } from "./get_rarity_by_ff_rarity";
import { A_LOT } from "../structures/a_lot";

export function mapFFDecksCards(ffDecksCards: FFDecksCard[]): FFCard[] {
    return ffDecksCards.map(ffCard => {
        const serial = ffCard["Serial number"];
        const { rarity } = ffCard;

        const specificCardProperties = getSpecificCardProperties(serial, rarity);

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
                ...specificCardProperties.alternateArtFoil
            },
            rarity: getRarityByFFRarity(rarity),
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

type SpecificCardProperties = Omit<RecursivePartial<FFCard>, "name" | "serial" | "rarity" | "opus">;

function getSpecificCardProperties(serial: string, rarity: string): SpecificCardProperties {
    if (rarity === "Common" || rarity === "Rare") {
        const cardProperties: SpecificCardProperties = {
            normal: { quantity: A_LOT, minimalQuantityWanted: 3 }
        };
        return cardProperties;
    } else if (rarity === "Hero") {
        const cardProperties: SpecificCardProperties = {
            normal: { quantity: A_LOT, minimalQuantityWanted: 3 }
        };

        switch (serial) {
            case "10-127":
                cardProperties.minimalWantedQuantity = 6;
                break;
            case "10-117":
                cardProperties.foilArt = { quantity: 5, minimalQuantityWanted: 3 };
                break;
            case "9-062":
                cardProperties.foilArt = { quantity: 3, minimalQuantityWanted: 3 };
                break;
            case "9-030":
                cardProperties.foilArt = { quantity: 1, minimalQuantityWanted: 1 };
                break;
            case "8-015":
                cardProperties.foilArt = { quantity: 3, minimalQuantityWanted: 3 };
                break;
            case "7-129":
                cardProperties.fullArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.foilArt = { minimalQuantityWanted: 1 };
                break;
            case "7-128":
                cardProperties.alternateArtFoil = { quantity: 4, minimalQuantityWanted: 3 };
                break;
            case "6-003":
                cardProperties.alternateArtFoil = { quantity: 3, minimalQuantityWanted: 1 };
                break;
            case "5-148":
                cardProperties.fullArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.foilArt = { quantity: 1, minimalQuantityWanted: 1 };
                break;
            case "5-146":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                break;
            case "5-141":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.alternateArtFoil = { quantity: 2, minimalQuantityWanted: 1 };
                break;
            case "5-116":
                cardProperties.alternateArtFoil = { quantity: 3, minimalQuantityWanted: 1 };
                break;
            case "5-099":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                break;
            case "4-145":
                cardProperties.alternateArtFoil = { quantity: 2, minimalQuantityWanted: 1 };
                break;
            case "4-075":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.alternateArtFoil = { quantity: 1, minimalQuantityWanted: 1 };
                break;
            case "4-037":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                break;
            case "3-056":
                cardProperties.normal = { minimalQuantityWanted: 6 };
                break;
            case "3-022":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.alternateArtFoil = { minimalQuantityWanted: 1 };
                break;
            case "2-109":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.alternateArtFoil = { quantity: 1, minimalQuantityWanted: 1 };
                break;
            case "2-103":
                cardProperties.alternateArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                cardProperties.alternateArtFoil = { quantity: 1, minimalQuantityWanted: 1 };
                break;
            case "1-080":
                cardProperties.foilArt = { quantity: 3, minimalQuantityWanted: 3 };
                cardProperties.fullArt = { quantity: A_LOT, minimalQuantityWanted: 3 };
                break;
            case "1-176":
                cardProperties.foilArt = { quantity: 1, minimalQuantityWanted: 1 };
                break;
        }
        return cardProperties;
    } else if (rarity === "Legend") {
        switch (serial) {
            case "10-128":
                return { foilArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "10-098":
                return { foilArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "10-033":
                return { foilArt: { quantity: 4, minimalQuantityWanted: 3 } };
            case "9-095":
                return { foilArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "9-058":
                return { foilArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "9-014":
                return { foilArt: { quantity: 4, minimalQuantityWanted: 3 } };
            case "8-006":
                return { foilArt: { quantity: 4, minimalQuantityWanted: 3 } };
            case "7-077":
                return { foilArt: { quantity: 6, minimalQuantityWanted: 3 } };
            case "5-086":
                return { fullArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "5-062":
                return { fullArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "5-019":
                return { fullArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "4-115":
                return { fullArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "4-054":
                return { fullArt: { quantity: 1, minimalQuantityWanted: 1 } };
            case "3-056":
                return { minimalWantedQuantity: 6 };
            case "10-068":
                return { foilArt: { quantity: 2, minimalQuantityWanted: 1 } };
        }
    }
    return {};
}
