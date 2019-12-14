import * as React from "react";
import { PageId } from "../../../hooks/use_router";
import { PageProps } from "../page_props";

export interface PageSelectPageProps extends PageProps {}

export const PageSelectPageComponent: React.FC<PageSelectPageProps> = props => {
    const { routerAPI } = props;

    return (
        <div>
            <div
                onClick={() => {
                    routerAPI.navigateToPage(PageId.TRADEABLE_CARDS);
                }}
            >
                see tradeable cards
            </div>
            <div
                onClick={() => {
                    routerAPI.navigateToPage(PageId.WANTED_CARDS);
                }}
            >
                see wanted cards
            </div>
        </div>
    );
};
