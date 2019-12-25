import { css } from "emotion";
import { animationDurations } from "../../constants/animations";
import { colors } from "../../constants/colors";
import { distances } from "../../constants/distances";
import { fontSizes } from "../../constants/font_sizes";

export const textInputStyle = css`
    label: text-input;

    position: relative;

    padding: 8px;
    margin-top: 12px;
    width: ${distances[200]};

    box-shadow: inset 0 -10px 4px -10px ${colors.shadows.default};
    border-radius: 1px;

    transition: box-shadow ${animationDurations.normal};
    &.focussed {
        box-shadow: inset 0 -10px 4px -10px ${colors.primary.dark};
    }

    label {
        position: absolute;
        top: 8px;
        left: 8px;

        color: ${colors.font.default};
        font-size: ${fontSizes.default};

        transition: transform ${animationDurations.normal}, font-size ${animationDurations.normal};
    }
    &.focussed,
    &.not-empty {
        label {
            transform: translateY(-20px);
            font-size: ${fontSizes.small};
        }
    }

    input {
        outline: none;
        border: none;
        width: 100%;

        background-color: rgba(0, 0, 0, 0);
        color: ${colors.font.default};
        font-size: ${fontSizes.default};

        ::placeholder {
            color: ${colors.font.veryLight};

            opacity: 0;
            transition: opacity ${animationDurations.normal};
        }

        &:focus {
            ::placeholder {
                opacity: 1;
            }
        }
    }
`;
