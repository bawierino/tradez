import { css } from "emotion";
import { animationDurations } from "../../constants/animations";
import { borderRadiuses } from "../../constants/border_radiuses";
import { boxShadows } from "../../constants/box_shadows";
import { distances } from "../../constants/distances";
import { colors } from "../../constants/colors";

export const cardStyle = css`
    label: card-component;

    padding: ${distances[12]};
    margin: ${distances[12]};

    background-color: ${colors.shades.none};

    border-radius: ${borderRadiuses[6]};

    box-shadow: ${boxShadows.default};

    transition: box-shadow ${animationDurations.normal} ease-in-out;
    &.no-touch {
        &:hover {
            box-shadow: ${boxShadows.popover};
        }
    }
`;
