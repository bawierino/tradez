import { css } from "emotion";
import { fontSizes } from "../../../../constants/font_sizes";
import { whitespaces } from "../../../../constants/whitespaces";
import { colors } from "../../../../constants/colors";

export const popoverLabelSelectGroupStyle = css`
    label: popover-label-select-group;

    min-width: 120px;
    font-size: ${fontSizes.default};
    max-height: 300px;
    overflow-y: auto;
    user-select: none;

    .selection-explanation {
        font-size: 9px;
        color: ${colors.shades.shade11};
        text-transform: uppercase;
        padding: ${whitespaces[4]} ${whitespaces[6]};
    }
`;
