import { css } from "emotion";
import { whitespaces } from "../../../../constants/whitespaces";
import { fontSizes } from "../../../../constants/font_sizes";

export const popoverLabelSelectGroupStyle = css`
    label: popover-label-select-popoverLabelSelectGroupStyle;

    padding: ${whitespaces[6]} ${whitespaces[0]};
    min-width: 120px;
    font-size: ${fontSizes.default};
    max-height: 280px;
    overflow-y: auto;
`;
