import * as React from "react";

export const useHasTouch: () => boolean = () => {
    const [hasTouch, setHasTouch] = React.useState(false);

    function setToHasTouch(): void {
        setHasTouch(true);
        document.removeEventListener("touchstart", setToHasTouch);
    }

    React.useEffect(() => {
        document.addEventListener("touchstart", setToHasTouch, false);
        // eslint-disable-next-line
    }, []);

    React.useEffect(
        () => () => {
            document.removeEventListener("touchstart", setToHasTouch);
        },
        // eslint-disable-next-line
        []
    );
    return hasTouch;
};
