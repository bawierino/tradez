import * as React from "react";

export const useOnClickOutside: (
    ref: React.RefObject<any> | React.MutableRefObject<any>,
    onClickOutside: () => void
) => void = (ref, onClickOutside) => {
    function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
        }
    }

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });
};
