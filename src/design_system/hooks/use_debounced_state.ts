import * as React from "react";
import debounce from "lodash.debounce";

export function useDebouncedState<S>(
    initialState: S | (() => S)
): [S, React.Dispatch<React.SetStateAction<S>>] {
    const [state, setState] = React.useState(initialState);
    return [state, debounce(setState, 500)];
}
