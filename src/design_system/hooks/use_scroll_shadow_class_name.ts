import { useScrollInfo } from "./use_scroll_info";
import { css } from "emotion";
import { borderRadiuses } from "../constants/border_radiuses";
import { whitespaces } from "../constants/whitespaces";

// passed ref must be compatible with `position: relative`
export function useScrollShadowClassName<T extends HTMLElement>(
    ref: React.MutableRefObject<T> | React.RefObject<T>
): string {
    const scrollInfo = useScrollInfo(ref);

    if (scrollInfo) {
        const { scrollPercentage, canScroll } = scrollInfo;
        const topAmount = scrollPercentage / 100;
        const bottomAmount = 1 - scrollPercentage / 100;

        const topShadowColor = `rgba(0,0,0,${0.16 * topAmount})`;
        const topBackground = `linear-gradient(${topShadowColor}, transparent)`;

        const bottomShadowColor = `rgba(0,0,0,${0.16 * bottomAmount})`;
        const bottomBackground = `linear-gradient(transparent,${bottomShadowColor})`;

        if (canScroll) {
            return css`
                label: scroll-shadow;

                padding: 0;
                position: relative;

                &:before,
                &:after {
                    position: sticky;
                    left: 0;
                    right: 0;
                    display: block;
                    border-radius: ${borderRadiuses[4]};
                    height: ${whitespaces[6]};
                    content: " ";
                    transition: background 0.1s ease;
                }

                &:before {
                    top: 0;
                    background: ${topBackground};
                }

                &:after {
                    bottom: 0;
                    background: ${bottomBackground};
                }
            `;
        }
    }
    return css`
        label: no-scroll-shadow;

        padding-top: ${whitespaces[6]};
        padding-bottom: ${whitespaces[6]};
    `;
}
