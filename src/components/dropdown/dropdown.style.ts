import { css } from "emotion";
import { Z_INDEX } from "../../design_system/z_indexes";
import { colors } from "../../design_system/colors";
import { whitespaces } from "../../design_system/whitespaces";
import { borderRadiuses } from "../../design_system/border_radiuses";
import { boxShadows } from "../../design_system/box_shadows";

export const dropdownStyle = css`
    label: dropdown;

    z-index: ${Z_INDEX.DROPDOWN};
    background-color: ${colors.shades.none};
    padding: ${whitespaces[4]} ${whitespaces[0]};
    border-radius: ${borderRadiuses[4]};
    box-shadow: ${boxShadows.default};
    left: ${whitespaces[4]};
    position: absolute;
`;
