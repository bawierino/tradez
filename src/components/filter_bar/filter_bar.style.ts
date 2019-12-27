import { css } from "emotion";
import { colors } from "../../design_system/constants/colors";
import { distances } from "../../design_system/constants/distances";
import { Z_INDEX } from "../../design_system/constants/z_indexes";

export const filterBarStyle = css`
    label: filter-bar;

    position: relative;
    z-index: ${Z_INDEX.TOP_BAR};

    padding-top: ${distances[8]};

    display: flex;
    flex-flow: column;
    align-items: center;

    box-shadow: -6px 0 ${colors.primary.main}, 6px 0 ${colors.primary.main},
        0 7px 10px -3px ${colors.shadows.dark};

    background-color: ${colors.primary.main};

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        margin-bottom: ${distances[12]};

        .row-element {
            margin: 0 ${distances[12]};
        }
    }
`;
