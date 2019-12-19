import * as React from "react";

export interface ScrollInfo {
    canScroll: boolean;
    scrollPercentage: number;
}

export function useScrollInfo<T extends HTMLElement>(
    ref: React.MutableRefObject<T> | React.RefObject<T>
): ScrollInfo {
    const [scrollInfo, setScrollInfo] = React.useState(undefined as ScrollInfo);
    React.useLayoutEffect(() => {
        const element = ref.current;

        function generateScrollInfo(): void {
            const { scrollHeight, clientHeight, scrollTop } = ref.current;
            if (scrollTop === 0 && clientHeight === scrollHeight) {
                setScrollInfo({
                    canScroll: false,
                    scrollPercentage: 0
                });
            } else {
                setScrollInfo({
                    canScroll: true,
                    scrollPercentage: Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
                });
                console.log(scrollHeight);
            }
        }
        generateScrollInfo();

        element.addEventListener("scroll", generateScrollInfo);
        return () => element.removeEventListener("scroll", generateScrollInfo);
        // eslint-disable-next-line
    }, []);

    return scrollInfo;
}
