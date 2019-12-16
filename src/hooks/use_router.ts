import * as React from "react";

export enum PageId {
    PAGE_SELECT = "page_select",
    TRADEABLE_CARDS = "tradeable_cards",
    WANTED_CARDS = "wanted_cards"
}

export interface RouterAPI {
    getCurrentPageId: () => PageId;
    navigateToPage: (id: PageId) => void;
    fallback: () => void;
}

export const useRouter: () => RouterAPI = () => {
    const [currentPageId, setCurrentPage] = React.useState(fallbackPageId);

    function fallback(): void {
        navigateToHash(fallbackPageId, true);
    }

    React.useEffect(() => {
        function navigateToCurrentHash() {
            setCurrentPage(getHash() as PageId);
        }
        window.addEventListener("popstate", navigateToCurrentHash);
        return () => window.removeEventListener("popstate", navigateToCurrentHash);
    }, []);

    React.useEffect(() => {
        const hash = getHash();
        if (hash) {
            navigateToHash(hash, true);
        } else {
            fallback();
        }
    }, []);

    return {
        getCurrentPageId: () => currentPageId,
        navigateToPage: id => {
            navigateToHash(id);
            setCurrentPage(id);
        },
        fallback
    };
};

const firstPathParameter = "tradez";
const fallbackPageId = PageId.PAGE_SELECT;

function navigateToHash(hash: string, replaceHistory?: boolean): void {
    const path = `/${firstPathParameter}#${hash}`;
    if (!replaceHistory) {
        window.history.pushState(undefined, "", path);
    } else {
        window.history.replaceState(undefined, "", path);
    }
    window.dispatchEvent(new Event("popstate"));
}

function hasHash(): boolean {
    const partAfterHash = document.location.hash.replace(`#`, "");
    return partAfterHash.length > 1;
}

function getHash(): string {
    if (hasHash()) {
        return document.location.hash.split("#")[1];
    }
    return "";
}
