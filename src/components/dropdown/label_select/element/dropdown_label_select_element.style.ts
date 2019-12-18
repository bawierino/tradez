import { css } from "emotion";
import { colors } from "../../../../design_system/colors";
import { whitespaces } from "../../../../design_system/whitespaces";
import { animationDurations } from "../../../../design_system/animations";

export const dropdownLabelSelectElementStyle = css`
    label: dropdown-label-select-element;

    cursor: pointer;
    user-select: none;

    padding: ${whitespaces[4]} ${whitespaces[8]};

    transition: background-color ${animationDurations.short}, color ${animationDurations.short};

    &.selected {
        color: ${colors.shades.none};
        background-color: ${colors.primary.main};
        &:hover {
            background-color: ${colors.primary.dark};
        }
    }

    &.not-selected {
        background-color: ${colors.shades.none};
        color: ${colors.font.default};
        &:hover {
            background-color: ${colors.primary.veryLight};
        }
    }
`;
