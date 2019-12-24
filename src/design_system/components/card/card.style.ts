import { css } from "emotion";
import { animationDurations } from "../../constants/animations";
import { borderRadiuses } from "../../constants/border_radiuses";
import { boxShadows } from "../../constants/box_shadows";
import { distances } from "../../constants/distances";

export const cardStyle = css`
    label: card-component;

    padding: ${distances[12]};
    border-radius: ${borderRadiuses[6]};

    box-shadow: ${boxShadows.default};

    transition: box-shadow ${animationDurations.normal}, transform ${animationDurations.normal};
    &.no-touch {
        &:hover {
            box-shadow: ${boxShadows.popover};
            transform: scale(1.05);
        }
    }
`;
