import { useHasTouch } from "./use_has_touch";

export const useHasTouchClassName: () => string = () => (useHasTouch() ? "touch" : "no-touch");
