import { css } from "emotion";
import { Z_INDEX } from "../../constants/z_indexes";
import { colors } from "../../constants/colors";
import { whitespaces } from "../../constants/whitespaces";
import { borderRadiuses } from "../../constants/border_radiuses";
import { boxShadows } from "../../constants/box_shadows";

export const popoverStyle = css`
    label: popover;

    z-index: ${Z_INDEX.DROPDOWN};
    background-color: ${colors.shades.none};
    border-radius: ${borderRadiuses[4]};
    box-shadow: ${boxShadows.default};
    left: ${whitespaces[4]};
    position: absolute;
`;