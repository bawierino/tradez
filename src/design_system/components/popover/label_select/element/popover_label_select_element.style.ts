import { css } from "emotion";
import { colors } from "../../../../constants/colors";
import { whitespaces } from "../../../../constants/whitespaces";
import { animationDurations } from "../../../../constants/animations";

export const popoverLabelSelectElementStyle = css`
    label: popover-label-select-element;

    cursor: pointer;
    user-select: none;

    padding: ${whitespaces[4]} ${whitespaces[8]};

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
                background-color: ${colors.primary.veryLight};
            }
            &.selected {
                background-color: ${colors.primary.dark};
            }
        }
    }
`;
