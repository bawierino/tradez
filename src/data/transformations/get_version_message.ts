import { Version } from "../structures/version";

export function getVersionMessage(version: Version): string {
    switch (version) {
        case Version.NORMAL:
            return "Normal";
        case Version.FOIL:
            return "Foil";
        case Version.FULL_ART:
            return "Full art";
        case Version.FOIL_ART:
            return "Foil art";
        case Version.ALTERNATE_ART:
            return "Alternative art";
        case Version.ALTERNATE_ART_FOIL:
            return "Alternative art foil";
    }
}
