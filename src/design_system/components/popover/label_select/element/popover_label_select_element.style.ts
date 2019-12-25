import { css } from "emotion";
import { colors } from "../../../../constants/colors";
import { distances } from "../../../../constants/distances";
import { animationDurations } from "../../../../constants/animations";

export const popoverLabelSelectElementStyle = css`
    label: popover-label-select-element;

    cursor: pointer;
    user-select: none;

    padding: ${distances[6]} ${distances[12]};

    transition: background-color ${animationDurations.short}, color ${animationDurations.short};

    &.selected {
        color: ${colors.shades.none};
        background-color: ${colors.primary.main};
    }

    &.not-selected {
        background-color: ${colors.shades.none};
        color: ${colors.font.default};
    }

    &.no-touch {
        &:hover {
            &.not-selected {
                background-color: ${colors.primary.hoveryLight};
            }
            &.selected {
                background-color: ${colors.primary.dark};
            }
        }
    }

    &.touch {
        &:active {
            &.not-selected {
                background-color: ${colors.primary.hoveryLight};
            }
            &.selected {
                background-color: ${colors.primary.dark};
            }
        }
    }
`;
