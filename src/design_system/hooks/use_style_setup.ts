import * as React from "react";
import { useScrollShadowClassName } from "./use_scroll_shadow_class_name";
import { css } from "emotion";
import { colors } from "../constants/colors";

export const useStyleSetup: () => void = () => {
    const htmlRef = React.useRef(document.documentElement);
    const scrollShadowClassName = useScrollShadowClassName(htmlRef);
    htmlRef.current.className = scrollShadowClassName;
    document.body.className = css`
        label: global-style;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
            "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(to right, ${colors.primary.hoveryLight}42, rgba(255, 255, 255, 0));
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

        *,
        ::before,
        ::after {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            box-sizing: border-box;
        }
    `;
};
