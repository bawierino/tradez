import { css } from "emotion";
import { distances } from "../../design_system/constants/distances";

export const filterBarStyle = css`
    label: filter-bar;

    padding-top: ${distances[8]};

    display: flex;
    flex-flow: column;
    align-items: center;

    border-bottom: 1px solid black;

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
