import { css } from "emotion";
import { distances } from "../../constants/distances";
import { fontSizes } from "../../constants/font_sizes";
import { colors } from "../../constants/colors";
import { animationDurations } from "../../constants/animations";
import { boxShadows } from "../../constants/box_shadows";
import { borderRadiuses } from "../../constants/border_radiuses";

const defaultButtonBackground = `linear-gradient(to bottom right, ${colors.primary.main},${colors.primary.veryLight})`;
const hoveredButtonBackground = `linear-gradient(to bottom right, ${colors.primary.dark},${colors.primary.light})`;

export const buttonStyle = css`
    label: button;

    position: relative;

    overflow: hidden;
    user-select: none;
    cursor: pointer;

    height: ${distances[42]};
    width: ${distances[200]};
    padding: 0 ${distances[12]};
    border-radius: ${borderRadiuses[24]};

    font-size: ${fontSizes.default};
    color: ${colors.shades.none};
    font-weight: bold;

    box-shadow: ${boxShadows.default};

    transition: box-shadow ${animationDurations.short}, transform ${animationDurations.short};

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: ${defaultButtonBackground};
    &.no-touch {
        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: ${hoveredButtonBackground};
            transition: opacity ${animationDurations.short};
            opacity: 0;
        }
        &:hover {
            &:before {
                opacity: 0.75;
            }
        }
    }
    .label,
    .icon {
        z-index: 2000000000;
    }

    &:active {
        transform: translate(1px, 1px);

        box-shadow: ${boxShadows.close};
    }
`;
