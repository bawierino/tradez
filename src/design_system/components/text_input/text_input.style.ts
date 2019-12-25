import { css } from "emotion";
import { distances } from "../../constants/distances";
import { fontSizes } from "../../constants/font_sizes";
import { colors } from "../../constants/colors";
import { borderRadiuses } from "../../constants/border_radiuses";
import { boxShadows } from "../../constants/box_shadows";
import { animationDurations } from "../../constants/animations";

export const textInputStyle = css`
    label: text-input;

    label {
        color: ${colors.font.default};
        font-size: ${fontSizes.default};
    }

    input {
        width: ${distances[200]};
        height: ${distances[42]};
        border-radius: ${borderRadiuses[24]};
        outline: none;
        padding: 0 ${distances[24]};
        border: none;
        box-shadow: ${boxShadows.deep};

        color: ${colors.font.default};
        font-size: ${fontSizes.default};

        transition: box-shadow ${animationDurations.normal} ease-in-out;
        &:focus {
            box-shadow: ${boxShadows.deeper};
        }

        ::placeholder {
            color: ${colors.font.veryLight};
        }
    }
`;
