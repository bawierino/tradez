import * as React from "react";
import { ButtonIconPlacement } from "../../../design_system/components/button/button_component";
import { AppCardComponent } from "../../../design_system/components/card/app_card/app_card_component";
import { PageId } from "../../../hooks/use_router";
import { PageProps } from "../page_props";
import { pageSelectPageStyle } from "./page_select_page.stye";
import { colors } from "../../../design_system/constants/colors";

export interface PageSelectPageProps extends PageProps {}

export const PageSelectPageComponent: React.FC<PageSelectPageProps> = props => {
    const { routerAPI } = props;

    return (
        <div className={pageSelectPageStyle}>
            <AppCardComponent
                button={{
                    label: "See tradeable cards",
                    id: "to-tradeable",
                    icon: "fas fa-arrow-right",
                    iconPlacement: ButtonIconPlacement.RIGHT,
                    onCLick: () => {
                        routerAPI.navigateToPage(PageId.TRADEABLE_CARDS);
                    }
                }}
                title="Tradeable Cards"
                description="See the cards we are willing to trade. Most of our cards are in English."
                titleBackground={`linear-gradient(to bottom right, ${colors.secondary.dark}, ${colors.secondary.hoveryLight})`}
            />
            <AppCardComponent
                button={{
                    label: "See wanted cards",
                    id: "to-wanted",
                    icon: "fas fa-arrow-right",
                    iconPlacement: ButtonIconPlacement.RIGHT,
                    onCLick: () => {
                        routerAPI.navigateToPage(PageId.WANTED_CARDS);
                    }
                }}
                title="Wanted Cards"
                description="See the cards we are looking for. We are looking for cards in English and sometimes Japanese or Chinese."
                titleBackground={`linear-gradient(to bottom right, ${colors.alternativeSecondary.dark}, ${colors.alternativeSecondary.hoveryLight})`}
            />
        </div>
    );
};
