import * as React from "react";
import { PageId } from "../../../hooks/use_router";
import { PageProps } from "../page_props";
import {
    ButtonComponent,
    ButtonIconPlacement
} from "../../../design_system/components/button/button_component";

export interface PageSelectPageProps extends PageProps {}

export const PageSelectPageComponent: React.FC<PageSelectPageProps> = props => {
    const { routerAPI } = props;

    return (
        <div style={{ marginLeft: 40, marginTop: 40 }}>
            <ButtonComponent
                label="See tradeable cards"
                id="to-tradeable"
                icon="fas fa-arrow-right"
                iconPlacement={ButtonIconPlacement.RIGHT}
                onCLick={() => {
                    routerAPI.navigateToPage(PageId.TRADEABLE_CARDS);
                }}
            />
            <div style={{ marginTop: 40 }}></div>
            <ButtonComponent
                label="See wanted cards"
                id="to-wanted"
                icon="fas fa-arrow-right"
                iconPlacement={ButtonIconPlacement.RIGHT}
                onCLick={() => {
                    routerAPI.navigateToPage(PageId.WANTED_CARDS);
                }}
            />
        </div>
    );
};
