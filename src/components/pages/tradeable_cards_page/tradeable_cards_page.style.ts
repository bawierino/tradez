import { css } from "emotion";
import { distances } from "../../../design_system/constants/distances";

export const tradeableCardsPageStyle = css`
    label: tradeable-cards-page;

    display: flex;
    flex-flow: column;

    .cards {
        margin-top: ${distances[12]};
        max-width: 760px;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        align-self: center;
    }
`;
