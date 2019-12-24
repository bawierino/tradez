import * as React from "react";
import { PageId } from "../../../hooks/use_router";
import { PageProps } from "../page_props";
import {
    ButtonComponent,
    ButtonIconPlacement
} from "../../../design_system/components/button/button_component";
import { CardComponent } from "../../../design_system/components/card/card_component";
import { pageSelectPageStyle } from "./page_select_page.stye";

export interface PageSelectPageProps extends PageProps {}

export const PageSelectPageComponent: React.FC<PageSelectPageProps> = props => {
    const { routerAPI } = props;

    return (
        <div className={pageSelectPageStyle}>
            <CardComponent>
                <ButtonComponent
                    label="See tradeable cards"
                    id="to-tradeable"
                    icon="fas fa-arrow-right"
                    iconPlacement={ButtonIconPlacement.RIGHT}
                    onCLick={() => {
                        routerAPI.navigateToPage(PageId.TRADEABLE_CARDS);
                    }}
                />
            </CardComponent>
            <CardComponent>
                <ButtonComponent
                    label="See wanted cards"
                    id="to-wanted"
                    icon="fas fa-arrow-right"
                    iconPlacement={ButtonIconPlacement.RIGHT}
                    onCLick={() => {
                        routerAPI.navigateToPage(PageId.WANTED_CARDS);
                    }}
                />
            </CardComponent>
        </div>
    );
};
