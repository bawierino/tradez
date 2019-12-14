import * as React from "react";

export enum PageId {
    PAGE_SELECT = "PAGE_SELECT",
    TRADEABLE_CARDS = "TRADEABLE_CARDS",
    WANTED_CARDS = "WANTED_CARDS"
}

export interface RouterAPI {
    getCurrentPageId: () => PageId;
    navigateToPage: (id: PageId) => void;
}

export const useRouter: () => RouterAPI = () => {
    const [currentPage, setCurrentPage] = React.useState(PageId.PAGE_SELECT);

    return { getCurrentPageId: () => currentPage, navigateToPage: id => setCurrentPage(id) };
};
