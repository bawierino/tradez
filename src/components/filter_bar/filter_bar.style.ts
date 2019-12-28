import { css } from "emotion";
import { colors } from "../../design_system/constants/colors";
import { distances } from "../../design_system/constants/distances";
import { Z_INDEX } from "../../design_system/constants/z_indexes";
import { animationDurations } from "../../design_system/constants/animations";

export const filterBarShadow = `-6px 0 ${colors.primary.main}, 6px 0 ${colors.primary.main},
0 7px 10px -3px ${colors.shadows.dark}`;

export const filterBarStyle = css`
    label: filter-bar;

    z-index: ${Z_INDEX.TOP_BAR};
    position: sticky;
    top: 0;

    transition: transform ${animationDurations.normal} ease-out,
        margin-bottom ${animationDurations.normal} ease-out;

    padding-top: ${distances[8]};

    display: flex;
    flex-flow: column;
    align-items: center;

    box-shadow: ${filterBarShadow};

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

export const filterSpawnerStyle = css`
    label: filter-spawner;

    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
    height: 1px;
    width: 1px;

    .inner {
        position: fixed;
        right: 0;
        top: 0;
        transition: transform ${animationDurations.normal};
    }
`;
