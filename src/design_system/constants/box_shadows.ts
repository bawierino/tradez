import { colors } from "./colors";

export const boxShadows = {
    default: `0px 2px 6px 0px ${colors.shadows.default}`,
    high: `0px 3px 6px 0px ${colors.shadows.light}`,
    popover: `0px 4px 16px 0px ${colors.shadows.dark}`,
    close: `0 0 2px 0 ${colors.shadows.dark}`,
    deep: `0 1px 4px ${colors.shadows.default} inset`,
    deeper: `0 2px 6px ${colors.shadows.dark} inset`
};
