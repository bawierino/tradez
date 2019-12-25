import { css } from "emotion";
import { borderRadiuses } from "../../../constants/border_radiuses";
import { distances } from "../../../constants/distances";
import { colors } from "../../../constants/colors";
import { fontSizes } from "../../../constants/font_sizes";

export const appCardStyle = css`
    width: 320px;
    height: 280px;
    @media only screen and (max-width: 750px) and (max-height: 750px) {
        width: 260px;
        height: 200px;
    }
    @media only screen and (max-width: 600px) and (max-height: 600px) {
        width: 220px;
        height: 200px;
    }

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .title {
        height: 55%;
        margin: -${distances[12]} -${distances[12]} ${distances[12]} -${distances[12]};
        padding: ${distances[12]};
        border-radius: ${borderRadiuses[6]} ${borderRadiuses[6]} 0 0;
        color: ${colors.shades.none};
        font-weight: bold;
        font-size: ${fontSizes.big};
    }

    .description {
        color: ${colors.font.default};
        font-size: ${fontSizes.small};
        margin-bottom: auto;
    }

    .button {
        margin-top: ${distances[8]};
        align-self: flex-end;
    }
`;
