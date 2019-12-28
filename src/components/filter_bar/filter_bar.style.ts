import { css } from "emotion";
import { colors } from "../../design_system/constants/colors";
import { distances } from "../../design_system/constants/distances";
import { Z_INDEX } from "../../design_system/constants/z_indexes";
import { animationDurations } from "../../design_system/constants/animations";

export const filterBarStyle = css`
    label: filter-bar;

    z-index: ${Z_INDEX.TOP_BAR};
    position: sticky;
    top: 0;

    transition: transform ${animationDurations.short} ease-out,
        margin-bottom ${animationDurations.short} ease-out;

    padding-top: ${distances[8]};

    display: flex;
    flex-flow: column;
    align-items: center;

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
