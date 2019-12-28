import { css } from "emotion";
import { colors } from "../../design_system/constants/colors";
import { distances } from "../../design_system/constants/distances";
import { fontSizes } from "../../design_system/constants/font_sizes";

export const wantedCardStyle = css`
    label: wanted-card;

    width: 120px;
    height: 220px;

    color: ${colors.font.default};
    font-size: ${fontSizes.default};

    display: flex;
    flex-flow: column;

    .name {
        font-weight: bold;
        margin-bottom: ${distances[8]};
        font-size: ${fontSizes.default};
    }

    .bottom-line {
        font-size: ${fontSizes.small};
        margin-top: auto;
        display: flex;
        justify-content: space-between;
    }
`;
