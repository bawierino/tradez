import { Opus } from "../structures/opus";

export function getOpusMessage(opus: Opus): string {
    switch (opus) {
        case Opus.NONE:
            return "None";
        default:
            return opus;
    }
}
