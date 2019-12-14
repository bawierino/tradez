import { Opus } from "../structures/opus";

export function getOpusBySerial(serial: string): Opus {
    const opusNumber: string = serial.split("-")?.[0];
    if (opusNumber?.length > 0 && opusNumber?.length < 3) {
        switch (opusNumber) {
            case "1":
                return Opus.I;
            case "2":
                return Opus.II;
            case "3":
                return Opus.III;
            case "4":
                return Opus.IV;
            case "5":
                return Opus.V;
            case "6":
                return Opus.VI;
            case "7":
                return Opus.VII;
            case "8":
                return Opus.VIII;
            case "9":
                return Opus.IX;
            case "10":
                return Opus.X;
            case "PR":
                return Opus.NONE;
            default:
                throw new Error(`${opusNumber} is not a known serial number part to be mapped to an opus.`);
        }
    } else {
        throw new Error(
            `Unexpected state while parsing serial. Expected string of length 1 or 2 but got "${opusNumber}".`
        );
    }
}
