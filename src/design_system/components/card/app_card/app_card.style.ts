import { css } from "emotion";
import { distances } from "../../../constants/distances";

export const appCardStyle = css`
    width: 320px;
    height: 280px;
    @media only screen and (max-width: 750px) and (max-height: 750px) {
        width: 260px;
        height: 200px;
    }
    @media only screen and (max-width: 600px) and (max-height: 600px) {
        width: 220px;
        height: 200px;
    }

    display: flex;
    flex-flow: column;
    justify-content: space-between;

    .title {
        height: 160px;
    }

    .description {
    }

    .button {
        margin-top: ${distances[8]};
        align-self: flex-end;
    }
`;
